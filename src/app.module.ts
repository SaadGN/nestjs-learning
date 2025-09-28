import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { User } from './users/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthorizeGuard } from './auth/guards/authorize.guard';
import authConfig from './auth/config/auth.config';
import { JwtModule } from '@nestjs/jwt';

const ENV = process.env.NODE_ENV
@Module({
  imports: [UsersModule,
    TweetModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV.trim()}`,
      load: [appConfig, databaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // type: 'postgres',
        // host: configService.get<string>('database.host'),
        // port: configService.get<number>('database.port'),
        // username: configService.get<string>('database.username'),
        // password: "#pakistan123",
        // database: configService.get<string>('database.name'),
        // synchronize: configService.get<boolean>('database.synchronize'),
        // autoLoadEntities: configService.get<boolean>('database.autoLoadEntities'),
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '#pakistan123',
        database: 'nestjs',
        synchronize: true,
        autoLoadEntities: true,
        entities: [User],
      })
    }), ProfileModule,
    HashtagModule,
    ConfigModule.forFeature(authConfig),
    JwtModule.registerAsync(authConfig.asProvider())],

  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthorizeGuard
  }],
})
export class AppModule { }

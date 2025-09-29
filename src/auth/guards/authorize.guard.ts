import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import authConfig from "../config/auth.config";
import type { ConfigType } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { REQ_USER } from "src/constants/constants";


@Injectable()
export class AuthorizeGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,

        @Inject(authConfig.KEY)
        private readonly authConfiguration: ConfigType<typeof authConfig>,

        private readonly reflector:Reflector
    ) { }


    async canActivate(context: ExecutionContext): Promise<boolean> {
        //read isPublic meta data
        const isPublic = this.reflector.getAllAndOverride('isPublic',[
            context.getHandler(),
            context.getClass()
        ])

        if(isPublic){
            return true
        }


        // exatract request from execution context
        const request: Request = context.switchToHttp().getRequest()

        //extract token from req header
        const authHeader = request.headers['authorization'];

        const token = authHeader?.split(' ')[1];

        // console.log(token)

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, this.authConfiguration)
            request[REQ_USER] = payload

        } catch (error) {
            throw new UnauthorizedException();
        }
        return true
    }
}
import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import authConfig from "../config/auth.config";
import type { ConfigType } from "@nestjs/config";


@Injectable()
export class AuthorizeGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,

        @Inject(authConfig.KEY)
        private readonly authConfiguration: ConfigType<typeof authConfig>
    ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
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
            request['user'] = payload
            console.log(payload)

        } catch (error) {
            throw new UnauthorizedException();
        }
        return true
    }
}
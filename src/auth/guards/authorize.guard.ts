import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class AuthorizeGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // exatract request from execution context
        const request: Request = context.switchToHttp().getRequest()

        //extract token from req header
         const authHeader = request.headers['authorization'];

        const token = authHeader?.split(' ')[1];

        console.log(token)

        return true
    }
}
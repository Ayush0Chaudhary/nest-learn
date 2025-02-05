import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<any>;
    signUp(signUpDto: Record<string, any>): Promise<any>;
    status(req: Request): Promise<{
        status: string;
        username: any;
    }>;
    me(req: Request): Promise<any>;
}

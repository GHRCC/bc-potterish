import { Service } from "typedi";
import { JsonController, Post, Body } from "routing-controllers";
import { AuthService } from "./auth.service";
import { stringifyDsn } from "slonik";
import { SignInDto } from "./dtos/sign-in.dto";

@Service()
@JsonController("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  async signIn(@Body() SignInDto: SignInDto) {
    const response = await this.authService.signIn(SignInDto);
    return response;
  }

  @Post("/sign-up")
  async signUp() {}
}

import { Service } from "typedi";
import {
  JsonController,
  Post,
  Body,
  Get,
  CurrentUser,
  Authorized,
} from "routing-controllers";
import { AuthService } from "./auth.service";
import { stringifyDsn } from "slonik";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";
import { IWizard } from "../wizards/wizard.model";
import { request, response } from "express";

@Service()
@JsonController("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  async signIn(@Body() signInDto: SignInDto) {
    const response = await this.authService.signIn(signInDto);
    return response;
  }

  @Post("/sign-up")
  async signUp(@Body() signUpDto: SignUpDto) {
    // const response = await this.authService.signUp(signUpDto);
    // return response;
    const { name, username, surname, password } = signUpDto;
    const user = await this.authService.signUp({
      name,
      username,
      surname,
      password,
    });
    console.log(signUpDto);
    return user;
  }

  @Authorized()
  @Get("/myself")
  async myself(@CurrentUser() wizard: IWizard) {
    return wizard;
  }
}

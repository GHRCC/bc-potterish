import { Service } from "typedi";
import { BadRequestError } from "routing-controllers";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";
import { WizardService } from "../wizards/wizard.service";
import { JwtService } from "./jwt.service";

@Service()
export class AuthService {
  JwtService: any;
  constructor(
    private readonly wizardService: WizardService,
    private readonly: JwtService
  ) {}

  async signIn(signInDto: SignInDto) {
    //1 - procura o usuário pelo username
    //2 - verifica se a senha do usuário encontrado é igual a senha de SignInDto
    //3 - assina o token com username, name, username
    //4 - retorna para o front-end os dados do treinador e o token assinado

    const wizard = await this.wizardService.findOne(signInDto.username);
    if (wizard === null) {
      throw new BadRequestError("User does not exist");
    } else if (wizard.password !== signInDto.password) {
      throw new BadRequestError("Wrong user/password");
    }

    const payload = {
      username: wizard.username,
      name: wizard.name,
      surname: wizard.surname,
    };

    const token = this.JwtService.sign(payload);
    return {
      wizard,
      token,
    };
  }
  async signUp(signUpDto: SignUpDto) {
    const maybeWizard = await this.wizardService.findOne(signUpDto.username);
    if (maybeWizard !== null) {
      throw new BadRequestError("Username already exists");
    }

    const wizard = await this.wizardService.create(signUpDto);
    const payload = {
      username: wizard.username,
      name: wizard.name,
      surname: wizard.surname,
      password: wizard.password,
    };
    const token = this.JwtService.sign(payload);
    return {
      wizard,
      token,
    };
  }
}

import { Service } from "typedi";
import { BadRequestError } from "routing-controllers";
import { SignInDto } from "./dtos/sign-in.dto";
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
      throw new BadRequestError("Usuário não existe");
    } else if (wizard.password !== signInDto.password) {
      throw new BadRequestError("Senha digitada está incorreta");
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
  async signUp() {}
}

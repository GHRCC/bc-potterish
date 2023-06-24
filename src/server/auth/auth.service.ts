import { Service } from "typedi";
import { SignInDto } from "./dtos/sign-in.dto";
import { WizardService } from "../wizards/wizard.service";

@Service()
export class AuthService {
  constructor(private readonly wizardService: WizardService) {}

  async signIn(signInDto: SignInDto) {
    //1 - procura o usuário pelo username
    //2 - verifica se a senha do usuário encontrado é igual a senha de SignInDto
    //3 - assina o token com username, name, username
    //4 - retorna para o front-end os dados do treinador e o token assinado

    const wizard = await this.wizardService.findOne(signInDto.username);
    if (wizard === null || wizard.password !== signInDto.password) {
    }

    const payload = {
      username: wizard.username,
      name: wizard.name,
      surname: wizard.surname,
    };
  }
  async signUp() {}
}

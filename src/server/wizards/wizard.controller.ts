import { JsonController } from "routing-controllers";
import { Service } from "typedi"; // é o que nos permite injetar dependências ou injetar essa classe como dependência de uma outra classe

@Service()
@JsonController("/wizard") //o prefixo da rota, todos os métodos que eu colocar aqui dentro estão prefixados
export class WizardController {
  constructor() {}
}
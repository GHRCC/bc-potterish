import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "routing-controllers";
import { Service } from "typedi"; // é o que nos permite injetar dependências ou injetar essa classe como dependência de uma outra classe
import { WizardService } from "./wizard.service";
import { CreateWizardDto } from "./dtos/create-wizard.dto";
import { UpdateWizardDto } from "./dtos/update-wizard.dto";
@Service()
@JsonController("/wizard") //o prefixo da rota, todos os métodos que eu colocar aqui dentro estão prefixados
export class WizardController {
  constructor(private readonly wizardService: WizardService) {}
  @Post()
  async create(@Body() createWizardDto: CreateWizardDto) {
    const wizard = this.wizardService.create(createWizardDto);
    return wizard;
  }
}

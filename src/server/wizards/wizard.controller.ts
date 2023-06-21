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

  @Get()
  async findAll() {
    const wizards = await this.wizardService.findAll();
    return wizards;
  }

  @Get("/:username")
  async findOne(@Param("username") username: string) {
    const wizard = await this.wizardService.findOne(username);
    return wizard;
  }
  @Post()
  async create(@Body() createWizardDto: CreateWizardDto) {
    const wizard = this.wizardService.create(createWizardDto);
    return wizard;
  }

  @Put("/:username")
  async update(
    @Param("username") username: string,
    @Body() updateWizardDto: UpdateWizardDto
  ) {
    const wizard = await this.wizardService.update(username, updateWizardDto);
    return wizard;
  }

  @Delete("/:username")
  async delete(@Param("username") username: string) {
    const wizard = await this.wizardService.delete(username);
    return wizard;
  }
}

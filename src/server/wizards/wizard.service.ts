import { Service } from "typedi";
import { WizardRepository } from "./wizard.repository";
import { CreateWizardDto } from "./dtos/create-wizard.dto";
import { UpdateWizardDto } from "./dtos/update-wizard.dto";

@Service()
export class WizardService {
  constructor(private readonly wizardRespository: WizardRepository) {}

  async findAll() {
    const wizards = await this.wizardRespository.findAll();
    return wizards;
  }
  async findOne(username: string) {
    const wizard = await this.wizardRespository.findOne(username);
    return wizard;
  }

  async create(createWizardDto: CreateWizardDto) {
    const wizard = await this.wizardRespository.create(createWizardDto);
    return wizard;
  }

  async update(username: string, updateWizardDto: UpdateWizardDto) {
    const wizard = await this.wizardRespository.update(
      username,
      updateWizardDto
    );
    return wizard;
  }

  async delete(username: string) {
    const wizard = await this.wizardRespository.delete(username);
    return wizard;
  }
}

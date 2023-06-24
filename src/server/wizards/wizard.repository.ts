import { Service } from "typedi";
import { Wizard } from "./wizard.model"; //depois que eu importar a model, posso usar os métodos
import { CreateWizardDto } from "./dtos/create-wizard.dto";
import { UpdateWizardDto } from "./dtos/update-wizard.dto";
@Service()
export class WizardRepository {
  constructor() {}

  async findAll() {
    const wizards = await Wizard.find().lean();
    return wizards;
  }
  async findOne(username: string) {
    const wizard = await Wizard.findOne({ username }).lean();
    return wizard;
  }
  async create(createWizardDto: CreateWizardDto) {
    const wizard = await (await Wizard.create(createWizardDto)).toJSON();
    return wizard;
  }
  async update(username: string, updateWizardDto: UpdateWizardDto) {
    const wizard = await Wizard.findOneAndUpdate(
      { username },
      updateWizardDto
    ).lean();
    return wizard;
  }
  async delete(username: string) {
    const wizard = await Wizard.findOneAndDelete({ username }).lean();
    return wizard;
  }
}

import { Service } from "typedi";
import { WizardRepository } from "./wizard.repository";

@Service()
export class WizardService {
  constructor(private readonly wizardRespository: WizardRepository) {}
}

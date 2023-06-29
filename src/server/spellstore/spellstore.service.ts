import { Service } from "typedi";
import { BadRequestError } from "routing-controllers";
import { SpellStoreRepository } from "./spellstore.repository";
import { WizardService } from "../wizards/wizard.service";
import { SpellStoreCreateDto } from "./dtos/spellstore-create.dto";
import { SellSpellDto } from "./dtos/sell-spell.dto";
import { spellSchema } from "../spells/spells.schema";

@Service()
export class SpellStoreService {
  constructor(
    private readonly spellStoreRepository: SpellStoreRepository,
    private readonly wizardService: WizardService
  ) {}

  async findOne(name: string) {
    const spell = await this.spellStoreRepository.findOne(name);
    return spell;
  }

  async findAll() {
    const spellStore = await this.spellStoreRepository.findAll();
    return spellStore;
  }

  async create(spellStoreCreateDto: SpellStoreCreateDto) {
    const spell = await this.spellStoreRepository.create(spellStoreCreateDto);
    return spell;
  }
}

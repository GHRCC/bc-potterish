import { Service } from "typedi";
import {
  JsonController,
  Body,
  CurrentUser,
  Post,
  Get,
  Param,
  Authorized,
} from "routing-controllers";
import { SpellStoreService } from "./spellstore.service";
import { SpellStoreCreateDto } from "./dtos/spellstore-create.dto";
import { IWizard } from "../wizards/wizard.model";

@Service()
@JsonController("/spellstore")
export class SpelltoreController {
  constructor(private readonly spellStoreService: SpellStoreService) {}

  @Get("/:spellname")
  async getOne(@Param("spellName") spellName: string) {
    const spell = await this.spellStoreService.findOne(spellName);
    return spell;
  }

  @Get()
  async getAll() {
    const spellStore = await this.spellStoreService.findAll();
    return spellStore;
  }

  @Post()
  async create(@Body() spellStoreCreateDto: SpellStoreCreateDto) {
    const spell = await this.spellStoreService.create(spellStoreCreateDto);
    return spell;
  }
}

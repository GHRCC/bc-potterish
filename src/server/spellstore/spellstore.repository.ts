import { Service } from "typedi";
import { SpellStore } from "./spellstore.model";
import { SpellStoreCreateDto } from "./dtos/spellstore-create.dto";

@Service()
export class SpellStoreRepository {
  constructor() {}

  async findAll() {
    const spellStore = await SpellStore.find().lean();
    return spellStore;
  }

  async findOne(name: string) {
    const spell = await SpellStore.findOne({
      name,
    }).lean();
    return spell;
  }

  async create(spellStoreCreateDto: SpellStoreCreateDto) {
    const spell = (await SpellStore.create(spellStoreCreateDto)).toJSON();
    return spell;
  }
}

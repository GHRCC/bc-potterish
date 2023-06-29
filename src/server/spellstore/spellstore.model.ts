import { model, Schema } from "mongoose";
import { ISpell, spellSchema } from "../spells/spells.schema";

export type ISpellStore = ISpell;
export const spellStoreSchema = spellSchema;
export const SpellStore = model("SpellStore", spellStoreSchema);

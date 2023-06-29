import { IsString, MinLength } from "class-validator";
import type { IWizard } from "../../wizards/wizard.model";

export class SellSpellDto {
  @IsString()
  @MinLength(2)
  spellName: string;

  wizard: IWizard;
}

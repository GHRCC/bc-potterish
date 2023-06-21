import { MinLength, MaxLength, Matches, IsLowercase } from "class-validator";
import { IWizard } from "../wizard.model";

export class UpdateWizardDto implements Partial<IWizard> {
  @MinLength(2)
  @MaxLength(16)
  name: string;
  @MinLength(2)
  @MaxLength(24)
  surname: string;
  @MinLength(8)
  @MaxLength(64)
  password: string;
}

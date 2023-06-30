import {
  MinLength,
  MaxLength,
  IsLowercase,
  Matches,
  IsStrongPassword,
} from "class-validator";

import type { IWizard } from "../../wizards/wizard.model";
import type { ISpell } from "../../spells/spells.schema";

export class SignUpDto implements Partial<IWizard> {
  @MinLength(4)
  @MaxLength(16)
  @IsLowercase()
  @Matches(/^[a-z]+$/, {
    message: "username must be lowercased",
  })
  username: string;

  @MinLength(2)
  @MaxLength(16)
  @Matches(/^[A-Z]/)
  name: string;

  @MinLength(2)
  @MaxLength(24)
  @Matches(/^[A-Z]/)
  surname: string;

  @IsStrongPassword()
  password: string;
}

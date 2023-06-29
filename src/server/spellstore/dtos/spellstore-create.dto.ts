import {
  MinLength,
  MaxLength,
  Min,
  Max,
  Matches,
  Equals,
  IsInt,
} from "class-validator";

export class SpellStoreCreateDto {
  @MinLength(2)
  @MaxLength(16)
  @Matches(/^[A-Z]/)
  name: string;

  @Matches(/^(Dark|Light|Curse)$/g)
  type: string;

  @IsInt()
  @Min(1)
  @Max(9999)
  atk: number;

  @IsInt()
  @Equals(1)
  level: number;

  @IsInt()
  @Min(1)
  price: number;
}

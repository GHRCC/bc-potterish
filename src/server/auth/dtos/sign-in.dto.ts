import { IsString, IsLowercase } from "class-validator";

export class SignInDto {
  @IsString()
  @IsLowercase()
  username: string;
  @IsString()
  password: string;
}

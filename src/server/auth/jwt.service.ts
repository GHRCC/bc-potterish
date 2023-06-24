import { Service } from "typedi";
import jwt, { sign, verify } from "jsonwebtoken";

const jwtSecret = "";
@Service()
export class JwtService {
  constructor() {}
  verify(token: string) {
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  }

  sign(payload: any) {
    const token = jwt.sign(payload, jwtSecret);
    return token;
  }
}

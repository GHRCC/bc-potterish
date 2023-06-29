import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { connect } from "mongoose";
import { WizardController } from "./wizards/wizard.controller";
import { AuthController } from "./auth/auth.controller";
import { authorizationChecker } from "./auth/checkers/authorization.checker";

useContainer(Container);

const port = process.env.PORT as string;
const host = process.env.HOST as string;
console.log("antes do express");
createExpressServer({
  controllers: [WizardController, AuthController],
  cors: true,
  authorizationChecker,
}).listen(port, host, async () => {
  console.log("texto");
  await connect(process.env.DATABASE_URL as string);
  console.log(`Servidor express iniciado em http://${host}:${port}.`);
});

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

const myEnv = dotenv.config();

console.log(process.env);
const port = 9000;
const host = "0.0.0.0";
console.log("antes do express");
createExpressServer({
  controllers: [WizardController, AuthController],
  cors: true,
  authorizationChecker,
}).listen(port, async () => {
  console.log("texto");
  await connect("mongodb://aluno:aluno123@142.93.174.194:27017/");
  console.log(`Servidor express iniciado em http://localhost:${port}.`);
});

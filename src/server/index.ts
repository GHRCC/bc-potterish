import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { connect } from "mongoose";
import { WizardController } from "./wizards/wizard.controller";
import { AuthController } from "./auth/auth.controller";

useContainer(Container);

const port = process.env.PORT as string;
const host = process.env.HOST as string;

createExpressServer({
  controllers: [WizardController, AuthController],
  cors: true,
}).listen(port, host, async () => {
  await connect(process.env.DATABASE_URL as string);
  console.log(`Servidor express iniciado em http://${host}:${port}.`);
});

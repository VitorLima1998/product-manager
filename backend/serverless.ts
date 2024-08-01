import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { AppModule } from './src/app.module';

const expressApp = express();
let server: Server;

const bootstrapServer = async () => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.init();
  server = createServer(expressApp);
};

bootstrapServer();

export const handler = (event, context) => {
  proxy(server, event, context);
};

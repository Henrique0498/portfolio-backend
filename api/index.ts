import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'
import cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'
import { ExpressAdapter } from '@nestjs/platform-express'
import { NestExpressApplication } from '@nestjs/platform-express'
import express from 'express'
import { join } from 'path'

const server = express()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  )

  const nodeEnv = process.env.NODE_ENV as 'production' | 'development'
  const originWhitelist = {
    production: [
      'https://henriquelopes.dev.br',
      'https://vue.henriquelopes.dev.br'
    ],
    development: ['http://localhost:3000', 'http://localhost:3001']
  }

  const origin = originWhitelist[nodeEnv]

  app.enableCors({
    origin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  })

  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())

  app.useStaticAssets(join(__dirname, '..', 'public'))

  await app.init()
}

bootstrap()

export default server

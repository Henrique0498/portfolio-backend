import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const nodeEnv = process.env.NODE_ENV as 'production' | 'development'
  const originWhitelist = {
    production: [
      'https://henriquelopes.dev.br',
      'vue.https://henriquelopes.dev.br'
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

  await app.listen(3333)
}
bootstrap()

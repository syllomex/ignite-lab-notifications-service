import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CryptoService, PrismaService } from './services'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, CryptoService],
})
export class AppModule {}

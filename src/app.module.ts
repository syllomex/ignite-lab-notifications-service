import { Module } from '@nestjs/common'

import { SendNotification } from './application/usecases'
import { NotificationController } from './infra/http/controllers/notification.controller'
import { CryptoService } from './infra/services'
import { DatabaseModule } from './infra/services/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [CryptoService, SendNotification],
})
export class AppModule {}

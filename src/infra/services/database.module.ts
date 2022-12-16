import { Module } from '@nestjs/common'
import {
  CreateNotificationRepository,
  NotificationRepository,
} from '../../application/repositories'
import { PrismaNotificationRepository } from '../repositories'
import { PrismaService } from './prisma.service'

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
    {
      provide: CreateNotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository, CreateNotificationRepository],
})
export class DatabaseModule {}

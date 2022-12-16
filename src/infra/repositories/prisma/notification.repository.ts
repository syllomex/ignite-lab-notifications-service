import { Notification } from '../../../domain/entities'
import { PrismaService } from '../../../infra/services'
import { CreateNotificationRepository } from '../../../application/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaNotificationRepository
  implements CreateNotificationRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
        recipientId: notification.recipientId,
      },
    })
  }
}

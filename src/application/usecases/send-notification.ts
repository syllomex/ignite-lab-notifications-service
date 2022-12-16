import { Injectable } from '@nestjs/common'
import { Notification, NotificationContent } from '../../domain/entities'
import { CryptoService } from '../../infra/services'
import { CreateNotificationRepository } from '../repositories'

interface Input {
  recipientId: string
  content: string
  category: string
}

interface Output {
  notification: Notification
}

@Injectable()
export class SendNotification {
  constructor(
    private readonly notificationRepo: CreateNotificationRepository,
    private readonly crypto: CryptoService,
  ) {}

  async perform(input: Input): Promise<Output> {
    const notification = new Notification({
      id: this.crypto.uuid(),
      recipientId: input.recipientId,
      content: new NotificationContent(input.content),
      category: input.category,
    })

    await this.notificationRepo.create(notification)

    return { notification }
  }
}

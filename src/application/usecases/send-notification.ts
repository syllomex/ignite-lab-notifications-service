import { CreateNotificationRepository } from '../../domain/repositories'
import { Notification, NotificationContent } from '../../domain/entities'

interface Input {
  recipientId: string
  content: string
  category: string
}

interface Output {
  notification: Notification
}

export class SendNotification {
  constructor(
    private readonly notificationRepo: CreateNotificationRepository,
  ) {}

  async perform(input: Input): Promise<Output> {
    const notification = new Notification({
      recipientId: input.recipientId,
      content: new NotificationContent(input.content),
      category: input.category,
    })

    await this.notificationRepo.create(notification)

    return { notification }
  }
}

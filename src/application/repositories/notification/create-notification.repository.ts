import { Notification } from '../../../domain/entities'

export abstract class CreateNotificationRepository {
  abstract create(notification: Notification): Promise<void>
}

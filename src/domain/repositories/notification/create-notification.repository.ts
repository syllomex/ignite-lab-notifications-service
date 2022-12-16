import { Notification } from '../../entities'

export abstract class CreateNotificationRepository {
  abstract create(notification: Notification): Promise<void>
}

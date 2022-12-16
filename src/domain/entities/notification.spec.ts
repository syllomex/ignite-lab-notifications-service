import { Notification } from './notification'
import { NotificationContent } from './notification-content'

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'any_recipient_id',
    })

    expect(notification).toBeTruthy()
    expect(notification.createdAt).toBeInstanceOf(Date)
  })
})

import { CreateNotificationRepository } from '../repositories'
import { Notification } from '../../domain/entities'
import { SendNotification } from './send-notification'
import { MockProxy } from '../../utils/types'

describe('send-notification', () => {
  let sut: SendNotification
  let notificationRepo: MockProxy<CreateNotificationRepository>

  beforeAll(() => {
    notificationRepo = {
      create: jest.fn(),
    }
  })

  beforeEach(() => {
    sut = new SendNotification(notificationRepo)
  })

  it('should be able to send a notification', async () => {
    const { notification } = await sut.perform({
      category: 'any-category',
      content: 'any-content',
      recipientId: 'any-recipient-id',
    })

    expect(notification).toBeInstanceOf(Notification)
    expect(notificationRepo.create).toHaveBeenCalledTimes(1)
    expect(notificationRepo.create).toHaveBeenCalledWith(notification)
  })
})

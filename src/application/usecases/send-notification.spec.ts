import { CreateNotificationRepository } from '../repositories'
import { Notification } from '../../domain/entities'
import { SendNotification } from './send-notification'
import { MockProxy } from '../../utils/types'
import { CryptoService } from '../../infra/services'

describe('send-notification', () => {
  let sut: SendNotification
  let notificationRepo: MockProxy<CreateNotificationRepository>
  let crypto: MockProxy<CryptoService>

  beforeAll(() => {
    notificationRepo = {
      create: jest.fn(),
    }

    crypto = {
      uuid: jest.fn().mockReturnValue('any-uuid'),
    }
  })

  beforeEach(() => {
    sut = new SendNotification(notificationRepo, crypto)
  })

  it('should be able to send a notification', async () => {
    const { notification } = await sut.perform({
      category: 'any-category',
      content: 'any-content',
      recipientId: 'any-recipient-id',
    })

    expect(notification).toBeInstanceOf(Notification)
    expect(notification.id).toBe('any-uuid')
    expect(notificationRepo.create).toHaveBeenCalledTimes(1)
    expect(notificationRepo.create).toHaveBeenCalledWith(notification)
  })
})

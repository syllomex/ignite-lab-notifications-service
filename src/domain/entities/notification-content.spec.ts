import { InvalidLengthError } from '../errors'
import { NotificationContent } from './notification-content'

describe('NotificationContent', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Você recebeu uma nova solicitação de amizade.',
    )

    expect(content.value).toBeTruthy()
  })

  it('should not be able to create a notification with less than minimum content length', () => {
    expect(() => {
      new NotificationContent('.'.repeat(NotificationContent.MIN_LENGTH - 1))
    }).toThrowError(InvalidLengthError)
  })

  it('should not be able to create a notification with more than maximum content length', () => {
    expect(() => {
      new NotificationContent('.'.repeat(NotificationContent.MAX_LENGTH + 1))
    }).toThrowError(InvalidLengthError)
  })
})

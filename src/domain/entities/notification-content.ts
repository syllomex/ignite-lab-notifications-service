import { InvalidLengthError } from '../errors'

export class NotificationContent {
  private readonly content: string

  public static MAX_LENGTH = 240
  public static MIN_LENGTH = 5

  constructor(content: string) {
    this.validate(content)
    this.content = content
  }

  public get value() {
    return this.content
  }

  private validate(content: string) {
    if (content.length < 5 || content.length > 240) {
      throw new InvalidLengthError('O conteúdo deve ter de 5 a 240 caracteres.')
    }
  }
}

import { IsNotEmpty, IsUUID } from 'class-validator'

export class CreateNotificationDTO {
  @IsNotEmpty()
  @IsUUID('4')
  recipientId: string

  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  category: string
}

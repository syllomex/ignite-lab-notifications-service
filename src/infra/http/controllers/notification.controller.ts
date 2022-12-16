import { Body, Controller, Post } from '@nestjs/common'

import { SendNotification } from '../../../application/usecases'
import { CreateNotificationDTO } from '../../../dto/notification/create'

@Controller('notifications')
export class NotificationController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { notification } = await this.sendNotification.perform({
      category: body.category,
      content: body.content,
      recipientId: body.recipientId,
    })

    return { notification }
  }
}

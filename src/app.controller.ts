import { Body, Controller, Post } from '@nestjs/common'
import { CreateNotificationDTO } from './dto/notification/create'
import { CryptoService, PrismaService } from './infra/services'

@Controller('notifications')
export class AppController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly crypto: CryptoService,
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    await this.prisma.notification.create({
      data: {
        id: this.crypto.uuid(),
        recipientId: body.recipientId,
        category: body.category,
        content: body.content,
        createdAt: new Date(),
      },
    })
  }
}

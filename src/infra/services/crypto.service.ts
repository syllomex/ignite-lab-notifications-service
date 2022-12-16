import { Injectable } from '@nestjs/common'
import { randomUUID } from 'node:crypto'

@Injectable()
export class CryptoService {
  uuid() {
    return randomUUID()
  }
}

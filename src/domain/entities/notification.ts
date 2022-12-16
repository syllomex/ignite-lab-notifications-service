import { Replace } from 'src/utils/types'
import { NotificationContent } from './notification-content'

export interface NotificationProps {
  id: string
  recipientId: string
  content: NotificationContent
  category: string
  readAt?: Date | null
  createdAt: Date
}

export class Notification {
  private props: NotificationProps

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id() {
    return this.props.id
  }

  public get content() {
    return this.props.content
  }

  public set content(value: NotificationContent) {
    this.props.content = value
  }

  public get category() {
    return this.props.category
  }

  public set category(value: string) {
    this.props.category = value
  }

  public get readAt() {
    return this.props.readAt
  }

  public set readAt(value: Date | null | undefined) {
    this.props.readAt = value
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get recipientId() {
    return this.props.recipientId
  }
}

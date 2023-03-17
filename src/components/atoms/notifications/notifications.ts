import { notification } from 'antd'
import { ErrorNotificationInterface } from 'types/types'

export const notifications = {
  errorNotification(e: ErrorNotificationInterface) {
    notification.error({
      message: `Whops, something wrong with ${e.field} 😱😱😱`,
      description: e.message,
    })
  },
}

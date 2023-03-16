import { axiosInstance } from 'api/config/axiosInstance'
import { endpoints } from 'api/config/endpoints'

export const todosGet = async (): Promise<any> => {
  return await axiosInstance.get(endpoints.todos_list)
}

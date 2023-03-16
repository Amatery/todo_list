import { axiosInstance } from 'api/config/axiosInstance'
import { endpoints } from 'api/config/endpoints'
import { AxiosResponse } from 'axios'
import { compile } from 'path-to-regexp'

export const todoListRequests = {
  async todosGet(): Promise<AxiosResponse> {
    return await axiosInstance.get(endpoints.todos_list)
  },
  async todoPost(title: string, description: string): Promise<AxiosResponse> {
    return await axiosInstance.post(endpoints.todos_list, {
      title,
      description,
    })
  },
  async todoDelete(id: string): Promise<AxiosResponse> {
    return await axiosInstance.delete(compile(endpoints.todo)({ id }))
  },
  async todoUpdate(id: string, status: string) {
    return await axiosInstance.put(compile(endpoints.todo)({ id }), {
      status,
    })
  },
}

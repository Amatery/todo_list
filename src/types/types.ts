export interface TodoListInterface {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
}

export interface CreateTodoInterface {
  title: string;
  description: string;
}

export interface ErrorNotificationInterface {
  message: string;
  field: string;
}

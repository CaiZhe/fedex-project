export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
  }

export interface UserResponseData {
    data?: {
      user: User
    },
    status?: string
  }
  
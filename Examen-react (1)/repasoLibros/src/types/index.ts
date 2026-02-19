// === ENTIDADES ===

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: "ficcion" | "no ficcion" | "ciencia" | "historia" | "infantil" | "otro";
  price: number;
  status: "disponible" | "agotado";
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

// === RESPUESTAS DEL BACKEND ===

export interface AuthResponse {
  ok: boolean;
  data?: {
    user: User;
    token: string;
  };
  error?: string;
}

export interface BooksResponse {
  ok: boolean;
  data?: Book[];
  error?: string;
}

export interface BookResponse {
  ok: boolean;
  data?: Book;
  error?: string;
}

export interface MessageResponse {
  ok: boolean;
  message?: string;
  error?: string;
}

// === DTOs (datos que envías al backend) ===

export interface LoginDTO {
  email: string;
  password: string;
}

export interface CreateBookDTO {
  title: string;
  author: string;
  description: string;
  genre: "ficcion" | "no ficcion" | "ciencia" | "historia" | "infantil" | "otro";
  price: number;
}

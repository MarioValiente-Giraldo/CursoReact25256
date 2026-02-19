import type { AuthResponse, BookResponse, BooksResponse, CreateBookDTO, LoginDTO, MessageResponse, User } from "../types";
const API_URL = import.meta.env.VITE_API_URL


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `Error ${response.status}`);
  }
  return response.json();
}
//authApi 
export function getHeaders(): HeadersInit {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    const token = localStorage.getItem("token");
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
}
export const authApi = {
     /**
   * Iniciar sesión
   */
  async login(data: LoginDTO): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/users?email=${encodeURIComponent(data.email)}`);
    if (!response.ok) return { ok: false, error: 'Error de servidor' }
    const users: User[] = await response.json()
    if (users.length === 0 || users[0].password !== data.password) {
      return { ok: false, error: 'Credenciales incorrectas' }
    }
    return { ok: true, data: { user: users[0], token: 'fake-token' } }
  },

  /**
   * Obtener información del usuario autenticado
   */
  async getMe(): Promise<{ user: User }> {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: getHeaders(),
    });
    return handleResponse<{ user: User }>(response);
  },
}

//booksApi
export const booksApi = {
    async getBooks():Promise<BooksResponse>{
        try{
            const response = await fetch(`${API_URL}/books`);
            if(!response.ok) return { ok: false, error: `Error ${response.status}` }
            const data = await response.json()
            return { ok: true, data }
        }catch(error){
            throw error
        }
    },
    async createBook(book:CreateBookDTO):Promise<BookResponse>{
        try{
            const response = await fetch(`${API_URL}/books`,{
                method:'POST',
                headers: getHeaders(),
                body:JSON.stringify(book)
            })
            return handleResponse<BookResponse>(response)

        }catch(error){
            throw error
        }
    },
    async deleteBook(id:number):Promise<MessageResponse>{
        try {
            const response = await fetch(`${API_URL}/books/${id}`,{
                method:'DELETE'
            })
            return handleResponse<BookResponse>(response)       
         } catch (error) {
            throw error
        }
    }

}
export type theme = 'light' | 'dark'| 'system'
export type language = 'es' | 'en'
export interface User{
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: 'admin' | 'user'
}
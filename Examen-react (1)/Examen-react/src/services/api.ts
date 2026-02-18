import type { AuthResponse, CreateIncidentDTO, IncidentResponse, IncidentsResponse, LoginDTO, MessageResponse, User } from "../types";

const API_URL = import.meta.env.VITE_API_URL_BASE;

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

export const authAPI = {
    async login(data: LoginDTO): Promise<AuthResponse> {
        const response = await fetch(
            `${API_URL}/users?email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}`
        );
        if (!response.ok) throw new Error("Error al iniciar sesión");

        const users = await response.json();
        if (!users.length) return { ok: false, error: "Credenciales incorrectas" };

        const { id, email, name } = users[0];
        const user: User = { id, email, name };
        const token = btoa(JSON.stringify(user));
        return { ok: true, data: { user, token } };
    },

    async getMe(): Promise<{ user: User }> {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No hay token");
        const user = JSON.parse(atob(token)) as User;
        return { user };
    },
};

export const incidentsApi = {
    async getIncidents(): Promise<IncidentsResponse> {
        const response = await fetch(`${API_URL}/incidents`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos de las incidencias");
        }
        const data = await response.json();
        return { ok: true, data };
    },

    async createIncident(token: string | null, incident: CreateIncidentDTO): Promise<IncidentResponse> {
        const response = await fetch(`${API_URL}/incidents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ ...incident, status: "abierta", createdAt: new Date().toISOString() }),
        });
        if (!response.ok) {
            throw new Error("Error al crear la incidencia");
        }
        const data = await response.json();
        return { ok: true, data };
    },

    async deleteIncident(token: string | null, id: number): Promise<MessageResponse> {
        const response = await fetch(`${API_URL}/incidents/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error("Error al eliminar la incidencia");
        }
        return { ok: true, message: "Incidencia eliminada" };
    },
};

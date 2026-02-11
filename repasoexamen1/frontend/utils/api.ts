export interface Company {
    name: string;
    industry: string;
    website: string;
}

export interface ApiResponse {
    message: string;
    success: boolean;
}

export const getHeaders = (): HeadersInit => {
    const token = localStorage.getItem('tokens');
    const headers: Record<string, string> = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers as HeadersInit;
};

export const CompanyApi = {
    async register(company: Company): Promise<ApiResponse> {
        try {
            const response = await fetch(`http://localhost:3000/api/companies`, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify(company)
            });

            const data = await response.json();

            if (!response.ok) {
                return {
                    message: data.message || 'Error al insertar la empresa',
                    success: false
                };
            }

            return {
                message: 'Empresa registrada con éxito',
                success: true,
            };
        } catch (error) {
            return {
                message: 'No se pudo conectar con el servidor',
                success: false,
            };
        }
    },
};
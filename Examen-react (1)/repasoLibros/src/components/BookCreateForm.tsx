import { useActionState, useEffect } from "react"
import { useBookContext } from "../hooks/useBookContext"
import type { CreateBookDTO } from "../types"
import { useNavigate } from "react-router-dom"

type FormState = {
    error: string
    success: boolean
}

const BookCreateForm = () => {
    const { addBook } = useBookContext()
    const navigate = useNavigate()

    const formAction = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
        try {
            const book: CreateBookDTO = {
                title: formData.get("title") as string,
                author: formData.get("author") as string,
                description: formData.get("description") as string,
                genre: formData.get("genre") as CreateBookDTO["genre"],
                price: Number(formData.get("price")),
            }
            await addBook(book)
            return { error: "", success: true }
        } catch {
            return { error: "Error al crear el libro", success: false }
        }
    }

    const [state, submitAction, isPending] = useActionState(formAction, {
        error: "",
        success: false,
    })

    useEffect(() => {
        if (state.success) navigate('/')
    }, [state.success])

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <img
                    src="/images/no-cover.jpg"
                    alt="Portada por defecto"
                    className="w-20 h-28 object-cover rounded-lg border border-amber-200"
                />
                <div>
                    <h2 className="text-xl font-bold text-amber-900">Nuevo libro</h2>
                    <p className="text-sm text-gray-500">Se asignará portada automáticamente</p>
                </div>
            </div>

            <form action={submitAction} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-amber-800">Título</label>
                    <input
                        name="title"
                        required
                        className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-amber-800">Autor</label>
                    <input
                        name="author"
                        required
                        className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-amber-800">Descripción</label>
                    <textarea
                        name="description"
                        rows={3}
                        required
                        className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
                    />
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col gap-1 flex-1">
                        <label className="text-sm font-medium text-amber-800">Género</label>
                        <select
                            name="genre"
                            required
                            className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                        >
                            <option value="">Seleccionar...</option>
                            <option value="ficcion">Ficción</option>
                            <option value="no ficcion">No ficción</option>
                            <option value="ciencia">Ciencia</option>
                            <option value="historia">Historia</option>
                            <option value="infantil">Infantil</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 w-28">
                        <label className="text-sm font-medium text-amber-800">Precio (€)</label>
                        <input
                            name="price"
                            type="number"
                            min="0"
                            step="0.01"
                            required
                            className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                        />
                    </div>
                </div>

                {state.error && (
                    <p className="text-sm text-red-500">{state.error}</p>
                )}
                {state.success && (
                    <p className="text-sm text-green-600">Libro creado correctamente</p>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="mt-2 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-colors duration-150 disabled:opacity-50"
                >
                    {isPending ? "Creando..." : "Crear libro"}
                </button>
            </form>
        </div>
    )
}

export default BookCreateForm

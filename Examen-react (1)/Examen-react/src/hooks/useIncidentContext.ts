import { useContext } from "react";
import { IncidentContext } from "../context/IncidentContext";

export function useIncidentContext() {
    const context = useContext(IncidentContext)
    if(!context){
        throw new Error("useBooksContext debe ser usado dentro de BooksProvider");
    }
    return context;
}
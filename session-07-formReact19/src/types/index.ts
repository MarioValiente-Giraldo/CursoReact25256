//No es opcional
export interface FormState {
    error:string | null
    success:string | null
}

//------------------------------

export interface TodoData {
    nombre:string
    fecha:string
}


export interface User {
    username:string
    password:string
}
export interface UserRegister {
    username:string
    email:string
    password:string
}


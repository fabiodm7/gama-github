interface Usuario {
    nome: string,
    email: string,
    address?: string,
}

function getuser(): Usuario {
    return{
        nome:'fabio',
        email:'fabio@fabio.com',
    }
}

function setUser(usuario: Usuario){
    //...
}


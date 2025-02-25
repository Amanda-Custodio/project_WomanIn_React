import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async (url: any, dados: any, setDado: any, setIdUser: any, setUser: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
    setIdUser(resposta.data.user.id)
    setUser(JSON.stringify(resposta.data.user))
}

export const search = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const searchId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

///post
export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

///put
export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

///delete
export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}
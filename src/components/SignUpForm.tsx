'use client';

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

interface SignUpProps{
    token: string
}

export default function SignUpForm(props: SignUpProps){
    const handleSubmit = async (event : any) => {
        event.preventDefault()
        
        console.log('🚀 MAKING SIGNUP REQUEST...')
        
        console.log({
            name: event.target.name.value,
            email: event.target.email.value,
            pwd: event.target.pwd.value,
            token: event.target.token.value})

        // TODO:  
        await api.post('/api/auth/signup',
            JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                pwd: event.target.pwd.value,
                token: event.target.token.value}),
            {
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + props.token}
            }).then(function(){                
                alert('Usuário cadastrado com sucesso.')
                refreshData()
            }).catch(function(error){
                if(error.response){
                    return alert(error.response.data.error)
                }
            })
    
    }

    const router = useRouter()
    const refreshData = () => {
        router.replace('/painel');
    }
    
    return(
        <div>
            <p className="text-xl ml-3 mt-5 mb-10">Cadastro de novos usuários: </p>
            <form onSubmit={handleSubmit} className="w-1/4 bg-gray-200 p-5 m-auto">
                <div className="flex flex-col"> 
                    <label htmlFor="name" className="clear-right">Nome:</label>
                    <input className="rounded-md" type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="pr-3">Email:</label>
                    <input className="rounded-md" type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pwd">Senha:</label>
                    <input className="rounded-md" type="password" name="pwd" id="pwd" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="token">Token:</label>
                    <input className="rounded-md" type="text" name="token" id="token" />
                </div>
                <div className="flex justify-center pt-5"><button type="submit" className="bg-blue-500 font-bold p-3 rounded-full hover:bg-blue-700 hover:text-white">CADASTRAR</button></div>
            </form>
        </div>
    )   
}
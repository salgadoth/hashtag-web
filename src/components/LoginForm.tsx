'use client';

import { useGlobalContext } from "@/app/Context/token";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginForm(props: any){
    const {setToken, setExpiresAt} = useGlobalContext()

    const handleSubmit = async (event : any) => {
        event.preventDefault()
        
        console.log('🚀 MAKING LOGIN REQUEST...')
        
    
        await api.post('/api/auth/login',
            JSON.stringify({
                email: event.target.email.value,
                pwd: event.target.pwd.value}),
            {
                headers : {'Content-Type' : 'application/json'}
            }).then(function(response){
                setToken(response.data.token)
                setExpiresAt(response.data.expires_at)
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

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        // console.log(event.target.name)
        // console.log(event.target.value)
    }
    
    return(
        <div>
            <p className="text-xl ml-3 mt-5 mb-10">Faça seu login: </p>
            <form onSubmit={handleSubmit} className="w-1/4 bg-gray-200 p-5 m-auto">
                <div className="flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input className="rounded-md" type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Senha:</label>
                    <input className="rounded-md" type="password" name="pwd" id="pwd" onChange={handleChange}/>
                </div>
                <div className="flex justify-center pt-5"><button type="submit" className="bg-blue-500 font-bold p-3 rounded-full hover:bg-blue-700 hover:text-white">LOGIN</button></div>
            </form>
        </div>
    )   
}
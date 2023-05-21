'use client'

import { useGlobalContext } from "@/app/Context/token";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar(props: any){
    const {token, setToken, expiresAt, setExpiresAt} = useGlobalContext()
    
    function exit(){
        setToken('')
        refreshData()
    }

    const router = useRouter()
    const refreshData = () => {
        console.log('refresh')
        router.replace('/');
    }

    return(
        <div className="bg-gray-600 flex w-100% justify-start align-middle h-16">
            <div className="w-1/4 flex justify-center items-center text-white text-2xl">
                <p>API Recuperacao</p>
            </div>
            <div className="w-[75%] flex items-center justify-between">
                <div>
                    <ul className="flex">
                        <Link href=''><li className="p-4 text-white hover:bg-gray-700">Home</li></Link>
                        {token && <Link href='/painel'><li className="p-4 text-white hover:bg-gray-700">Painel</li></Link>}
                    </ul>
                </div>
                <div>
                    <ul className="flex">
                        {token ? 
                            <li className="p-4 text-white hover:bg-grey-700 hover:bg-gray-700 hover:cursor-pointer" onClick={exit}>Sair</li> :
                            <Link href='login'><li className="p-4 text-white hover:bg-grey-700 hover:bg-gray-700">Entrar</li></Link>}
                        <Link href='/signup'><li className="p-4 mr-2 text-white hover:bg-grey-700 hover:bg-gray-700">Cadastro</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
'use client'

import { useGlobalContext } from "@/app/Context/token"

export default function HomePage(props : any){
    const {token, setToken, expiresAt, setExpiresAt} = useGlobalContext()
    
    function parseJwt(token: string) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
    
    const user = parseJwt(token)

    if(token){
        return(
            <div>
                <p>Bem vindo, {user.sub}.</p>
            </div>
        )
    } else {
        return(
            <div>
                <p>Para utilizar a plataforma, realize o login.</p>
            </div>
        )
    }
    
}
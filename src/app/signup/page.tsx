'use client'

import Page from "@/components/Page";
import SignUpForm from "@/components/SignUpForm";
import { useGlobalContext } from "../Context/token";

export default function signup() {
  
  const {token, setToken, expiresAt, setExpiresAt} = useGlobalContext()
  
  function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  const user = parseJwt(token)

  if(token){
    return (
      <>
        <Page>
          <SignUpForm token={token}/>
        </Page>
      </>
    )
  } else {
    return (
      <>
        <Page>
          <h1>Voce precisa estar logado para acessar essa pagina.</h1>
        </Page>
      </>
    )
  }
}
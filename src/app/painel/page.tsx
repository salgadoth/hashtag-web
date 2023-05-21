'use client'

import Page from "@/components/Page";
import { useGlobalContext } from "../Context/token";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import PainelControle from "@/components/PainelControle";
import FilterData from "@/components/FilterData";
// import { useRouter } from "next/navigation";

interface Response{
  data : Callback[]
}

interface _id{
  $oid : string
}

export interface Callback{
  _id: _id
  name: string,
  email: string,
  status: string,
  valor: number,
  parcelas: number,
  recieved_at: string,
  tratativas: string,
  forma_pagamento: string
}

export default function painel() {
  const {token, setToken, expiresAt, setExpiresAt} = useGlobalContext()
  const [data, setData] = useState<Callback[]>([])
  const [param, setParam] = useState('')
  
  function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  const user = parseJwt(token)
  
  function setParameter(param: string){
    const emptyData : Callback[] = []
    setData(emptyData)    
    
    setParam(param)

    getData(param).then((response : Callback[]) => {
      setData(response)
    })
  }

  // const router = useRouter()
  // const refreshData = () => {
  //     router.replace('/');
  // }

  useEffect(()=>{
    if(token && Object.keys(data).length < 1){
      getData().then((data : Callback[]) => {
        setData(data)
      })
    }
  }, [])
  
  async function getData(param : string = ''){
    // let data : DataType[] = []
    let url = '/api/find-webhook'
    
    if(param.length > 0){
      url += '?email=' + param
    }

    console.log(url)
    console.log(param)

    const data = await api.get(url,
    {
        headers : {
          'Authorization' : 'Bearer ' + token}
    }).then(function(response){
        return response.data
    }).catch(function(error){
        if(error.response){
          console.log(error.response)
          alert(error.response.data.error)
        }
    })
    const result : Response = JSON.parse(data)

    return result.data
  }

  if(token){
    return (
      <>
        <Page>
          <p className="mt-2 pl-4">Bem vindo, {user.sub}, ao painel de controle da API Recuperação.</p>
          <div>
            <FilterData setParam={setParameter}/>
            <PainelControle data={data} />
          </div>  
        </Page>
      </>
    )
  } else {
    return (
      <>
        <Page>
          <h1>Voce precisa estar logado para acessar essa pagina.</h1>
          {/* {refreshData()} */}
        </Page>
      </>
    )
  }
}

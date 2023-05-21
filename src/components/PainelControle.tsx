import { Callback } from "@/app/painel/page"

interface PainelControle{
    data : Callback[]
}

export default function PainelControle(props : PainelControle){
    return(
        <div className="border-x-4 border-b-4 border-t-0 rounded-b-lg border-gray-300 pt-2 bg-gray-300 w-[80%] m-auto">
            <table className="table-fixed">
                <thead className="text-center">
                    <td className="px-4">Nome</td>
                    <td className="px-4">Email</td>
                    <td className="px-4">Status</td>
                    <td className="px-4">Valor</td>
                    <td className="px-4">Parcelas</td>
                    <td className="px-4">Forma Pagamento</td>
                    <td className="px-4">Tratativas</td>
                    <td className="px-4">Recibido em:</td>
                </thead>
                <tbody className="text-center">
                    {props.data && props.data.map((callback: Callback) => {
                        const tratativas = JSON.parse(callback.tratativas)
                    return(
                        <tr className="border-y-2 border-blue-500">
                            <td key={callback._id.$oid} className="border-black">{callback.name}</td>
                            <td key={callback._id.$oid}>{callback.email}</td>
                            <td key={callback._id.$oid}>{callback.status}</td>
                            <td key={callback._id.$oid}>{callback.valor}</td>
                            <td key={callback._id.$oid}>{callback.parcelas}</td>
                            <td key={callback._id.$oid}>{callback.forma_pagamento}</td>
                            <td key={callback._id.$oid}>{Object.keys(tratativas).map((key, i) => {
                                return(
                                    <>
                                    <p key={i} className="capitalize text-left">{key}:</p>
                                    <p key={i}>{tratativas[key]}</p>
                                    </>
                                )
                            })}</td>
                            <td key={callback._id.$oid}>{callback.recieved_at}</td>
                        </tr>
                    )
            })}</tbody>
            </table>
        </div>
    )
}
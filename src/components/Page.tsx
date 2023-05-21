import Topbar from "./TopBar"

export default function Page(props : any){
    return(
        <div className="w-1/2 m-auto">
            <div><Topbar/></div>
            <div className="h-screen">{props.children}</div>
        </div>
    )
}
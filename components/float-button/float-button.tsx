'use client'
import { useRouter } from "next/navigation";
import { ModeToggle } from "../mode-toggle";

export default function FloatButton() {

    const router = useRouter()

    return (
        <div className="fixed bottom-4 right-4">
            <ModeToggle />
            {/* <button className="bg-principal-orange text-white font-semibold py-2 px-4 rounded shadow" onClick={()=>router.push(`/logout`)}>Sair</button> */}
        </div>
    )
}
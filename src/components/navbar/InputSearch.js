"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = ()=>{
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event)=>{
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    return(
        <div className="relative">
            <input 
            className={`p-2 rounded w-full `} 
            placeholder="Cari anime...."
            ref={searchRef}
            />
            <button onClick={handleSearch} className=" absolute top-2 end-2">
                <MagnifyingGlass size={24}/>
            </button>

        </div>
    )
}

export default InputSearch
import Link from "next/link"

export default function Header({title,linkHref,linkTitle}){
    return(
        <div className="flex justify-between items-center px-4">
            <h1 className="text-blue-800 p-2 text-xl font-semibold">{title}</h1> 
            {linkHref && linkTitle ? <Link href={linkHref} className="md:text-xl text-sm p-2 underline hover:text-indigo-600 transition-all">{linkTitle}</Link>:null}
            
      </div>
    )
}
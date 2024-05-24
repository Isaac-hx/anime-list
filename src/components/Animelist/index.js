import Image from "next/image"
import Link from "next/link"
export default function AnimeList({api}){
    return(
        <div className={`grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4`}>
            {api.data.map(anime=>{
                return(
                    <Link href={`/${anime.mal_id}`} className={`cursor-pointer`}>
                        <Image src={anime.images.webp.image_url} width={350} height={350} className="w-full max-h-64 object-cover" alt="...."/>
                        <h3 className={`font-bold text-sm md:text-md p-4`}>{anime.title}</h3>
                    </Link>
                )
            })}
              
        </div>
        
          
    )
}
import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import Link from "next/link";

const  getData = async ()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  return res.json()
}
export default async function Page() {
  const topAnime = await getData()

  return (
    <> 

    {/* Anime Populer */}
     <section>
        <Header title={`Paling Populer`} linkTitle={`Lihat Semua`} linkHref={`/populer`}/>
        <AnimeList api={topAnime}/>
     </section>
      

    </>
  );
}

import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import Link from "next/link";

const  getData = async (keyword)=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  return res.json()
}
export default async function Page({params}) {
  const searchAnime = await getData(params.keyword)

  return (
    <> 

    {/* Anime Populer */}
     <section>
        <Header title={`Hasil Pencarian ${params.keyword}`} />
        <AnimeList api={searchAnime}/>
     </section>
      

    </>
  );
}

import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () =>{
    return(
        <header className={`bg-indigo-500`}>
            <div className={`flex md:flex-row flex-col justify-between p-4 gap-2  `}>
                <Link href="/" className=" text-white font-semibold text-2xl">CUY ANIME LIST</Link>
                <InputSearch/>
            </div>
        </header>
    )
}
export default Navbar
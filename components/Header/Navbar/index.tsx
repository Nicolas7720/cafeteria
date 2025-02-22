import { Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Item, { NavItemInterface } from "../Item"

const Itens: NavItemInterface[] = [
    {url: "#home", label: "Home"},
    {url: "#about", label: "Sobre"},
    {url: "#menu", label: "Menu"},
    {url: "#", label: "Avaliações"},
    {url: "#", label: "Endereço"},
]

export default function Navbar(){
    return(
        <header className="fixed top-0 right-0 left-0 border-border border-b-2 border-t-0 border-x-0 bg-bg border-solid">
            <section className="flex justify-around items-center mt-6 py-6">
                <Link href="/">
                    <Image className="-mt-2" src="/logo.png" alt="logo café" width={50} height={50}/>
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        {
                            Itens.map((item, index) => (
                                <Item
                                key={index}
                                url={item.url}
                                label={item.label}/>
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex gap-4">
                    <Search className="cursor-pointer hover:scale-125"/>
                    <ShoppingCart className="cursor-pointer hover:scale-125"/>
                </div>
            </section>
        </header>
    )
}
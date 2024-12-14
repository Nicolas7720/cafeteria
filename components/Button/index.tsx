import Link from "next/link";

export interface Button{
    href: string;
    text: string;
}

export default function Botao({href,text}:Button){
    return(
        <Link href={href} className="bg-main_color text-white py-4 px-12 text-2xl mt-4">
            {text}
        </Link>
    )
}
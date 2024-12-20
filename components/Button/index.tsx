import Link from "next/link";

export interface Button{
    href: string;
    text: string;
}

export default function Botao({href,text}:Button){
    return(
        <Link href={href} className="bg-main_color text-white py-2 px-6 text-sm mt-4 rounded-3xl hover:-tracking-tight">
            {text}
        </Link>
    )
}
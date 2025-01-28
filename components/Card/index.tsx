import Image from "next/image";
import Botao from "../Button";

export interface cardItem{
    src: string;
    text: string;
    preco: number;
    precoAnt: number;
}

export default function Card({src, text, preco, precoAnt}:cardItem) {
    return(
        <div className="text-center flex flex-col items-center justify-around border-border border-2 border-solid p-8 hover:bg-white hover:text-black">
            <Image src={src} alt="Imagem Produto" height={100}width={100} className="pb-5"></Image>
            <p>{text}</p>
            <div className="flex">
                <h4>R$ {preco}</h4>
                <span className="line-through pl-2 my-auto text-xs text-gray-500">R$ {precoAnt}</span>
            </div>
            <Botao href={"#"} text={"Adicionar ao Carrinho"}/>
        </div>
    )
}
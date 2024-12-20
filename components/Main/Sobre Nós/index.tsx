import Botao from "@/components/Button";
import Image from "next/image";

export default function SobreNos(){
    return(
        <section id="about" className="flex flex-col gap-5">
            <h2 className="text-2xl uppercase text-main_color font-semibold text-center">Sobre <span className="text-white">Nós</span></h2>
            <div className="flex gap-6 bg-black">
                <div className="row">
                    <Image src="/about-img.jpeg" alt="sobre nós" className="h-full" height={100} width={1500}></Image>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold">O que faz de Nosso Café Especial</h3>
                    <p className="text-sm py-2 px-0 leading-6 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A optio possimus at autem eaque, nam quae fuga consequuntur delectus adipisci velit veritatis amet voluptatum, ea nihil corporis. Harum, autem provident.</p>
                    <p className="text-sm py-2 px-0 leading-6 font-light pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A optio possimus at autem eaque, nam quae fuga consequuntur delectus adipisci velit veritatis amet voluptatum, ea nihil corporis. Harum, autem provident.</p>

                    <Botao href="#" text="Saiba Mais"/>
                </div>
            </div>
        </section>
    )
}
import Botao from "@/components/Button";

export default function Principal(){
    return(
        <div className="bg-imagem-de-fundo-um bg-center bg-cover">
            <section id="home" className="flex items-center min-h-screen">
                <div className="max-w-lg">
                    <h3  className="text-white text-4xl">CODE COM O MELHOR CAFÉ DA REGIÃO</h3>
                    <p className="text-white font-thin leading-7 py-5 px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus facilis quaerat dicta qui eos beatae quo iste at quas eaque nisi ipsa ex autem repudiandae, vel recusandae exercitationem in.</p>
                    <Botao text="Pegue o seu Agora" href="#"></Botao>
                </div>
            </section>
        </div>
    )
}
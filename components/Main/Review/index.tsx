import CardReview, { imgs } from "./cardReview"

const Pessoas: imgs[] = [
    { imagemLink: '/pic-1.png', nome: 'Eduardo' },
    { imagemLink: '/pic-2.png', nome: 'Maria' },
    { imagemLink: '/pic-3.png', nome: 'Guilherme' },
]
export default function Review() {
    return (
        <section id="review" className="flex flex-col justify-center min-h-screen w-full">
            <h2 className="text-2xl uppercase text-white font-semibold text-center pb-4">Nossos <span className="text-main_color">Clientes</span></h2>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-6">

                {
                    Pessoas.map((pessoa, index) => (
                        <CardReview key={index} imagemLink={pessoa.imagemLink} nome={pessoa.nome}/>
                    ))
                }
            </div>
        </section>
    )
}
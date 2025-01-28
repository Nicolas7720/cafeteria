export interface imgs {
    imagemLink: string;
    nome: string;
}
export default function CardReview({ imagemLink, nome }: imgs) {
    return (
        <div className="text-center flex flex-col items-center justify-around border-border border-2 border-solid p-8">
            <img src="/quote-img.png" />
            <p className="text-white py-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium, quam minima libero pariatur ipsa repellendus voluptatem? Aut, sapiente. Perspiciatis, omnis. Minima assumenda unde esse. Sit voluptatem quis repudiandae quos?</p>
            <img src={imagemLink} alt="pessoa" className="pb-5 w-28 h-28 rounded-md"/>
            <h3>{nome}</h3>
        </div>
    )
}
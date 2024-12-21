import Card, { cardItem } from "@/components/Card";

const itemCard: cardItem[] = [
    {src:"/menu-1.png", text: "Café Coado", preco:15.99, precoAnt: 20.99},
    {src:"/menu-2.png", text: "Latte Art Rosetta", preco:10.99, precoAnt: 12.99},
    {src:"/menu-3.png", text: "Latte Art Rosetta", preco:13.99, precoAnt: 18.99},
    {src:"/menu-4.png", text: "Café Macchiato", preco:11.99, precoAnt: 12.99},
    {src:"/menu-5.png", text: "Latte", preco:8.99, precoAnt: 13.99},
    {src:"/menu-6.png", text: "Espresso Con Panna", preco:11.20, precoAnt: 15.99},
]

export default function Menu(){
    return(
        <section id="menu" className="flex flex-col justify-center min-h-screen w-full">
            <h2 className="text-2xl uppercase text-white font-semibold text-center pb-4">Nosso <span className="text-main_color">Menu</span></h2>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-6">
                {
                    itemCard.map((item, index) => (
                        <Card 
                            key={index} 
                            src={item.src} 
                            text={item.text} 
                            preco={item.preco} 
                            precoAnt={item.precoAnt}/>
                    ))
                }
                
            </div>
            
        </section>
    )
}
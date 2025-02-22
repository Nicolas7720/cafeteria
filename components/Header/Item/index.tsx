export interface NavItemInterface{
    url: string;
    label: string;
}

export default function Item(props: NavItemInterface){
    return(
        <li>
            <a className="mx-0 my-4 text-white text-sm hover:text-main_color" href={props.url} >
                <p className="hover:border-main_color hover:border-b-2">{props.label}</p>
            </a>
        </li>
    )
}
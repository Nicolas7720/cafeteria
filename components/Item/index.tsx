import Link from "next/link";

export interface NavItemInterface{
    url: string;
    label: string;
}

export default function Item(props: NavItemInterface){
    return(
        <li className="hover: border-b-2 hover:text-main_color hover:border-main_color">
            <Link href={props.url}>
                <p>{props.label}</p>
            </Link>
        </li>
    )
}
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-center">
            <div className="py-4 flex justify-center gap-1">
                <Instagram size={24}/>
                <Facebook size={24}/>
                <Twitter size={24}/>
            </div>
        </footer>
    )
}
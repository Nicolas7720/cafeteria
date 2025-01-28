import Footer from "@/components/Footer";
import Menu from "@/components/Main/Menu";
import Principal from "@/components/Main/Principal";
import Review from "@/components/Main/Review";
import SobreNos from "@/components/Main/Sobre Nós";


export default function Home() {
  return (
    <>
      <Principal/>
      <SobreNos/>
      <Menu/>
      <Review/>
      <Footer/>
    </>
  );
}

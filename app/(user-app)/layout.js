import Navbar from "@/components/Navbar-component/Navbar";
import Footer from "@/components/Footer-Component/Footer";
import {MyProvider} from "@/context/MyContext";

export default function layout({children}) {
    return (
        <MyProvider>
            <Navbar/>
            {children}
            <Footer/>
        </MyProvider>
    )
}
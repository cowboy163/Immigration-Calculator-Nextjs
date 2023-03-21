import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import headerData from "@/data/layout/headerData";

const Layout = ({children}) => {
    return(
        <>
            <Header data={headerData}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
export default Layout
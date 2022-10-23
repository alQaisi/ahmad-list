import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fragment } from "react";

function Layout({children}) {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
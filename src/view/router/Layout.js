import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../template/header/Header";
import Footer from "../template/footer/Footer";

function Layout(props) {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    );
}

export default Layout;
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../template/header/Header";
import Footer from "../template/footer/Footer";

function Layout(props) {
    const layoutStyle={
        display: 'flex',
        flexDirection: 'column',
        minWidth: 1024,
        width: '100%',
        margin: '0 auto',
        paddingTop: 72
    }
    return (
        <>
            <Header/>
            <main style={layoutStyle}>
                <Outlet />
            </main>
            <Footer />
        </>

    );
}

export default Layout;
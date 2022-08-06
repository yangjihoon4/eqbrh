import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Main from "./main/page/Main";
import Equilibrium from "./equilibrium/page/Equilibrium";
import EQHub from "./eqHub/page/EQHub";
import About from "./about/page/About";

function RootRouter(props) {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="equilibrium" element={<Equilibrium />} />
                <Route path="eq-hub" element={<EQHub />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default RootRouter;
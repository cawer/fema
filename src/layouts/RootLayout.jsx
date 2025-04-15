import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

// import Navbar from "../pages/Navbar/Navbar";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

export default function RootLayout() {
    return (
        <>
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
}

import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"
export const Applayout = () => {
    return (
        <>
            <Header></Header>
            <div className="netflix-bg">
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    )
}
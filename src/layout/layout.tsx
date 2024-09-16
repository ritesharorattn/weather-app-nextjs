/**
 * Import Libraries
 */
import React from "react"
import { useState } from "react"
/**
 * Create Variable and Export it as default
 */
const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="flex min-h-screen items-center bg-[url('/background.png')] bg-contain">
            <div className="relative container w-[1200px] h-[700px] mx-auto bg-sky-500/70 rounded-lg border-solid border-2 text-white">
                {children}
            </div>
        </div>
    )
}
export default Layout;

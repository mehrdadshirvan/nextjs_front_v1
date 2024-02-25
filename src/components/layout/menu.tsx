"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {useState} from "react";

const NavLink = [
    {title:"Home",href:"/"},
    {title:"Blog",href:"/blog"},
    {title:"Products",href:"/products"},
    {title:"login",href:"/login"},
    {title:"register",href:"/register"},
    {title:"About us",href:"/about-us"},
]
export default function Menu(){
    const pathname = usePathname();
    const [input,setInput] = useState('')
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                     alt="Your Company"/>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {
                                        NavLink.map((item) => {
                                            const isActive = pathname.startsWith(item.href)
                                            return (
                                                    <Link className={isActive?"rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white":"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"} href={item.href} key={item.title}>
                                                        {item.title}
                                                    </Link>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} name="s" id="s"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    return (
        <ul>
            {
                NavLink.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                        <li>
                            <Link className={isActive?"font-bold block text-purple-600 mr-4":""} href={item.href} key={item.title}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
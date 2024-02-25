"use client";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function OrderProducts() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing order .....")
        router.push('/');
    }
    return (
        <>
            <h1>Order Products</h1>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>Place order</button>
        </>
    );
}

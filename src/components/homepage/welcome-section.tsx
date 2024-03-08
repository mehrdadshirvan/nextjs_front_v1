import Link from "next/link";
import {FaRainbow, FaShip, FaRegGem } from "react-icons/fa6";

export default function Welcome() {
    return (
        <>
            <div className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8`}>
                <div className="flex flex-row">
                    <div className="basis-2/5">
                        <h1 className={`text-3xl`}>
                            Welcome to <Link className={`font-semibold`} href={'/'}>PersaMart.com</Link>
                        </h1>
                    </div>
                    <div className="basis-3/5 items-center grid">
                        <div className="grid xl:grid-cols-3   grid-cols-2 gap-2">
                            <div>
                                <Link href={'/rfq'} className={`flex gap-2 items-center justify-center text-lg`}>
                                    <FaRainbow/>
                                    <span>Request for Quotation</span>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/buyers-club-benefits'} className={`flex gap-2 items-center justify-center text-lg`}>
                                    <FaRegGem />
                                    <span>Buyers Club benefits</span>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/logistics'} className={`flex gap-2 items-center justify-center text-lg`}>
                                    <FaShip />
                                    <span>PersaMart.com Logistics</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
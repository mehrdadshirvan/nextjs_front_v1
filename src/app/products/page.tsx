import Link from "next/link";

export default function Products() {
    return (
        <>
            <h1>products list</h1>
            <ul>
                <li>
                    <Link href={`/products/1`}>pro 1</Link>
                </li>
                <li>
                    <Link href={`/products/2`}>pro 2</Link>


                </li>
                <li><Link href={`/products/3`}>pro 3</Link></li>
                <li><Link href={`/products/4`}>pro 4</Link></li>
            </ul>
        </>
    )
}
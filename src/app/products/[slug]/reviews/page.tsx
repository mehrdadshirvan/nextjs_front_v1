import Link from "next/link";

export default function Reviews(){

    return (
        <>
            <h1>Reviews list</h1>
            <ul>
                <li><Link href={`/products/1/reviews/1`}>pro 1 rev 1</Link></li>
                <li><Link href={`/products/1/reviews/2`}>pro 1 rev 2</Link></li>
                <li><Link href={`/products/1/reviews/3`}>pro 1 rev 3</Link></li>
                <li><Link href={`/products/1/reviews/4`}>pro 1 rev 4</Link></li>
            </ul>
        </>
    )
}
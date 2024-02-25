import {notFound} from "next/navigation";

export default function ReviewSinglePage(
    {
        params
    }: {
        params : {
            slug: string;
            id: string;
        }
    }){

    if(parseInt(params.id) > 1000){
        throw new Error("error 1000");
    }
    if(parseInt(params.id) > 100){
        notFound();
    }
    return (
        <>
            <h1>Product {params.slug} Review {params.id}</h1>
        </>
    )
}
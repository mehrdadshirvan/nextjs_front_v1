export default function ReviewSinglePage(
    {
        params
    }: {
        params : {
            slug: string;
            id: string;
        }
    }){

    return (
        <>
            <h1>Product {params.slug} Review {params.id}</h1>
        </>
    )
}
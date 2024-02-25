export default function ProductSinglePage(
    {
        params
    }: {
        params : {slug: string}
    }){

    return (
        <>
            <h1>ProductSinglePage {params.slug}</h1>
        </>
    )
}
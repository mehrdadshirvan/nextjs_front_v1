export default function Docs({params}:{params:{slug:string[];}}){
    if(params.slug.length === 2){
        return <h1>2 part</h1>
    }else if(params.slug.length === 1){
        return <h1>1 part</h1>
    }
    return (
        <>
            <h1>Docs Home page</h1>
        </>
    )
}
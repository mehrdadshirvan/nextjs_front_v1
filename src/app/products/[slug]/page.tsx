import {Metadata} from "next";

type Props = {
    params:{
        slug:string;
    }
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
         setTimeout(()=>{
             resolve(`iphone ${params.slug}`)
         },100)
    })
    return {
        title: `${title}`
    }
}

// export const generateMetadata = ({params}:Props): Metadata => {
//     return {
//         title: `${params.slug}`
//     }
// }
export default function ProductSinglePage({params}: Props){
    return (
        <>
            <h1>ProductSinglePage {params.slug}</h1>
        </>
    )
}
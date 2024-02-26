import Image from "next/image";
import Link from "next/link";
import {GetServerSideProps} from "next";
import useSliderData from "@/app/_api/slider/useSliderData";
 function Home() {
    return (
        <>

                   home
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await useSliderData();

    return {
        props: {
            data,
        },
    };
};
export default Home;
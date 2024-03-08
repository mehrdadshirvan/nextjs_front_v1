"use client";
import Slider from "@/components/homepage/slider/slider";
import Welcome from "@/components/homepage/welcome-section";

const Home = (props: any) => {

    return (
        <div>
            <div className={`  mx-auto max-w-full bg-slate-100 mb-4 p-4`}>
                <Welcome/>
            </div>
            <div className={`  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
                <Slider/>
            </div>
        </div>
    );

}
export default Home;
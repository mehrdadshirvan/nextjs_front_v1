import Image from "next/image";
import WebLayout from "@/app/layout";

 function Home() {
    return (
        <WebLayout>
            <section className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                   home
                </div>
            </section>
        </WebLayout>
    );
}
export default Home;
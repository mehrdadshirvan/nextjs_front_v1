"use client";
import {useSliderApi} from "@/app/_api/hook/sliderApi/useSliderApi";
const Home = (props: any) => {
    const {data, isLoading, refetch} = useSliderApi();
    return (
        <>
            {
                isLoading
                    ? <>LOADING</>
                    : data?.length > 0
                        ? <>
                            {data.map((item: any) => (
                                <img src={item.url} alt=""/>
                            ))}

                        </>
                        : <>Empty</>
            }

        </>
    );

}
export default Home;
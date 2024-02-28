import {useSliderApi} from "@/app/_api/hook/sliderApi/useSliderApi";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Slider = () =>{
    const {data, isLoading, refetch} = useSliderApi();
    return (

        <>{
            isLoading
                ? <></>
                : data?.data?.length > 0
                    ? <Swiper className={`rounded-xl`}
                        spaceBetween={0}
                        slidesPerView={1}>
                        {data.data.map((item: any) => SliderItem(item))}
                    </Swiper>
                    : <></>
        }
        </>
    )
}

function SliderItem(item){
    return(
        <SwiperSlide>
            <img src={item.image_url} alt={item.name}/>
        </SwiperSlide>
    );
}

export default Slider;
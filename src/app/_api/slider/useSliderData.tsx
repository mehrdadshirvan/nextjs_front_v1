import {useQuery} from '@tanstack/react-query-devtools';

const fetchSliderData = async () => {
    const response = await fetch('https://www.rosena.ir/api/app/home/slider');
    return await response.json();
};

const useSliderData = () => {
    return useQuery('sliderData', fetchSliderData);
};

export default useSliderData;
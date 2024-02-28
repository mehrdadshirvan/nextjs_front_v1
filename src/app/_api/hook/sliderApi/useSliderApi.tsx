import React from 'react'
import {useQuery} from "react-query";
import {SliderGetRequest} from "@/app/_api/requests/requests";

export const useSliderApi = () => {
    const {data, isLoading,refetch} =  useQuery(["sliders"],SliderGetRequest);
    return {data, isLoading,refetch};
};

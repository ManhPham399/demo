import useSWR from "swr"
import { serialize } from "swr/_internal";
import { CommonGetAllParams,Filter } from "../../constants/types/common.type";

 export const useAllposts = () => {
    const {data, error, isLoading, mutate}= useSWR('/posts', {refreshInterval: 0});
    return {data,error,isLoading,mutate}
}

export const useAllusers = () => {
    const {data, error, isLoading, mutate}= useSWR('/users', {refreshInterval: 0});
    return {data,error,isLoading,mutate}
}
export const useMotpost = () => {
    const {data, error, isLoading, mutate}= useSWR('/posts/1', {refreshInterval: 0});
    return {data,error,isLoading,mutate}
}
export const useMotuser = () => {
    const {data, error, isLoading, mutate}= useSWR('/users/1', {refreshInterval: 0});
    return {data,error,isLoading,mutate}
}


export const usePhantrang = (
    params?: CommonGetAllParams,
    filter?: Filter
) => {
    const { data, error, isLoading, mutate } = useSWR(
        `?page=${params?.page}&limit=${params?.limit}&select=${filter?.title},${filter?.price}`,
        { refreshInterval: 0}
    );
    return {
        data, error, isLoading, mutate
    };
}

/*=============== truyền tham số sd serialize=======================
export const usePhantrang = (
    params?: CommonGetAllParams,
    filter?: Filter
) => {
    const { data, error, isLoading, mutate } = useSWR(
        `?${serialize({
            ...params,
            ...filter,
            
        })}`,
        { refreshInterval: 0}
    );
    return {
        data, error, isLoading, mutate
    };
}
=============================================
*/


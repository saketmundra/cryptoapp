import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7dca889009mshbc5a83cee9597ebp138f99jsn47d7f877b619',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
// KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLza
const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
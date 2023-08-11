import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ecommerceApi = createApi ({
   reducerPath:'postApi',
   baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:8080',}),
    endpoints:(build) =>({
        getProducts : build.query({
            query:()=>({
                url:'products',
                method:"GET"
            })
        })
    })
}) 

export const {useGetProductsQuery} = ecommerceApi
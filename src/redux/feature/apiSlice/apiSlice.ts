import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getAllTestimonials: builder.query({
            query: () => '/api/v1/testimonial'
        })
    })
})


export const { useGetAllTestimonialsQuery} = api;
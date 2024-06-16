import axios, { AxiosPromise } from "axios"
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";


const API_URL = 'http://localhost:8080/api'

const fetchData = async (token: string): AxiosPromise<ProductData[]> => {
  const response = await axios.get(API_URL + "/category", {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  })
  return response;
}

export function useCategoryData(){
  const token = localStorage.getItem('token'); 
  const query = useQuery({
    queryFn: () => fetchData(token || ''),
    queryKey: ['category-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}
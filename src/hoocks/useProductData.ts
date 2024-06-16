import axios, { AxiosPromise } from "axios"
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";


const API_URL = 'http://localhost:8080/api'

const fetchData = async (token: string): AxiosPromise<ProductData[]> => {
  const response = await axios.get(API_URL + "/product", {
    headers: {
      Authorization: `Bearer ${token}`, // Inclui o token no header Authorization
    },
  })
  return response;
}

export function useProductData(){
  const token = localStorage.getItem('token'); 
  const query = useQuery({
    queryFn: () => fetchData(token || ''),
    queryKey: ['product-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}
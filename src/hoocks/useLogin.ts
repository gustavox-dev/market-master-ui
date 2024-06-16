import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { LoginData } from '../interface/LoginData';
import { LoginResponse } from '../interface/LoginResponse';

const API_URL = 'http://localhost:8080';

const login = async (loginData: LoginData): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await axios.post(API_URL + '/auth/login', loginData);
  return response.data;
};

export function useLogin(): UseMutationResult<LoginResponse, unknown, LoginData, unknown> {
  const mutation = useMutation<LoginResponse, unknown, LoginData>({
    mutationFn: login,
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem('token', data.token);
    },
    onError: (error: unknown) => {
      console.error('Login failed:', error);
    },
  });

  return mutation;
}
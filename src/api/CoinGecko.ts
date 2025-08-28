import { axiosApp } from "../axiosConfig";
import {CoinGeckoCoinsMarketResponse} from "@/types/CoinGeckoCoinsMarketResponse"
import { CoinGeckoSearchResponse } from "@/types/CoinGeckoSearchResponse";

export async function getData(page: number, per_page: number = 100): Promise<CoinGeckoCoinsMarketResponse[] | Error>{
    try{
        const res = await axiosApp.get(`/coins/markets?vs_currency=idr&per_page=${per_page}&page=${page}`)
    
        return res.data as CoinGeckoCoinsMarketResponse[];
    }
    catch(error){
        return error as Error;
    }
}

export async function searchToken(term: string): Promise<CoinGeckoSearchResponse | Error>{
    try{
        const res = await axiosApp.get(`/search?query=${term}`);
    
        return res.data as CoinGeckoSearchResponse;
    }
    catch(error){
        return error as Error;
    }
}
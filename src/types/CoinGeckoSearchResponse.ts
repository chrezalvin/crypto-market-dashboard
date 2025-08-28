export interface CoinGeckoSearchResponse {
    coins:      Coin[];
    exchanges:  any[];
    icos:       any[];
    categories: Category[];
    nfts:       Nft[];
}

export interface Category {
    id:   string;
    name: string;
}

export interface Coin {
    id:              string;
    name:            string;
    api_symbol:      string;
    symbol:          string;
    market_cap_rank: number;
    thumb:           string;
    large:           string;
}

export interface Nft {
    id:     string;
    name:   string;
    symbol: string;
    thumb:  string;
}

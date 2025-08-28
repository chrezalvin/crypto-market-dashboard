import {getData} from "@/api/CoinGecko";
import CoinGeckoCard from "../components/CoinGeckoCard";
import CoinGeckoCardSkeleton from "../components/CoinGeckoCardSkeleton";

interface CoinGeckoCardDashboardInterface{
    page: number;
}

export default async function CoinGeckoCardDashboard(props: CoinGeckoCardDashboardInterface){
    const cryptoData = await getData(props.page);

    if (cryptoData instanceof Error){
        return (<div>Error: {cryptoData.message}</div>);
    }

    const cardList = cryptoData.map((crypto) => (<CoinGeckoCard {...crypto} key={crypto.id}/>));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardList}
        </div>
    );
}

export function CoinGeckoCardDashboardSkeleton(){
    const cardList = Array(10).fill(0, 1, 20).map((id) => <CoinGeckoCardSkeleton key={id}/>);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardList}
        </div>
    );
}
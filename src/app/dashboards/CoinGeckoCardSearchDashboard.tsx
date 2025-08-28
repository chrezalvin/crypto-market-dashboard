import { searchToken } from "@/api/CoinGecko";
import CoinGeckoSearchCard from "@/app/components/CoinGeckoSearchCard";

interface CoinGeckoCardSearchDashboardProps{
    name: string;
}

export default async function CoinGeckoCardSearchDashboard(props: CoinGeckoCardSearchDashboardProps){
    const res = await searchToken(props.name);

    if (res instanceof Error){
        return (<div>Error: {res.message}</div>);
    }

    const cardList = res.coins.map(coin => (<CoinGeckoSearchCard {...coin} key={coin.id} />))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardList}
        </div>
    );
}
import { Coin } from "@/types/CoinGeckoSearchResponse";

interface CoinGeckoCardProps extends Coin{
    
}

export default function CoinGeckoSearchCard(props: CoinGeckoCardProps){
    return (
        <div key={props.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src={props.thumb} alt={props.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                    <h2 className="text-xl font-bold">{props.name}</h2>
                    <p className="text-gray-400 uppercase">{props.symbol}</p>
                    </div>
                </div>
                <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                    Rank #{props.market_cap_rank}
                </span>
                </div>
            </div>
        </div>
    )
}
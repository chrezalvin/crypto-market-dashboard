import {CoinGeckoCoinsMarketResponse} from "@/types/CoinGeckoCoinsMarketResponse";

interface CoinGeckoCardProps extends CoinGeckoCoinsMarketResponse{
    
}

export default function CoinGeckoCard(props: CoinGeckoCardProps){
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: value < 1 ? 4 : 2,
            maximumFractionDigits: value < 1 ? 6 : 2
        }).format(value);
    };

    const formatLargeNumber = (num: number) => {
        if (num >= 1e12)
            return (num / 1e12).toFixed(2) + 'T';
        if (num >= 1e9)
            return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6)
            return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3)
            return (num / 1e3).toFixed(2) + 'K';
        return num.toString();
    };

    return (
        <div key={props.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src={props.image} alt={props.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                    <h2 className="text-xl font-bold">{props.name}</h2>
                    <p className="text-gray-400 uppercase">{props.symbol}</p>
                    </div>
                </div>
                <span className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                    Rank #{props.market_cap_rank}
                </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-xl font-bold">{formatCurrency(props.current_price)}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">24h Change</p>
                    <p className={`text-xl font-bold ${props.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {props.price_change_percentage_24h >= 0 ? '↑' : '↓'} {Math.abs(props.price_change_percentage_24h)}%
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Market Cap</p>
                    <p className="text-lg">IDR {formatLargeNumber(props.market_cap)}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Volume (24h)</p>
                    <p className="text-lg">IDR {props.total_volume ? formatLargeNumber(props.total_volume) : "???"}</p>
                </div>
                </div>
                
                <div className="mt-6">
                <p className="text-gray-400 text-sm">Circulating Supply</p>
                <p className="text-lg">{formatLargeNumber(props.circulating_supply)} {props.symbol.toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}
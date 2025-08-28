import { createElement, Suspense, useEffect } from "react";
import CoinGeckoCardDashboard, {CoinGeckoCardDashboardSkeleton} from "./dashboards/CoinGeckoCardDashboard";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import CoinGeckoCardSearchDashboard from "./dashboards/CoinGeckoCardSearchDashboard";
import RefreshEveryInterval from "./components/RefreshEveryInterval";

export default async function Page(props: {
    searchParams?: Promise<{
        name?: string;
        page?: string;
    }>;
}){
  const searchParams = await props.searchParams;
  const name = searchParams?.name || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Crypto Market Dashboard</h1>
                <p className="text-gray-400 mb-2">Real-time cryptocurrency prices and market data</p>
                <div className="mb-8">
                    <Search placeholder="search coins..." />
                </div>

                <Suspense 
                    key={name + currentPage}
                    fallback={(<CoinGeckoCardDashboardSkeleton />)}
                >
                  {
                    searchParams?.name ? (
                      <CoinGeckoCardSearchDashboard
                        name={searchParams.name}
                      />
                    ) : (
                      <RefreshEveryInterval interval={5000}>
                        <CoinGeckoCardDashboard 
                          page={currentPage}
                        />
                      </RefreshEveryInterval>
                    )
                  }
                </Suspense>
            </div>
            {
              name === "" ? (<Pagination />) : (<></>)
            }
        </div>
    </main>
  );
}
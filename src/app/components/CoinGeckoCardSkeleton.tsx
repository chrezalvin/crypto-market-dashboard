const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function CoinGeckoCardSkeleton(){
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className={`p-6 relative overflow-hidden ${shimmer}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-4 bg-gray-700"></div>
            <div>
              <div className="h-6 w-32 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <div className="h-4 w-16 bg-gray-700 rounded mb-2"></div>
            <div className="h-6 w-24 bg-gray-700 rounded"></div>
          </div>
          <div>
            <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
            <div className="h-6 w-20 bg-gray-700 rounded"></div>
          </div>
          <div>
            <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
            <div className="h-5 w-28 bg-gray-700 rounded"></div>
          </div>
          <div>
            <div className="h-4 w-24 bg-gray-700 rounded mb-2"></div>
            <div className="h-5 w-28 bg-gray-700 rounded"></div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
          <div className="h-5 w-36 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
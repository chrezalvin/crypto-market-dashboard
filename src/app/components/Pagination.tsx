"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination(){
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const searchTerm = searchParams.get("name");

    const createPageUrl = (pageNo: number | string) => {
        const params = new URLSearchParams();
        params.set('page', pageNo.toString());
        if(searchTerm)
            params.set("name", searchTerm);

        return `${pathName}?${params.toString()}`;
    }

    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            <Link
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              href={createPageUrl(currentPage - 1)}
            >
              Previous
            </Link>
            
            {/* Page numbers */}
            <div className="flex space-x-1">
                <button
                  key={currentPage}
                  className="w-10 h-10 flex items-center justify-center rounded-md text-white"
                >
                  {currentPage}
                </button>
            </div>
            
            <Link
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
              href={createPageUrl(currentPage + 1)}
            >
              Next
            </Link>
          </div>
    );
}
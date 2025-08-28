"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps{
    placeholder: string;
}

export default function Search(props: SearchProps){
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");

        if(term)
            params.set("name", term);
        else
            params.delete("name");

        replace(`${pathName}?${params.toString()}`);
    }, 1000);

    const getSearchValue = () => {
        const params = new URLSearchParams(searchParams);

        return params.get("name") || "";
    }

    return (
        <div className="mb-8">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input
                    className="block w-full p-3 pl-10 text-sm bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white"
                    type="text" 
                    defaultValue={getSearchValue()}
                    placeholder={props.placeholder}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}
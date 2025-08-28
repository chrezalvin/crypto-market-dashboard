"use client";
import { useRouter } from "next/navigation";
import { JSX, useEffect } from "react";

const DEFAULT_REFRESH_INTERVAL = 10003;

interface RefreshEveryIntervalProps{
    interval: number;
    children: JSX.Element
}

export default function RefreshEveryInterval(props: RefreshEveryIntervalProps) {
    let { interval, children } = props;

    if (interval <= DEFAULT_REFRESH_INTERVAL){
        interval = DEFAULT_REFRESH_INTERVAL;
    }

    const router = useRouter();

    useEffect(() => {
        const id = setInterval(() => {
            router.refresh();
        }, interval);

        return () => clearInterval(id);
    }, [interval]);

    return children;
}
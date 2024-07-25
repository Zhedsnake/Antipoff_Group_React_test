import {useMemo} from "react";

export const usePageCounting = (totalCount: number, limit: number): number => {
    return useMemo(() => {
        return Math.ceil(totalCount / limit)
    }, [totalCount]);
}

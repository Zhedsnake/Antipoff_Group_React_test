import {useMemo} from "react";

export const usePageCounting = (totalCount: number, limit: number) => {
    const conuntingPages = useMemo(() => {
        return Math.ceil(totalCount / limit)
    }, [totalCount])

    return conuntingPages;
}

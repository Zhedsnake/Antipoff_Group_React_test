import {useMemo} from "react";

// Здесь создаётся массив из чисел для пагинации из общего количества страниц

export const useGetPagination = (totalPages) => {
    const countPages = useMemo( () => {
        let result = [];

        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
    }, [totalPages])

    return countPages;
}
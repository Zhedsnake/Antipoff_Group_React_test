import { useState } from "react";

interface CallbackFunction {
    (...args: any[]): Promise<void>;
}

interface UseFetchingReturn {
    fetching: (...args: any[]) => Promise<void>;
    isLoading: boolean;
    error: string;
}


export const useFetching = (callback: CallbackFunction): UseFetchingReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching = async (...args: any) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { fetching, isLoading, error };
};
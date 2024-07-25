
export const useToken = async (name: string, token: string): Promise<boolean> => {
    await localStorage.setItem(name, token);

    return !!localStorage.getItem(name);
};

export default useToken;

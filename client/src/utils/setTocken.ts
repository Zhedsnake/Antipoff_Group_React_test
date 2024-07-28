
export const setToken = async (name: string, token: string): Promise<boolean> => {
    await localStorage.setItem(name, token);

    return !!localStorage.getItem(name);
};


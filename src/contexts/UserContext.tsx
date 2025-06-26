import { createContext, type PropsWithChildren, useState } from "react";

interface IUserContext {
    id: string | null;
    name: string;
    setName: (newName: string) => void;
    setId: (newId: string) => void;
}

export const userContext = createContext<IUserContext | null>(null);

const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [userName, setUserName] = useState<string>("User");
    const [userId, setUserId] = useState<string | null>(null);

    const data: IUserContext = {
        id: userId,
        name: userName,
        setName: (newName) => setUserName(newName),
        setId: (newId) => setUserId(newId),
    };

    return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export default UserContextProvider;

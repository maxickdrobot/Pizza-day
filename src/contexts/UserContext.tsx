import { createContext, type PropsWithChildren, useState } from "react";

interface IUserContext {
    name: string;
    setName: (newName: string) => void;
}

export const userContext = createContext<IUserContext | null>(null);

const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [userName, setUserName] = useState<string>("User");

    const handleChangeName = (newName: string): void => {
        setUserName(newName);
    };

    const data: IUserContext = {
        name: userName,
        setName: handleChangeName,
    };

    return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export default UserContextProvider;

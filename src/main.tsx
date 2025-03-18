import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import UserContextProvider from "./contexts/UserContext.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </UserContextProvider>
        </BrowserRouter>
    </StrictMode>
);

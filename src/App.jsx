import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { useImmerReducer } from "use-immer";
import GlobalContext from "./pages/GlobalContext";
import "./App.css";

import RootLayout from "./layouts/RootLayout";

import Main from "./pages/Main/Main";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/main" element={<Main />} />
        </Route>
    )
);

function App() {
    const originalState = {
        seed: "",
        category: "all",
        searchText: "",
    };

    const reducer = function (draft, action) {
        switch (action.type) {
            case "setSeed":
                action.payload = action.payload.toString().trim();
                draft.seed = action.payload;
                return;
            case "setCategory":
                draft.category = action.payload;
                return;
            case "setSearchText":
                draft.searchText = action.payload;
                return;
            default:
                return;
        }
    };

    const [state, dispatch] = useImmerReducer(reducer, originalState);

    return (
        <GlobalContext.Provider
            value={{ globalState: state, globalDispatch: dispatch }}
        >
            <RouterProvider router={router} />
        </GlobalContext.Provider>
    );
}

export default App;

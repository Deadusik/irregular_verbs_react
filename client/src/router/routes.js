import IrregularVerbPage from "../components/pages/IrregularVerbPage";
import Home from "../components/pages/Home"
import { ADMIN, HOME, IRREGULAR_VERBS, REGISTRATION, SIGNIN, USER } from "./paths";
import UserAuth from "../components/pages/UserAuth";

export const publicRoutes = [
    {
        path: HOME,
        element: <Home/>,
        error: ''
    },
    {
        path: IRREGULAR_VERBS,
        element: <IrregularVerbPage/>,
        error: ''
    },
    {
        path: REGISTRATION,
        element: <UserAuth/>,
        errer: ''
    },
    {
        path: SIGNIN,
        element: <UserAuth/>,
        errer: ''
    },
]

export const authRoutes = [
    {
        path: USER,
        element: '',
        error: ''
    },
    {
        path: ADMIN,
        element: '',
        error: ''
    }
]
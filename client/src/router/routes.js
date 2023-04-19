import IrregularVerbPage from "../components/pages/IrregularVerbPage";
import { ADMIN, HOME, IRREGULAR_VERBS, USER } from "./paths";

export const publicRoutes = [
    {
        path: HOME,
        element: '',
        error: ''
    },
    {
        path: IRREGULAR_VERBS,
        element: <IrregularVerbPage/>,
        error: ''
    }
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
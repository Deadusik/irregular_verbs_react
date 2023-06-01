import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../router/routes'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    return (
        <>
            <Routes>
                {
                    publicRoutes.map(route =>
                        <Route key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error}
                        />
                    )
                }
                {
                    isAuth &&
                    authRoutes.map(route =>
                        <Route key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error}
                        />
                    )
                }
            </Routes>
        </>
    )
})

export default AppRouter
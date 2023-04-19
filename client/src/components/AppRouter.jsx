import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, authRoutes } from '../router/routes'

const AppRouter = () => {
    const isAuth = false

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
}

export default AppRouter
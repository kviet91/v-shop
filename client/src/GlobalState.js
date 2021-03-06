import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import CategoryAPI from './api/CategoryAPI'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('/user/refresh_token')
        setToken(res.data.accessToken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin")
        firstLogin && refreshToken()
    }, [])

    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoryAPI: CategoryAPI()
    }

    ProductsAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
import { Switch, Route } from "react-router-dom"
import Product from "./product/Product"
import Cart from "./cart/Cart"
import Login from "./auth/Login"
import Register from "./auth/Register"
import NotFound from "./utils/not_found/NotFound"
import DetailProduct from "./detailProduct/DetailProduct"
import { useContext } from "react"
import { GlobalState } from "../../GlobalState"
import OrderHistory from "./history/OrderHistory"
import OrderDetail from "./history/OrderDetail"
import Category from "../mainpages/category/Category"
import CreateProduct from "./createProduct/CreateProduct"


const Pages = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route path='/' exact component={Product} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path='/login' exact component={isLogged ? NotFound : Login} />
            <Route path='/register' exact component={isLogged ? NotFound : Register} />
            <Route path='/history' exact component={isLogged ? OrderHistory : NotFound} />
            <Route path='/history/:id' exact component={isLogged ? OrderDetail : NotFound} />
            <Route path="/category" exact component={isAdmin ? Category : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path='/cart' exact component={Cart} />

            <Route path='*' exact component={NotFound} />
        </Switch>
    )
}

export default Pages

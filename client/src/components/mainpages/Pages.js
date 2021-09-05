import { Switch, Route } from "react-router-dom"
import Product from "./product/Product"
import Cart from "./cart/Cart"
import Login from "./auth/Login"
import Register from "./auth/Register"
import NotFound from "./utils/not_found/NotFound"
import DetailProduct from "./detailProduct/DetailProduct"

const Pages = () => {
    return (
        <Switch>
            <Route path='/' exact component={Product} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/cart' exact component={Cart} />

            <Route path='*' exact component={NotFound} />
        </Switch>
    )
}

export default Pages

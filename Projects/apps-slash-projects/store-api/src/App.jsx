import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products";

function App() {
    
    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <Routes>
                <Route path='/' element={<Products />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </div>
    )
}

export default App;

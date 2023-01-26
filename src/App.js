import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Resetpassword from "./pages/Resetpassword/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword/Forgotpassword";
import MainLayout from "./components/MainLayout/MainLayout";
import Enquiries from "./pages/EnquiriesPage/Enquiries/Enquiries";
import Bloglist from "./pages/BlogsPage/Bloglist/Bloglist";
import Blogcatlist from "./pages/BlogsPage/Blogcatlist/Blogcatlist";
import Orders from "./pages/OrdersPage/Orders/Orders";
import Customers from "./pages/CustomersPage/Customers/Customers";
import Colorlist from "./pages/CatalogPage/ColorPage/Colorlist/Colorlist";
import Categorylist from "./pages/CatalogPage/ProductAndCategoryPage/CategoryPage/Categorylist/Categorylist";
import Brandlist from "./pages/CatalogPage/BrandPage/Brandlist/Brandlist";
import Productlist from "./pages/CatalogPage/ProductAndCategoryPage/ProductPage/Productlist/Productlist";
import Addblog from "./pages/BlogsPage/Bloglist/Addblog/Addblog";
import Addblogcat from "./pages/BlogsPage/Blogcatlist/Addblogcat/Addblogcat";
import Addcolor from "./pages/CatalogPage/ColorPage/Addcolor/Addcolor";
import Addbrand from "./pages/CatalogPage/BrandPage/Addbrand/Addbrand";
import Addproduct from "./pages/CatalogPage/ProductAndCategoryPage/ProductPage/Addproduct/Addproduct";
import Addcategory from "./pages/CatalogPage/ProductAndCategoryPage/CategoryPage/Addcategory/Addcategory";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/reset-password" element={<Resetpassword />} />
                <Route path="/forgot-password" element={<Forgotpassword />} />

                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="enquiries" element={<Enquiries />} />

                    <Route path="blog" element={<Addblog />} />
                    <Route path="blog-list" element={<Bloglist />} />

                    <Route path="blog-category" element={<Addblogcat />} />
                    <Route
                        path="blog-category-list"
                        element={<Blogcatlist />}
                    />

                    <Route path="orders" element={<Orders />} />

                    <Route path="customers" element={<Customers />} />

                    <Route path="color" element={<Addcolor />} />
                    <Route path="color-list" element={<Colorlist />} />

                    <Route path="brand" element={<Addbrand />} />
                    <Route path="brand-list" element={<Brandlist />} />

                    <Route path="category" element={<Addcategory />} />
                    <Route path="category-list" element={<Categorylist />} />

                    <Route path="add-product" element={<Addproduct />} />
                    <Route path="product-list" element={<Productlist />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

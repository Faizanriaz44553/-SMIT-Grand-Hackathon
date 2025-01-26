import Signup from "../auth/signup/Signup";
import HandleCeta from "../components/form/HandleCeta";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import LoanPage from "../pages/Loanpage/LoanPage";

const RoutesJson = [
    {
        path:'/',
        element: <Home/>
    },
    {
        path: '/category/:subcategory', 
        element: <LoanPage/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
];

export default RoutesJson;

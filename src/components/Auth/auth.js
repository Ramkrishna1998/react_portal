import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {   

    var userToken = localStorage.getItem('userToken');

    const user = userToken ? { loggedIn: true } : { loggedIn: false };
    return user && user.loggedIn;
}


const ProtectedRoute = () => {
    const isAuth = useAuth();
    
    return (
        isAuth ? <Outlet /> : <Navigate to='/' />
    )

}

export default ProtectedRoute;
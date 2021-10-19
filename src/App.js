import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Doctors from "./components/Doctors/Doctors";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Shared/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Signup from "./components/Shared/Signup/Signup";
import SingleServiceDetails from "./components/SingleServiceDetails/SingleServiceDetails";
import Footer from "./components/Shared/Footer/Footer";
import OurDepartment from "./components/OurDepartment/OurDepartment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <SingleServiceDetails></SingleServiceDetails>
            </PrivateRoute>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <Route path="/department">
              <OurDepartment></OurDepartment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import "./App.scss";
import { Provider } from "react-redux";
import Header from "../src/components/header/Header";
import Home from "./pages/home";
import DetailsPage from "./pages/details/DetailsPage";
import { Routes, Route ,} from "react-router-dom";
import store from "./appStore";
import './firebase';
import Login from './components/Login/Login'
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    
    <Provider store={store}>
    
      <div className="App">
        <Header />
        <section className="itemContainer" >
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/dragons" element={<Home />} />
          <Route exact path="/dragons/:id" element={<DetailsPage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login"  element={<Login/>} />
          {/* <Route path="/signup" element={<SignUp/>} /> */}
          {/* <Route path="/login"  element={<Login/>} /> */}
        </Routes>
        </section>
      </div>
     
    </Provider>
    
  );
}

export default App;

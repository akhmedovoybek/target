import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Landing from "./Landing";
import Content from "./Content";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Universities from "./Universities";
import Filter from "./Filter";
import Details from "./Details";
function App(props) {

  return (
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/universities" element={<Universities data={props.data}/>}/>
          <Route path="/filter" element={<Filter data={props.data} />}/>
          <Route path="/details" element={<Details data={props.data} />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

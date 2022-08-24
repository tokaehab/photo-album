import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Album from "./components/Album";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Album />}></Route>
        <Route path="/image/:id" element={<ImageDetails />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

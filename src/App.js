import { BrowserRouter, Route, Switch } from "react-router-dom"
import Portraits from "./components/Portraits";
import Professional from "./components/Professional";
import Poster from "./components/Poster";
import PictureBooks from "./components/PictureBooks";
import BitsAndPieces from "./components/BitsAndPieces";
import About from "./components/About";
import NavBar from "./components/NavBar";
import './styles/style.css';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="body">
                <Switch>
                    <Route component={Portraits} path='/' exact />
                    <Route component={Professional} path='/professional' />
                    <Route component={Poster} path='/poster' />
                    <Route component={PictureBooks} path='/picturebooks' />
                    <Route component={BitsAndPieces} path='/bitsandpieces' />
                    <Route component={About} path='/about' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { MainPage } from './components/main';
import { Category } from './components/category';
import { Recipe } from './components/recipe';
import {Header} from "./components/Header";
import './styles/App.css';


function App()
    {
        return (
            <div className="App">
                <Header/>
                <Router>
                <nav className="homepage">
                    <Link to="/">Вернуться к списку категорий</Link>
                </nav>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/categories/:categoryId" element={<Category/>} />
                        <Route path="/recipes/:recipeId" element={<Recipe/>} />
                    </Routes>
                </Router>
            </div>
        );
    }

export default App;

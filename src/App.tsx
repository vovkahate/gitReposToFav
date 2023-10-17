import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Favourites from './pages/Favourites';
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favourites' element={<Favourites />} />
            </Routes>
        </>
    );
}

export default App;

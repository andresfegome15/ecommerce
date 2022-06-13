import { Home, Purchases, Login, NewsProducts, Register } from './pages';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoadingScreen, NavBar, ProtectedRoutes } from './componets'
import { useSelector } from 'react-redux';



function App() {
  const isLoading = useSelector(state => state.isLoading)
  return (
    <div className="App">
      <HashRouter>

        {isLoading && <LoadingScreen />}
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:id' element={<NewsProducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
          </Route>
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;

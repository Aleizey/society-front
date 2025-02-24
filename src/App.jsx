import { Route, Routes } from 'react-router-dom';
import './App.css';
import Primary from './pages/Primary';
import Layout from './components/Layout';
import Producto from './pages/Producto';
import AsociacionPage from './pages/Asociacion';
import MarketplaceAsociacion from './pages/MarketplaceAsociacion';
import Login from './pages/auth/login';
import NotFound from './pages/auth/404';
import ForgotPassword from './pages/auth/forgot-password';
import PasswordReset from './pages/auth/password-reset';
// import Carrito from './pages/Carrito';

import ProviderSociety from './components/ProviderSociety'
import Marketplace from './pages/Marketplace'
import AdminProductos from './pages/AdminProductos';
import GestorProductos from './components/CrudGestorAsociacion/GestorProductos';
import Register from './pages/auth/register';

function App() {

  return (
    <>
      <ProviderSociety>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Primary />} />
            <Route path="/shop" element={<Marketplace />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/asociacion/:id" element={<AsociacionPage />} />
            <Route path="/asociaciones/:id/tienda" element={<MarketplaceAsociacion />} />
            <Route path="/asociaciones/:id/gestionProductos" element={<GestorProductos />} />
            <Route path="/adminProductos" element={<AdminProductos />} />
            {/* <Route path="/carrito" element={<Carrito />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/:token" element={<PasswordReset />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProviderSociety>
    </>
  )
}

export default App

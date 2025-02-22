import { Route, Routes } from 'react-router';
import './App.css';
import NotFound from './pages/NotFound';
import Primary from './pages/Primary';
import Layout from './components/Layout';
import Producto from './pages/Producto';
import AsociacionPage from './pages/Asociacion';
import MarketplaceAsociacion from './pages/MarketplaceAsociacion';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Carrito from './pages/Carrito';
import PayView from './pages/PayView';

import ProviderSociety from './components/ProviderSociety'
import Marketplace from './pages/Marketplace'
import AdminProductos from './pages/AdminProductos';
import GestorProductos from './components/CrudGestorAsociacion/GestorProductos';

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
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/carrito/pay" element={<PayView />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProviderSociety>
    </>
  )
}

export default App

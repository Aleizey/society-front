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
import Carrito from './pages/Carrito';
import PayView from './pages/PayView';
import EnvioCarrito from './pages/EnvioCarrito';
import ProviderSociety from './components/ProviderSociety'
import Marketplace from './pages/Marketplace'
import AdminProductos from './pages/admin/AdminProductos';
import GestorProductos from './components/CrudGestorAsociacion/GestorProductos';
import Register from './pages/auth/register';
import CreateAsociacion from './pages/CreateAsociacion';
import AdminAsociacion from './pages/admin/AdminAsociacion';
import AdminUsers from './pages/admin/user/AdminUsers';
import CreateUsers from './pages/admin/user/CreateUsers';
import ShowUsers from './pages/admin/user/ShowUsers';
import UpdateUsers from './pages/admin/user/UpdateUsers';
import ConfirmEnvio from './pages/ConfirmEnvio';
import AdminRoute from './components/admin/AdminRoute';
import MyAdmin from './pages/profiles/MyAdmin';
import MisAsociaciones from './pages/profiles/MisAsociaciones';
import MisPedidos from './pages/profiles/MisPedidos';
import MyProfile from './pages/profiles/MyProfile';

function App() {

  return (
    <>
      <ProviderSociety>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Primary />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/shop" element={<Marketplace />} />
            <Route path="/producto/:id" element={<Producto />} />
            {/* asociacion */}
            <Route path="/asociacion/:id" element={<AsociacionPage />} />
            <Route path="/asociacion/:id/tienda" element={<MarketplaceAsociacion />} />
            <Route path="/asociacion/:id/gestionProductos" element={<GestorProductos />} />
            <Route path="/asociaciones/create" element={<CreateAsociacion />} />
            <Route path="/asociaciones/joins" element={<MisAsociaciones />} />
            {/* carrito */}
            <Route path="/pedidos" element={<MisPedidos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/carrito/pay" element={<PayView />} />
            {/* only admin */}
            <Route path="/admin/productos" element={<AdminProductos />} />
            {/* users */}
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/crear" element={<CreateUsers />} />
            <Route path="/admin/users/:id/show" element={<ShowUsers />} />
            <Route path="/admin/users/:id/actualizar" element={<UpdateUsers />} />
            {/* asociacion */}
            <Route path="/admin/asociacion" element={<AdminAsociacion />} />

            <Route element={<AdminRoute />}>
              <Route path="/admin/" element={<MyAdmin />} />
              <Route path="/admin/productos" element={<AdminProductos />} />
              {/* users */}
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/users/crear" element={<CreateUsers />} />
              <Route path="/admin/users/:id/show" element={<ShowUsers />} />
              <Route path="/admin/users/:id/actualizar" element={<UpdateUsers />} />
              {/* asociacion */}
              <Route path="/admin/asociaciones" element={<AdminAsociacion />} />
            </Route>
            {/* Carrito Vistas */}
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/carrito/pay" element={<PayView />} />
            <Route path="/carrito/envio" element={<EnvioCarrito />} />
            <Route path="/carrito/confirm" element={<ConfirmEnvio />} />
          </Route>
          {/* auth */}
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

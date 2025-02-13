import { Route, Routes } from 'react-router';
import './App.css';
import NotFound from './pages/NotFound';
import Primary from './pages/Primary';
import Layout from './components/Layout';
import Producto from './pages/Producto';
import AsociacionPage from './pages/Asociacion';
import MarketplaceAsociacion from './pages/MarketplaceAsociacion';

import ProviderSociety from './components/ProviderSociety'
import Marketplace from './pages/Marketplace'

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
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ProviderSociety>
    </>
  )
}

export default App

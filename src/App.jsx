import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import FamilyTablePage from './pages/FamilyTablePage';
import AboutPage from './pages/AboutPage';
import GiftCardsPage from './pages/GiftCardsPage';
import PressPage from './pages/PressPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menus" element={<MenusPage />} />
        <Route path="family-table" element={<FamilyTablePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gift-cards" element={<GiftCardsPage />} />
        <Route path="press" element={<PressPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

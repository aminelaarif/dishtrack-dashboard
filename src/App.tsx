import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarLayout } from "./layouts/SidebarLayout";
import { Dashboard } from "./pages/Dashboard";
import { MenuPage } from "./pages/MenuPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
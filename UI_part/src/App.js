import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import Home from "./Client/page";

import {
  AddProduct,
  Orders,
  Products,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
} from "./pages";


import UserProfilePage from "./pages/User_Page";
import ProjectForm from "./pages/Customers";
import ProjectDetails from "./pages/Settings";
import SearchProjects from "./pages/Inbox";
import ProjectInfo from "./Client/project/page";
import About from "./Client/about/page";
import Contact from "./Client/contact/page";
import AuthForm from "./Client/Signin/page";

const sideBarWidth = 250; // Sidebar width (can be made dynamic)

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Hide Sidebar (and Navbar if needed) on specific routes
  const hideNavAndSidebar =
    location.pathname === "/" ||
    location.pathname === "/sign" ||
    location.pathname === "/user_view" ||
    location.pathname === "/Client/project" ||
    location.pathname === "/Client/About" || 
    location.pathname === "/Client/Contact" || 
    location.pathname === "/Client/AuthForm";

  return (
    <Box sx={{ display: "flex" }}>
      {!hideNavAndSidebar && (
        <Sidebar
          sideBarWidth={sideBarWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, md: 2 },
          width: {
            xs: "100%",
            md: hideNavAndSidebar ? "100%" : `calc(100% - ${sideBarWidth}px)`,
          },
        }}
      >
        <Routes>
          {/* Redirect "/" to "/sign" */}
          <Route path="/" element={<Home to="/sign" />} />
          <Route path="/sign" element={<Home />} />
          <Route path="Client/AuthForm" element={<AuthForm/>} />
          <Route path="/Client/About" element={<About/>} />
          <Route path="/Client/Contact" element={<Contact/>} />
          <Route path="/Client/project" element={<ProjectInfo/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/customers" element={<ProjectForm />} />
          <Route path="/customers/:id" element={<SingleCustomer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<SingleOrder />} />
          <Route path="/settings" element={<ProjectDetails />} />
          <Route path="/inbox" element={<SearchProjects />} />
          <Route path="/user_view" element={<UserProfilePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;

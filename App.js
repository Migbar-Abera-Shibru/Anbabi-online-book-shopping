import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import AddUser from "./pages/AddUser/AddUser";
import Products from "./pages/Products/Products";
import AddProducts from "./pages/AddProducts/AddProducts";
import LoginSA from "./pages/LoginSA/LoginSA";
import Delivery from "./pages/Delivery/Delivery";
import LoginDe from "./pages/LoginDe/LoginDe";
import EditProducts from "./pages/EditProducts/EditProducts";

const App = () => {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/loginsa" element={<LoginSA />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/adduser" element={<AddUser />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/loginde" element={<LoginDe />} />
                    {/* <Route path="/wanaw" element={(<Wanaw />)} /> */}
                </Routes>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                onClick={() => setThemeSettings(true)}
                                style={{ background: currentColor, borderRadius: "50%" }}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={
                            activeMenu
                                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                        }
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* dashboard  */}

                                {/* <Route path="/" element={(<Landing />)} />
                <Route path="/login" element={(<Login />)} />
                <Route path="/wanaw" element={(<Wanaw />)} /> */}

                                <Route path="/dashboard" element={<Ecommerce />} />

                                {/* pages  */}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />
                                {/* <Route path="/customers" element={<Customers />} /> */}
                                <Route path="/books" element={<Products />} />
                                <Route path="/books/:id" element={<EditProducts />} />

                                {/* apps  */}
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/announcement" element={<Editor />} />
                                <Route path="/calendar" element={<Calendar />} />
                                {/* <Route path="/whatsnew" element={<ColorPicker />} /> */}

                                {/* charts  */}

                                <Route path="/addproducts" element={<AddProducts />} />

                                <Route path="/financial" element={<Financial />} />
                                <Route path="/color-mapping" element={<ColorMapping />} />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

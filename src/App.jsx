import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const CareersForm = lazy(() => import("./pages/CareersForm"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./components/Services"));
const Products = lazy(() => import("./pages/Products"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound")); // Lazy load NotFound page

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<CareersForm />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Catch-all route */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

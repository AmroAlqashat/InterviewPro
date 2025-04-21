import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

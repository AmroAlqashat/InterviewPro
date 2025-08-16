import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App(): React.ReactElement {
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

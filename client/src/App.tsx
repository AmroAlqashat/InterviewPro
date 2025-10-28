import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient";
import { Route, Routes } from "react-router-dom";
import { UserDataProvider } from "./context/UserDataContext";
import Home from "./pages/Home";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Main from "./components/dashboard/Main/Main";
import MockInterview from "./pages/MockInterview";
import CVManager from "./pages/CVManager";
import Careers from "./pages/Careers";
import Settings from "./pages/Settings";
import InterviewArea from "./pages/InterviewArea";
import NotFound from "./pages/NotFound";

function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Main />} />
              <Route path="mock-interview" element={<MockInterview />} />
              <Route path="cv-manager" element={<CVManager />} />
              <Route path="careers" element={<Careers />} />
              <Route path="settings" element={<Settings />} />
              <Route path="interview-area" element={<InterviewArea />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserDataProvider>
    </QueryClientProvider>
  );
}

export default App;

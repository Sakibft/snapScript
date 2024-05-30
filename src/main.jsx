import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/Router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import '../src/lang'; // Import the i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/lang'; // Import the i18n instance
AOS.init();
import { RouterProvider } from "react-router-dom";

import AuthContextComponent from "./providers/AuthContextComponent";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<I18nextProvider i18n={i18n}>
    <AuthContextComponent>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </AuthContextComponent>
    </I18nextProvider>
  </React.StrictMode>
);

 
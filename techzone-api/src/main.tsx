import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes.tsx";
import { SessionProvider } from "./contexts/session.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <Routes />
    </SessionProvider>
  </StrictMode>
);

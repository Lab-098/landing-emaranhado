"use client";

import { createContext, useContext } from "react";
import { TTypeToast } from "../types";

interface IToastContextProps {
  showToast: (type: TTypeToast) => void;
}

export const ToastContext = createContext<IToastContextProps | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("useToast must be used within a ToasProvider");

  return context;
};

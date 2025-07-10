"use client";

import { createPortal } from "react-dom";

import { ReactNode, useState } from "react";
import { IToastProps, TTypeToast } from "../types";
import { ToastContext } from ".";
import { Toast } from "../index";
import { ToastWrapper } from "../styles";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<IToastProps | null>(null);

  const showToast = (type: TTypeToast) => {
    setToast({ type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const portalTarget =
    typeof window !== "undefined"
      ? document.getElementById("toast-root")
      : null;

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {portalTarget &&
        toast &&
        createPortal(
          <ToastWrapper>
            <Toast type={toast.type} />
          </ToastWrapper>,
          portalTarget
        )}
    </ToastContext.Provider>
  );
};

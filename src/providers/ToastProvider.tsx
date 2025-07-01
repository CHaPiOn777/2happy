"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ToastTypes = "success" | "error" | "info" | "warning" | "default";
export type ToastPositions =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultPosition: ToastPositions = "top-right";

  return (
    <>
      {children}
      <ToastContainer
        className="gap-2 mt-32"
        hideProgressBar
        closeButton={false}
        position={defaultPosition}
        toastClassName={() => "p-0"}
      />
    </>
  );
}

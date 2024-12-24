import React from "react";
import { Header } from "@/components/common";

const RSLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default RSLayout;

import Navbar from "@/components/web/navbar";
import { ReactNode } from "react";

export default function SharedLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Navbar />
      <div className="py-4 mx-auto max-w-300 w-[90%]">{children}</div>
    </>
  );
}

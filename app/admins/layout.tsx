import Header from "@/components/admins/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function AdminLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main className="pt-28 px-4 md:px-6 xl:px-8">{children}</main>
    </div>
  );
}

export default AdminLayout;

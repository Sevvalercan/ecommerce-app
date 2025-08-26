import { ReactNode } from 'react';
import AdminSideBar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSideBar  />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

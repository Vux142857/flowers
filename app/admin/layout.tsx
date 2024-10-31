import LeftSideBar from "@/components/admin/layout/LeftSideBar";
import TopSideBar from "@/components/admin/layout/TopSideBar";
import { Role } from "@/lib/admin/role.enum";
import { authOption } from "@/lib/server/authOption";
import { ToasterProvider } from "@/lib/ToasterProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOption);

  if (!session || session.error || session.user?.roles !== Role.ADMIN) {
    redirect("/");
  }
  return (
    <div className="flex max-lg:flex-col">
      <ToasterProvider />
      <LeftSideBar />
      <TopSideBar />
      <div className="flex-1">{children}</div>
    </div >
  );
}

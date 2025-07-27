import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/*LEFT */}
      <div className="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">EduNexus</span>
        </Link>
        <Menu />
      </div>
      {/*RIGHT */}
      <div className="w-[86%] p-1 md:w-[92%] lg:w-[84%] xl:w-[86%]">R</div>
    </div>
  );
}

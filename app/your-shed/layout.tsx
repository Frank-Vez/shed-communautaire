import SideNav from "../components/SideNav";
export default function ShedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SideNav />
      {children}
    </section>
  );
}

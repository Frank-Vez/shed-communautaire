import Link from "next/link";

const SideNav = () => {
  return (
    <div className="min-h-0 flex flex-1 overflow-hidden ">
      <nav
        aria-label="sidebar"
        className="narrow-sidebar hidden lg:block flex-shrink-0 overflow-y-auto bg-gray-800"
      >
        <div className="relative w-20 flex space-y-16 flex-col p-3">
          <Link href={"/your-shed/add-tool"}>Add a tool</Link>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;

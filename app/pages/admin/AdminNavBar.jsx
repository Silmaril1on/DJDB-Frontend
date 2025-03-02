import Link from "next/link";

const AdminNavBar = () => {
  return (
    <nav className="space-x-2 px-3 lg:px-5 bg-black py-4">
      <Link className="green-btn" href="/createdj">
        Create DJ
      </Link>
      <Link className="green-btn" href="/createnews">
        Create News
      </Link>
      <Link className="green-btn" href="/createfestival">
        Create Festival
      </Link>
    </nav>
  );
};

export default AdminNavBar;

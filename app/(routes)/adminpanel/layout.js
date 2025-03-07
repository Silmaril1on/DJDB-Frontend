import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";
import AdminNavBar from "@/app/pages/admin/AdminNavBar";

export const metadata = {
  title: "DJDB - Admin Panel",
};

const DashboardLayout = ({ useranalytics, pendingartists }) => {
  return (
    <div className="space-y-4 bg-neutral-900">
      <SectionHeadline title="Admin panel" />
      <AdminNavBar />
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5">
        <section className="lg:w-[60%] w-full">{pendingartists}</section>
        <section className="w-full lg:w-[40%] space-y-5 ">
          {useranalytics}
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;

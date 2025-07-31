import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

const ParentPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;

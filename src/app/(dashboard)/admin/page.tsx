import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/** LEFT */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/** USER CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/** MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/** COUNT CHART */}
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChart />
          </div>
          {/** ATTENDANCE CHART */}
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        {/** BOTTOM CHARTS */}
        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>
      {/** RIGHT */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;

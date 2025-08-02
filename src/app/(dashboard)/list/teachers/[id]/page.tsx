import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD */}
          <div className="bg-edunexusSky flex flex-1 gap-4 rounded-md px-4 py-6">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="h-36 w-36 rounded-full object-cover"
              />
            </div>
            <div className="flex w-2/3 flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex flex-1 flex-wrap justify-between gap-4">
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt="" width={24} height={24} className="h-6 w-6" />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt="" width={24} height={24} className="h-6 w-6" />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt="" width={24} height={24} className="h-6 w-6" />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 h-[800px] rounded-md bg-white p-4">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-4 xl:w-1/3">
        <div className="rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link className="bg-edunexusSkyLight rounded-md p-3" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="bg-edunexusPurpleLight rounded-md p-3" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="bg-edunexusYellowLight rounded-md p-3" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="rounded-md bg-pink-50 p-3" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="bg-edunexusSkyLight rounded-md p-3" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;

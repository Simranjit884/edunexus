"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import React from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

// Define a generic type for form data
type FormData = Record<string, unknown>;

// Define the form component type
type FormComponent = (type: "create" | "update", data?: FormData) => React.ReactElement;

const forms: Record<string, FormComponent> = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  // Add placeholder forms for other types until they are implemented
  parent: (type, data) => <div>Parent Form - {type} - Coming Soon</div>,
  subject: (type, data) => <div>Subject Form - {type} - Coming Soon</div>,
  class: (type, data) => <div>Class Form - {type} - Coming Soon</div>,
  lesson: (type, data) => <div>Lesson Form - {type} - Coming Soon</div>,
  exam: (type, data) => <div>Exam Form - {type} - Coming Soon</div>,
  assignment: (type, data) => <div>Assignment Form - {type} - Coming Soon</div>,
  result: (type, data) => <div>Result Form - {type} - Coming Soon</div>,
  attendance: (type, data) => <div>Attendance Form - {type} - Coming Soon</div>,
  event: (type, data) => <div>Event Form - {type} - Coming Soon</div>,
  announcement: (type, data) => <div>Announcement Form - {type} - Coming Soon</div>,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: FormData;
  id?: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8 p-2" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-edunexusYellow"
      : type === "update"
        ? "bg-edunexusSky"
        : "bg-edunexusPurple";

  // Map type to correct image filename
  const getImageSrc = (type: "create" | "update" | "delete") => {
    switch (type) {
      case "create":
        return "/plus.png";
      case "update":
        return "/edit.png";
      case "delete":
        return "/delete.png";
      default:
        return "/plus.png";
    }
  };

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col gap-4 p-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="w-max self-center rounded-md border-none bg-red-700 px-4 py-2 text-white">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex h-auto w-auto cursor-pointer items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={getImageSrc(type)} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60">
          <div className="relative w-[90%] rounded-md bg-white p-4 md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;

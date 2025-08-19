"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { subjectSchema, SubjectSchema } from "@/lib/formValidationSchemas";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { createSubject, updateSubject } from "@/lib/actions";

const SubjectForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: SubjectSchema;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchema>({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      id: data?.id,
      name: data?.name ?? "",
    },
  });

  // AFTER REACT 19 IT'LL BE USEACTIONSTATE
  const [state, formAction] = useFormState(type === "create" ? createSubject : updateSubject, {
    success: false,
    error: false,
  });

  const onSubmit = handleSubmit((values) => {
    formAction(values);
  });

  useEffect(() => {
    if (state.success) {
      toast(`Subject has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
    }
  }, [state, type, setOpen]);

  const { teachers } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new subject" : "Update subject"}
      </h1>
      <span className="text-xs font-medium text-gray-400">Subject Information</span>

      {/* Ensure id is submitted for updates */}
      {type === "update" && (
        <input type="hidden" {...register("id")} defaultValue={data?.id?.toString()} />
      )}

      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Subject name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
            hidden
          />
        )}
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="text-xs text-gray-500">Teachers</label>
          <select
            multiple
            className="w-full rounded-md p-2 text-sm ring-[1.5px] ring-gray-300"
            {...register("teachers")}
            defaultValue={data?.teachers}
          >
            {teachers.map((teacher: { id: string; name: string; surname: string }) => (
              <option value={teacher.id} key={teacher.id}>
                {teacher.name + " " + teacher.surname}
              </option>
            ))}
          </select>
          {errors.teachers?.message && (
            <p className="text-xs text-red-400">{errors.teachers.message.toString()}</p>
          )}
        </div>
      </div>

      <button className="rounded-md bg-blue-400 p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;

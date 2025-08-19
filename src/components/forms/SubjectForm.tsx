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
}: {
  type: "create" | "update";
  data?: SubjectSchema;
  setOpen: Dispatch<SetStateAction<boolean>>;
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
      </div>
      <button className="rounded-md bg-blue-400 p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;

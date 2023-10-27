import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { BiEditAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useMutation } from "react-query";
import { useGetCustomerById } from "../../../hooks/useCustomer";
import { customerService } from "../../../services/customerService";
import { queryClient } from "../../../services/queryClient";
import { Checkbox } from "../../Checkbox";
import { Input } from "../../Input";
import { Spinner } from "../../Spinner";
import {
  FormDataCustomer,
  schemaCustomer,
} from "../schemas/customerFormFields";

export function EditCustomerModal({ id }: IModalProps) {
  const [showModal, setShowModal] = useState(false);
  const { data, isFetching } = useGetCustomerById(id);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm<FormDataCustomer>({
    resolver: zodResolver(schemaCustomer),
  });

  const { mutate, isLoading } = useMutation(
    "updatecustomer",
    customerService().update,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("customerslist");
      },
    }
  );

  function handleClickSubmit(body: any) {
    mutate(body);
    setShowModal(false);
    reset();
  }

  const formFields = Object.keys(
    schemaCustomer.shape
  ) as (keyof FormDataCustomer)[];

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <BiEditAlt />
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" shadow-lg border rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <header className="sticky flex align-center justify-between top-0 z-50 bg-white p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit customer</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                      reset();
                      setShowModal(false);
                    }}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      <MdClose />
                    </span>
                  </button>
                </header>
                <div className="relative p-6 flex-auto">
                  <div className="max-w-md mx-auto max-h-[60vh] overflow-y-scroll">
                    {!isFetching && (
                      <form
                        id="form"
                        className="grid grid-cols-2 gap-4 scroll bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit(handleClickSubmit)}
                      >
                        {formFields.map((fieldName) => {
                          if (fieldName === "notificationDisabled") {
                            return (
                              <Controller
                                key={fieldName}
                                control={control}
                                name={fieldName}
                                defaultValue={false}
                                render={({ field: { onChange, value } }) => (
                                  <Checkbox
                                    name={fieldName}
                                    onChange={onChange}
                                    value={value}
                                  />
                                )}
                              />
                            );
                          }

                          return (
                            <div className="mb-4" key={fieldName}>
                              <Input
                                defaultValue={data && data[fieldName]}
                                {...register(fieldName)}
                                error={errors && errors[fieldName]?.message}
                              />
                            </div>
                          );
                        })}
                      </form>
                    )}
                  </div>
                </div>
                <footer className="sticky flex justify-end bottom-0 z-50 bg-white p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-700 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    form="form"
                    disabled={isLoading}
                  >
                    {!isLoading ? "Submit" : <Spinner size="6" />}
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

interface IModalProps {
  id: string;
}

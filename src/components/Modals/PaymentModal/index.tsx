import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconType } from "react-icons/lib";

import { Spinner } from "../../Spinner";
import { FormDataPayment, schemaPayment } from "../schemas/paymentFormFields";

export function PaymentModal({
  title,
  isLoading,
  id,
  Icon,
  onSubmit,
}: IModalProps) {
  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataPayment>({
    resolver: zodResolver(schemaPayment),
  });

  function handleClickSubmit(body: any) {
    onSubmit(body);
    setShowModal(false);
  }

  const formFields = Object.keys(schemaPayment) as (keyof FormDataPayment)[];

  return (
    <>
      {!id ? (
        <button
          className="block text-center text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 text-center"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {title}
        </button>
      ) : (
        <button type="button" onClick={() => setShowModal(true)}>
          {Icon && <Icon />}
        </button>
      )}

      {showModal ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" shadow-lg border rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <header className="sticky flex align-center justify-between top-0 z-50 bg-white p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Create customer</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </header>
                <div className="relative p-6 flex-auto">
                  <div className="max-w-md mx-auto max-h-[60vh] overflow-y-scroll">
                    <form
                      id="form"
                      className="grid grid-cols-2 gap-4 scroll bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                      onSubmit={handleSubmit(handleClickSubmit)}
                    >
                      {formFields.map((fieldName) => (
                        <div className="mb-4" key={fieldName}>
                          <label
                            htmlFor={fieldName}
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            {fieldName}
                          </label>
                          <input
                            type="text"
                            id={fieldName}
                            {...register(fieldName)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={`Your ${fieldName}`}
                          />
                        </div>
                      ))}
                    </form>
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
  title: string;
  isLoading: boolean;
  id?: string;
  Icon?: IconType;
  onSubmit: (data: any) => void;
}

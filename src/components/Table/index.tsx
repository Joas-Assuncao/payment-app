import { BiEditAlt } from "react-icons/bi";
import { useMutation } from "react-query";

import { formFields } from "../../pages/Customers/formFields";
import { queryClient } from "../../services/queryClient";
import { Modal } from "../Modal";

export function Table({
  columnsName,
  dataSource,
  totalCount,
  type,
  service,
}: TableProps) {
  const { mutate, isLoading } = useMutation("update" + type, service.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(type + "slist");
    },
  });

  function onSubmit(body: any) {
    mutate(body);
  }

  function getId(dataItem: [string, string][]): string {
    let id = "";

    dataItem.forEach((item) => {
      if (item[0] === "id") {
        id = item[1];
      }
    });

    return id;
  }

  return (
    <>
      <table className="text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columnsName?.map((columnName) => (
              <th scope="col" className="px-6 py-3" key={columnName}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((dataItem, index) => (
            <tr className="bg-white border-b" key={index}>
              {dataItem.map(([key, value], index) => {
                if (key === "id") return null;

                return (
                  <td className="px-6 py-4" key={index + "child"}>
                    {value}
                  </td>
                );
              })}
              <td className="text-center">
                <Modal
                  Icon={BiEditAlt}
                  title=""
                  id={getId(dataItem)}
                  formFields={formFields}
                  onSubmit={onSubmit}
                  isLoading={isLoading}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalCount && totalCount > 10 && (
        <>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                100
              </span>{" "}
              Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
              </button>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                100
              </span>{" "}
              Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
              </button>
              <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

interface TableProps {
  dataSource?: [string, string][][];
  columnsName?: string[];
  totalCount?: number;
  type: string;
  service: any;
}

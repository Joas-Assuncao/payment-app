import { useMutation, useQuery, useQueryClient } from "react-query";

import { Modal } from "../../components/Modal";
import { Spinner } from "../../components/Spinner";
import { Table } from "../../components/Table";
import { crudService } from "../../services/crudService";
import { formFields } from "./formFields";

export function Customers() {
  const queryClient = useQueryClient();

  const { data = { data: [], totalCount: 0 }, isFetching } = useQuery<IResults>(
    ["customerslist"],
    crudService("/customers").list,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: createCustomer, isLoading: isLoadingCreate } = useMutation(
    "createcustomer",
    crudService("/customers").create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("customerslist");
      },
    }
  );

  const { mutate: updateCustomer, isLoading: isLoadingUpdate } = useMutation(
    "updatecustomer",
    crudService("/customers").update,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("customerslist");
      },
    }
  );

  const columnsName = [
    "dateCreated",
    "name",
    "email",
    "mobilePhone",
    "cpfCnpj",
    "state",
    "edit",
  ];

  const dataSource: any = [];

  if (!isFetching) {
    const customers = data.data;

    const customersObjectToArray = customers.map((dataItem) =>
      Object.entries(dataItem)
    );

    const customersObjectToArrayFiltered = customersObjectToArray.map(
      (objectTransformedArray: string[][]) =>
        objectTransformedArray.filter(
          ([key]) => columnsName.includes(key) || key === "id"
        )
    );

    customersObjectToArrayFiltered.forEach((item: string[][]) => {
      dataSource.push(item);
    });
  }

  function onSubmit(body: any) {
    if (body.id) {
      updateCustomer(body);
      return;
    }

    createCustomer(body);
  }

  return (
    <>
      <div className="relative p-4 ml-64">
        <header className="flex items-center justify-between">
          <h2 className="px-4 py-3 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Customer
          </h2>
          <Modal
            title="Create customer"
            formFields={formFields}
            onSubmit={onSubmit}
            isLoading={isLoadingCreate || isLoadingUpdate}
          />
        </header>

        {isFetching && (
          <div className="flex justify-center">
            <Spinner size="10" />
          </div>
        )}
        {!isFetching && (
          <div className="overflow-x-scroll w-full">
            <Table
              type="customer"
              columnsName={columnsName}
              dataSource={dataSource}
              totalCount={data.totalCount}
              service={crudService("/customers")}
            />
          </div>
        )}
      </div>
    </>
  );
}

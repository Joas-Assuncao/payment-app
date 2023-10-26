import { useMutation, useQuery, useQueryClient } from "react-query";

import { Modal } from "../../components/Modal";
import { Spinner } from "../../components/Spinner";
import { Table } from "../../components/Table";
import { customerService } from "../../services/customerService";

export function Customers() {
  const queryClient = useQueryClient();

  const { data = { data: [], totalCount: 0 }, isFetching } = useQuery<IResults>(
    ["customerslist"],
    customerService.list,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate, isLoading } = useMutation(
    "createcustomer",
    customerService.create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("customerslist");
      },
      onError: () => {
        console.log("error");
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
        objectTransformedArray.filter(([key]) => columnsName.includes(key))
    );

    customersObjectToArrayFiltered.forEach((item: string[][]) => {
      dataSource.push(item);
    });
  }

  const formFields = [
    { fieldName: "name", label: "Name", type: "text", required: true },
    {
      fieldName: "cpfCnpj",
      label: "Cpf or Cnpj",
      type: "text",
      required: true,
    },
    { fieldName: "email", label: "E-mail", type: "text", required: false },
    { fieldName: "phone", label: "Phone", type: "text", required: false },
    {
      fieldName: "mobilePhone",
      label: "Mobile phone",
      type: "text",
      required: false,
    },
    {
      fieldName: "postalCode",
      label: "Postal code",
      type: "text",
      required: false,
    },
    { fieldName: "address", label: "Address", type: "text", required: false },
    {
      fieldName: "addressNumber",
      label: "Address number",
      type: "text",
      required: false,
    },
    {
      fieldName: "complement",
      label: "Complement",
      type: "text",
      required: false,
    },
    { fieldName: "province", label: "Province", type: "text", required: false },
    {
      fieldName: "externalReference",
      label: "External reference",
      type: "text",
      required: false,
    },
    {
      fieldName: "notificationDisabled",
      label: "Notification",
      type: "boolean",
      required: false,
    },
    {
      fieldName: "additionalEmails",
      label: "Additional e-mails",
      type: "text",
      required: false,
    },
    {
      fieldName: "municipalInscription",
      label: "MunicipalInscription",
      type: "text",
      required: false,
    },
    {
      fieldName: "stateInscription",
      label: "State inscription",
      type: "text",
      required: false,
    },
    {
      fieldName: "observations",
      label: "Observations",
      type: "text",
      required: false,
    },
  ];

  function onSubmit(body: any) {
    mutate(body);
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
            isLoading={isLoading}
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
              columnsName={columnsName}
              dataSource={dataSource}
              totalCount={data.totalCount}
            />
          </div>
        )}
      </div>
    </>
  );
}

import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
// import { apiService } from '../../services/axios';
// import { useQuery } from 'react-query';
// import { IFinancialTransaction } from '../../models/financialTransaction';

export function Customer() {
  // const { data, isFetching } = useQuery<IFinancialTransaction>(
  //   'dashboard',
  //   async () => {
  //     try {
  //       const response = await apiService({
  //         method: 'GET',
  //         url: '/financialTransactions',
  //       });

  //       console.log(response.data);

  //       return response.data;
  //     } catch (err) {
  //       console.log({ err });
  //     }
  //   }
  // );

  // if (isFetching) return 'Loading...';

  const dataSource = [
    {
      name: "joao",
      email: "joao@mail.co",
      type: "customer",
    },
    {
      name: "claudio",
      email: "claudio@mail.co",
      type: "user",
    },
  ];

  const columnsName = ["name", "email", "type"];

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
    console.log(body);
  }

  return (
    <>
      <div className="relative overflow-x-auto p-4">
        <header className="flex items-center justify-between">
          <h2 className="px-4 py-3 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Customer
          </h2>
          <Modal
            title="Create customer"
            formFields={formFields}
            onSubmit={onSubmit}
          />
        </header>
        <div>
          <Table columnsName={columnsName} dataSource={dataSource} />
        </div>
      </div>
    </>
  );
}

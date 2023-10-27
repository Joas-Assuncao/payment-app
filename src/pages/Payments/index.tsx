import { useMutation, useQuery, useQueryClient } from "react-query";

import { PaymentModal } from "../../components/Modals/PaymentModal";
import { Spinner } from "../../components/Spinner";
import { Table } from "../../components/Table";
import { customerService } from "../../services/customerService";

export function Payments() {
  const queryClient = useQueryClient();

  const { data = { data: [], totalCount: 0 }, isFetching } = useQuery<IResults>(
    ["paymentslist"],
    customerService("/payments").list,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: createPayment, isLoading: isLoadingCreate } = useMutation(
    "createpayments",
    customerService("/payments").create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("paymentslist");
      },
    }
  );

  const { mutate: updatePayment, isLoading: isLoadingUpdate } = useMutation(
    "updatepayments",
    customerService("/paymentss").update,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("paymentslist");
      },
    }
  );

  const columnsName = [
    "dueDate",
    "value",
    "netValue",
    "billingType",
    "status",
    "description",
    "edit",
  ];

  const dataSource: any = [];

  if (!isFetching) {
    const paymentss = data.data;

    const paymentsObjectToArray = paymentss.map((dataItem) =>
      Object.entries(dataItem)
    );

    const paymentsObjectToArrayFiltered = paymentsObjectToArray.map(
      (objectTransformedArray: string[][]) =>
        objectTransformedArray.filter(
          ([key]) => columnsName.includes(key) || key === "id"
        )
    );

    paymentsObjectToArrayFiltered.forEach((item: string[][]) => {
      dataSource.push(item);
    });
  }

  function onSubmit(body: any) {
    if (body.id) {
      updatePayment(body);
      return;
    }

    createPayment(body);
  }

  return (
    <>
      <div className="relative p-4 ml-64">
        <header className="flex items-center justify-between">
          <h2 className="px-4 py-3 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Payments
          </h2>
          <PaymentModal
            title="Create payment"
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
              Modal={PaymentModal}
              type="payments"
              columnsName={columnsName}
              dataSource={dataSource}
              totalCount={data.totalCount}
              service={customerService("/payments")}
            />
          </div>
        )}
      </div>
    </>
  );
}

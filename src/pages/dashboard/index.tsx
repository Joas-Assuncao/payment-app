import { Table } from "../../components/Table";
// import { apiService } from "../../services/axios";
// import { useQuery } from "react-query";
// import { IFinancialTransaction } from "../../models/financialTransaction";

export function Dashboard() {
  // const { data, isFetching } = useQuery<IFinancialTransaction>(
  //   "dashboard",
  //   async () => {
  //     try {
  //       const response = await apiService({
  //         method: "GET",
  //         url: "/financialTransactions",
  //       });

  //       console.log(response.data);

  //       return response.data;
  //     } catch (err) {
  //       console.log({ err });
  //     }
  //   }
  // );

  // if (isFetching) return "Loading...";

  return (
    <>
      <div className="relative overflow-x-auto">
        <h2 className="px-4 py-3 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          Dashboard
        </h2>
        <div>
          <Table
            columnsName={["Description"]}
            dataSource={[{ Description: "estou dizendo ola" }]}
          />
        </div>
      </div>
    </>
  );
}

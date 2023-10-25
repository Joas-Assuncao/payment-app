export function Table({ columnsName, dataSource }: TableProps) {
  const data: [string, string][][] = dataSource.map((dataItem) => {
    return Object.entries(dataItem);
  });

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {columnsName.map((columnName) => (
            <th scope="col" className="px-6 py-3">
              {columnName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem) => (
          <tr className="bg-white border-b">
            {dataItem.map(([, value]) => (
              <td className="px-6 py-4">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any[];
  columnsName: string[];
}

export function Table({ columnsName, dataSource }: TableProps) {
  const data: [string, string][][] = dataSource.map((dataItem) => {
    return Object.entries(dataItem);
  });

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {columnsName.map((columnName) => (
            <th scope="col" className="px-6 py-3" key={columnName}>
              {columnName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem, index) => {
          return (
            <tr className="bg-white border-b" key={index}>
              {dataItem.map(([, value], index) => (
                <td className="px-6 py-4" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface TableProps {
  dataSource: any[];
  columnsName: string[];
}

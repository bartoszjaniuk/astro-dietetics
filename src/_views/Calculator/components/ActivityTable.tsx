import React from "react";

export const ActivityTable = () => {
  return (
    <table className="table-fixed text-xl text-left shadow-lg">
      <thead className="bg-primary text-white text-2xl ">
        <tr className="m-4">
          <th className="px-6 py-3">Aktywność</th>
          <th className="px-6 py-3">Natężenie</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">pacjent leżący w łóżku</td>
          <td className="px-6 py-3">brak aktywności fizycznej</td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">aktywność fizyczna niska</td>
          <td className="px-6 py-3">
            praca siedząca, spacery z psem, pojedyńcze treningi w tygodniu
          </td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">aktywność fizyczna umiarkowana</td>
          <td className="px-6 py-3">
            praca fizyczna lub praca siedząca ale dużo ruchu, 2-3 treningi w
            tygodniu
          </td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">aktywność fizyczna wysoka</td>
          <td className="px-6 py-3">
            praca fizyczna/siedząca i wiele ciękich treningów w tygodniu
          </td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">aktywność fizyczna bardzo wysoka</td>
          <td className="px-6 py-3">uprawianie sportu zawodowo</td>
        </tr>
      </tbody>
    </table>
  );
};

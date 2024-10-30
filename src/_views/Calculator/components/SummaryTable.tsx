import { goal } from "../constants/calculator";

type Props = {
  gender: string;
  goal: string;
  weight: number;
  height: number;
  age: number;
  activity: string;
};

const genderMap = {
  male: "Mężczyzna",
  female: "Kobieta",
};
const goalMap = {
  gain: "zwiększenie wagi",
  lose: "zredukowanie wagi",
  hold: "utrzymanie wagi",
};

const activityMap = {
  layingInBed: "pacjent leżący w łóżku",
  low: "aktywnosc fizyczna niska",
  medium: "aktywnosc fizyczna umiarkowana",
  high: "aktywnosc fizyczna wysoka",
  veryHigh: "aktywnosc fizyczna bardzo wysoka",
};

export const SummaryTable = ({
  activity,
  age,
  gender,
  height,
  goal,
  weight,
}: Props) => {
  return (
    <table className="table-fixed text-xl text-left shadow-lg mt-8">
      <thead className="bg-primary text-white text-2xl ">
        <tr className="m-4">
          <th className="px-6 py-3">Pole formularza</th>
          <th className="px-6 py-3">Wartość</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Płeć</td>
          <td className="px-6 py-3">
            {genderMap[gender as "male" | "female"]}
          </td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Twój cel</td>
          <td className="px-6 py-3">
            {goalMap[goal as "gain" | "lose" | "hold"]}
          </td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Waga</td>
          <td className="px-6 py-3">{weight}kg</td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Wzrost</td>
          <td className="px-6 py-3">{height}cm</td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Wiek</td>
          <td className="px-6 py-3">{age}lat</td>
        </tr>
        <tr className="border-b border-b-secondary h-12">
          <td className="px-6 py-3">Rodzaj aktywnności</td>
          <td className="px-6 py-3">
            {activityMap[activity as keyof typeof activityMap]}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

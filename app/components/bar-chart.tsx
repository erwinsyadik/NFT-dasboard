import { BarChart as ReBarChart, Bar, ResponsiveContainer } from "recharts";
import data from "~/mocks/bar";

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <ReBarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}

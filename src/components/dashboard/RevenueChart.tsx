import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 1500 },
  { month: "Feb", revenue: 2300 },
  { month: "Mar", revenue: 3200 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 3600 },
  { month: "Jun", revenue: 3000 },
  { month: "Jul", revenue: 2500 },
  { month: "Aug", revenue: 2800 },
  { month: "Sep", revenue: 3200 },
  { month: "Oct", revenue: 2900 },
  { month: "Nov", revenue: 2400 },
  { month: "Dec", revenue: 2100 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="month"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="revenue"
              fill="#FF4B55"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
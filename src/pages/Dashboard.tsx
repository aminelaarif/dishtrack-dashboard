import { StatCard } from "@/components/dashboard/StatCard";
import { OrderTracker } from "@/components/dashboard/OrderTracker";
import { RevenueChart } from "@/components/dashboard/RevenueChart";

export function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-gray-500">Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Orders" value="2,250" />
        <StatCard title="Pending Orders" value="12" />
        <StatCard title="Revenue" value="$2,250" />
        <StatCard title="Reservations" value="8" />
      </div>

      <OrderTracker />

      <div className="mt-8">
        <RevenueChart />
      </div>
    </div>
  );
}
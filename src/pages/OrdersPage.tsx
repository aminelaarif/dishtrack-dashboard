import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type Order = {
  id: string;
  customerName: string;
  phoneNumber: string;
  status: "pending" | "preparing" | "completed";
  date: Date;
};

export function OrdersPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const orders: Order[] = [
    {
      id: "ORD-001",
      customerName: "John Doe",
      phoneNumber: "123-456-7890",
      status: "pending",
      date: new Date(),
    },
    // Add more orders as needed
  ];

  const sortedOrders = [...orders].sort((a, b) => {
    return sortOrder === "asc"
      ? a.date.getTime() - b.date.getTime()
      : b.date.getTime() - a.date.getTime();
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          <ArrowUpDown className="mr-2 h-4 w-4" />
          Sort by {sortOrder === "asc" ? "Newest" : "Oldest"}
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.phoneNumber}</TableCell>
              <TableCell className="capitalize">{order.status}</TableCell>
              <TableCell>
                {order.date.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
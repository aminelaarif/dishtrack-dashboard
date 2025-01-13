import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Reservation = {
  id: string;
  customerName: string;
  phoneNumber: string;
  time: Date;
  tableNumber: number;
};

export function ReservationsPage() {
  const [reservations] = useState<Reservation[]>([
    {
      id: "RES-001",
      customerName: "Jane Smith",
      phoneNumber: "123-456-7890",
      time: new Date(),
      tableNumber: 5,
    },
    {
      id: "RES-002",
      customerName: "John Doe",
      phoneNumber: "987-654-3210",
      time: new Date(),
      tableNumber: 3,
    },
  ]);

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservations</h1>
          <p className="text-gray-500">Manage your restaurant reservations</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 transition-colors duration-200">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Reservation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Reservation</DialogTitle>
            </DialogHeader>
            {/* Add form here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg border bg-white shadow-sm animate-scale-in">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Reservation ID</TableHead>
              <TableHead className="font-semibold">Customer Name</TableHead>
              <TableHead className="font-semibold">Phone Number</TableHead>
              <TableHead className="font-semibold">Time</TableHead>
              <TableHead className="font-semibold">Table Number</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((reservation, index) => (
              <TableRow
                key={reservation.id}
                className={cn(
                  "hover:bg-gray-50 transition-colors duration-200",
                  "animate-fade-in",
                  { "delay-100": index === 0 },
                  { "delay-200": index === 1 },
                  { "delay-300": index === 2 }
                )}
              >
                <TableCell className="font-medium">{reservation.id}</TableCell>
                <TableCell>{reservation.customerName}</TableCell>
                <TableCell>{reservation.phoneNumber}</TableCell>
                <TableCell>
                  {reservation.time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </TableCell>
                <TableCell>Table {reservation.tableNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
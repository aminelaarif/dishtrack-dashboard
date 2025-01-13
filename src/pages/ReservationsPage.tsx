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
    // Add more reservations as needed
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>New Reservation</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Reservation</DialogTitle>
            </DialogHeader>
            {/* Add form here */}
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reservation ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Table Number</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell>{reservation.customerName}</TableCell>
              <TableCell>{reservation.phoneNumber}</TableCell>
              <TableCell>
                {reservation.time.toLocaleTimeString()}
              </TableCell>
              <TableCell>{reservation.tableNumber}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
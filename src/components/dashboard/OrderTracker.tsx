import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Ordered", status: "complete" },
  { id: 2, name: "Pending", status: "current" },
  { id: 3, name: "Preparing", status: "upcoming" },
  { id: 4, name: "Delivery", status: "upcoming" },
  { id: 5, name: "Received", status: "upcoming" },
];

export function OrderTracker() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-xl">Track Order</CardTitle>
        <p className="text-sm text-gray-500">ORDER-54534598</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {steps.map((step, stepIdx) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full",
                  {
                    "bg-primary text-white": step.status === "complete" || step.status === "current",
                    "bg-gray-200": step.status === "upcoming",
                  }
                )}
              >
                {step.id}
              </div>
              <div className="mt-2 text-sm">{step.name}</div>
              {stepIdx !== steps.length - 1 && (
                <div
                  className={cn("w-full h-1 mt-4", {
                    "bg-primary": step.status === "complete",
                    "bg-gray-200": step.status !== "complete",
                  })}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
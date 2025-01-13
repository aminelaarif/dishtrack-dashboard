import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "French Crustini",
    price: "$14.99",
    orders: 179,
    revenue: "$1,100",
    image: "public/lovable-uploads/b348c942-9cf5-4e87-85d2-412915d11219.png",
  },
  // Add more menu items as needed
];

export function MenuItems() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Menu Items</CardTitle>
          <Button variant="outline">Add Item</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                  <Button size="icon" variant="ghost">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Orders: {item.orders}</span>
                  <span>Revenue: {item.revenue}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
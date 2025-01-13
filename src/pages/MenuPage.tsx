import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuItems } from "@/components/dashboard/MenuItems";

type MenuCategory = "breakfast" | "lunch" | "dinner" | "appetizers";

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("breakfast");

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Menu Item</DialogTitle>
            </DialogHeader>
            {/* Add form here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex space-x-4 mb-6">
        {["breakfast", "lunch", "dinner", "appetizers"].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category as MenuCategory)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <MenuItems />
    </div>
  );
}
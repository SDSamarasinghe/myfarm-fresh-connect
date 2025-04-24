
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Plus } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";
import { DataTable } from "@/components/ui/data-table";
import { useToast } from "@/hooks/use-toast";
import { plants as mockPlants } from "@/data/plants";

const columns = [
  { header: "Name", accessorKey: "name" },
  { header: "Category", accessorKey: "category" },
  { header: "Growing Time", accessorKey: "growingTime" },
  { header: "Price", accessorKey: "price" },
];

const AdminPlants = () => {
  const [plants, setPlants] = useState(mockPlants);
  const { toast } = useToast();

  const handleEdit = (plant: any) => {
    toast({
      title: "Edit Plant",
      description: `Editing plant ${plant.name}`,
    });
  };

  const handleDelete = (plant: any) => {
    toast({
      title: "Delete Plant",
      description: `Deleting plant ${plant.name}`,
      variant: "destructive",
    });
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Plants Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Plant
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-6 w-6" />
            Plants Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            data={plants}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminPlants;

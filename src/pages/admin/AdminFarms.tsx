
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Plus } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";
import { DataTable } from "@/components/ui/data-table";
import { useToast } from "@/hooks/use-toast";
import { farms as mockFarms } from "@/data/farms";

const columns = [
  { header: "Name", accessorKey: "name" },
  { header: "Location", accessorKey: "location" },
  { header: "Available Plots", accessorKey: "availablePlots" },
  { header: "Price/Perch", accessorKey: "pricePerPerch" },
];

const AdminFarms = () => {
  const [farms, setFarms] = useState(mockFarms);
  const { toast } = useToast();

  const handleEdit = (farm: any) => {
    toast({
      title: "Edit Farm",
      description: `Editing farm ${farm.name}`,
    });
  };

  const handleDelete = (farm: any) => {
    toast({
      title: "Delete Farm",
      description: `Deleting farm ${farm.name}`,
      variant: "destructive",
    });
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Farms Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Farm
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            Farms Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            data={farms}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminFarms;

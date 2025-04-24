
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const AdminPlants = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Plants Management</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-6 w-6" />
            Plants Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Plant management coming soon...</p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminPlants;

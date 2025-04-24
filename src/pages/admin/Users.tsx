
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users as UsersIcon } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const Users = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Users Management</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-6 w-6" />
            Users Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">User management coming soon...</p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Users;

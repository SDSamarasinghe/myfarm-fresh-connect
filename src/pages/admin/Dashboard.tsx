
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Warehouse, Sprout } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      description: "Active users this month",
    },
    {
      title: "Active Farms",
      value: "56",
      icon: Warehouse,
      description: "Farms under management",
    },
    {
      title: "Plant Types",
      value: "89",
      icon: Sprout,
      description: "Available plant varieties",
    },
    {
      title: "Revenue",
      value: "₹123,456",
      icon: BarChart,
      description: "Monthly revenue",
    },
  ];

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

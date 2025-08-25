// app/(dashboard)/dashboard/page.tsx
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <MotionWrap>
      <div className="space-y-8">
        {/* Header with responsive font size */}
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>

        {/* Responsive grid for stats cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Revenue" 
            value="$45,231.89" 
            icon={<DollarSign className="h-5 w-5 text-green-500" />} 
            description="+20.1% from last month"
          />
          <StatCard 
            title="New Users" 
            value="+1,234" 
            icon={<Users className="h-5 w-5 text-blue-500" />}
            description="+180.1% from last month"
          />
          <StatCard 
            title="Sales" 
            value="+540" 
            icon={<CreditCard className="h-5 w-5 text-purple-500" />}
            description="+19% from last month"
          />
          <StatCard 
            title="Active Now" 
            value="89" 
            icon={<Activity className="h-5 w-5 text-red-500" />}
            description="+2 since last hour"
          />
        </div>

        {/* Chart Card */}
        <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10">
          <CardHeader>
            <CardTitle className="text-xl text-[#6B3416]">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Ensure the chart container has a defined height for responsiveness */}
            <div className="h-[300px] sm:h-[350px]">
              <AnalyticsChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </MotionWrap>
  );
}

// Helper component for styled stat cards to keep the code clean
const StatCard = ({ title, value, icon, description }: { title: string, value: string, icon: React.ReactNode, description: string }) => (
  <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10 hover:border-[#85421C]/20 transition-colors duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-[#6B3416]">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

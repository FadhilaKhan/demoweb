// app/analytics/page.tsx
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { ArrowDown, ArrowUp, BarChart2, Users, MousePointerClick, Clock } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <MotionWrap>
                <div className="space-y-8">
                    {/* Header with responsive font size */}
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">Analytics Overview</h1>
                        <p className="text-lg text-gray-600">Explore your website's performance and traffic data.</p>
                    </div>
                    
                    <Tabs defaultValue="overview" className="space-y-6">
                        {/* Styled TabsList */}
                        <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:grid-cols-3 bg-[#85421C]/5 p-2 rounded-xl border border-[#85421C]/10">
                            <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Overview</TabsTrigger>
                            <TabsTrigger value="traffic" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Traffic Sources</TabsTrigger>
                            <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Performance</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview" className="mt-0">
                            <div className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <StatCard title="Page Views" value="1.2M" icon={<BarChart2 className="h-5 w-5 text-blue-500" />} change="+12%" isPositive />
                                    <StatCard title="Unique Visitors" value="850K" icon={<Users className="h-5 w-5 text-green-500" />} change="+8.5%" isPositive />
                                    <StatCard title="Bounce Rate" value="42.5%" icon={<MousePointerClick className="h-5 w-5 text-red-500" />} change="-2.1%" isPositive={false} />
                                    <StatCard title="Avg. Session" value="3m 45s" icon={<Clock className="h-5 w-5 text-purple-500" />} change="+15s" isPositive />
                                </div>
                                <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-[#6B3416]">Visitor Trends</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-[300px] sm:h-[350px]">
                                            <AnalyticsChart />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Traffic Sources Tab */}
                        <TabsContent value="traffic" className="mt-0">
                            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10">
                                <CardHeader>
                                    <CardTitle className="text-xl text-[#6B3416]">Top Traffic Sources</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Source</TableHead>
                                                <TableHead>Sessions</TableHead>
                                                <TableHead>Change</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow><TableCell>Google</TableCell><TableCell>450,123</TableCell><TableCell className="text-green-500">+15%</TableCell></TableRow>
                                            <TableRow><TableCell>Facebook</TableCell><TableCell>120,456</TableCell><TableCell className="text-red-500">-5%</TableCell></TableRow>
                                            <TableRow><TableCell>Direct</TableCell><TableCell>98,789</TableCell><TableCell className="text-green-500">+8%</TableCell></TableRow>
                                            <TableRow><TableCell>Twitter</TableCell><TableCell>50,123</TableCell><TableCell className="text-green-500">+20%</TableCell></TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        
                        {/* Performance Tab Placeholder */}
                        <TabsContent value="performance" className="mt-0">
                             <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10">
                                <CardHeader>
                                    <CardTitle className="text-xl text-[#6B3416]">Site Performance</CardTitle>
                                    <CardDescription>Core web vitals and page load times.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Performance metrics and charts will be displayed here.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </MotionWrap>
        </div>
    </main>
  );
}

// Helper component for styled stat cards
const StatCard = ({ title, value, icon, change, isPositive }: { title: string, value: string, icon: React.ReactNode, change: string, isPositive: boolean }) => (
  <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10 hover:border-[#85421C]/20 transition-colors duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-[#6B3416]">{value}</div>
      <p className={`text-xs flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUp className="w-3 h-3 mr-1"/> : <ArrowDown className="w-3 h-3 mr-1"/>}
        {change} from last month
      </p>
    </CardContent>
  </Card>
);

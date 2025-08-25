// app/notifications/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { Bell, UserPlus, MessageSquare, AlertTriangle, Settings } from "lucide-react";

export default function NotificationsPage() {
    const notifications = [
        { icon: <UserPlus className="text-blue-500" />, title: "New user registered", description: "John Doe just signed up.", time: "15m ago" },
        { icon: <MessageSquare className="text-green-500" />, title: "New message received", description: "You have a new message from Jane Smith.", time: "1h ago" },
        { icon: <AlertTriangle className="text-yellow-500" />, title: "Server usage high", description: "Your server CPU is at 90% usage.", time: "2h ago" },
        { icon: <UserPlus className="text-blue-500" />, title: "New user registered", description: "Emily White just signed up.", time: "1d ago" },
        { icon: <Settings className="text-gray-500" />, title: "Profile updated", description: "Your profile information has been successfully updated.", time: "2d ago" },
    ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <MotionWrap>
                {/* Header with responsive layout and font sizes */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 md:mb-12">
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#85421C]">Notifications</h1>
                        <p className="text-gray-600 mt-1">You have {notifications.length} unread notifications.</p>
                    </div>
                    <Button 
                        variant="outline"
                        className="w-full sm:w-auto border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-300"
                    >
                        Mark all as read
                    </Button>
                </div>
            </MotionWrap>

            <MotionWrap delay={0.2}>
                {/* Notifications Card */}
                <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10">
                    <CardContent className="p-0">
                        <div className="divide-y divide-[#85421C]/10">
                            {notifications.map((notification, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start gap-4 p-4 sm:p-6 hover:bg-[#85421C]/5 transition-colors duration-200"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#85421C]/10 rounded-full">
                                        {notification.icon}
                                    </div>
                                    <div className="grid gap-1 flex-1">
                                        <p className="font-semibold text-gray-800">{notification.title}</p>
                                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                                    </div>
                                    <time className="text-sm text-muted-foreground mt-1 flex-shrink-0">{notification.time}</time>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </MotionWrap>
        </div>
    </main>
  );
}

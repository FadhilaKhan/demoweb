// app/settings/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <MotionWrap>
                <div className="space-y-8">
                    {/* Header with responsive font size */}
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">Account Settings</h1>
                        <p className="text-lg text-gray-600">Manage your profile, account, and appearance settings.</p>
                    </div>
                    
                    <Tabs defaultValue="profile" className="space-y-6">
                        {/* Styled TabsList */}
                        <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:grid-cols-3 bg-[#85421C]/5 p-2 rounded-xl border border-[#85421C]/10">
                            <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Profile</TabsTrigger>
                            <TabsTrigger value="account" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Account</TabsTrigger>
                            <TabsTrigger value="appearance" className="data-[state=active]:bg-white data-[state=active]:text-[#85421C] data-[state=active]:shadow-md rounded-lg">Appearance</TabsTrigger>
                        </TabsList>

                        {/* Styled Card Wrapper for Tabs Content */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#85421C]/10 p-6 sm:p-8">
                            {/* Profile Tab */}
                            <TabsContent value="profile" className="mt-0">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl text-[#6B3416]">Profile</CardTitle>
                                        <CardDescription>Make changes to your public information here. Click save when you&apos;re done.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 mt-6 p-0">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" defaultValue="Admin User" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue="admin@example.com" />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-0 mt-6">
                                        <Button className="bg-[#85421C] hover:bg-[#6B3416] text-white">Save changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            {/* Account Tab */}
                            <TabsContent value="account" className="mt-0">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl text-[#6B3416]">Password</CardTitle>
                                        <CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 mt-6 p-0">
                                        <div className="space-y-2">
                                            <Label htmlFor="current-password">Current Password</Label>
                                            <Input id="current-password" type="password" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="new-password">New Password</Label>
                                            <Input id="new-password" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-0 mt-6">
                                        <Button className="bg-[#85421C] hover:bg-[#6B3416] text-white">Update Password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            {/* Appearance Tab */}
                            <TabsContent value="appearance" className="mt-0">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl text-[#6B3416]">Appearance</CardTitle>
                                        <CardDescription>Customize the look and feel of your dashboard.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 mt-6 p-0">
                                        <div className="space-y-2">
                                            <Label>Theme</Label>
                                            <p className="text-sm text-muted-foreground">Select which theme to display.</p>
                                            <div className="flex items-center space-x-2 rounded-lg bg-muted p-2 max-w-fit">
                                                <Button variant="outline" className="bg-background">Light</Button>
                                                <Button variant="ghost">Dark</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </MotionWrap>
        </div>
    </main>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/AIButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Bell, Moon, Globe, Lock, Mail, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function Settings() {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="flex flex-col h-screen lg:h-screen flex-1 overflow-hidden bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your account preferences and application settings</p>
          </div>

          <div className="space-y-6">
            {/* Notifications */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-gray-900">Notifications</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Configure how you receive updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications" className="text-gray-900">Email Notifications</Label>
                <p className="text-sm text-gray-600">Receive interview reminders via email</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="interview-reminders" className="text-gray-900">Interview Reminders</Label>
                <p className="text-sm text-gray-600">Get notified before scheduled interviews</p>
              </div>
              <Switch id="interview-reminders" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="performance-updates" className="text-gray-900">Performance Updates</Label>
                <p className="text-sm text-gray-600">Weekly summary of your progress</p>
              </div>
              <Switch id="performance-updates" />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-gray-900">Appearance</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Customize how the application looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-gray-900">Theme</Label>
              <Select defaultValue="light">
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations" className="text-gray-900">Enable Animations</Label>
                <p className="text-sm text-gray-600">Smooth transitions and effects</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-gray-900">Language & Region</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Set your language and timezone preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language" className="text-gray-900">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-gray-900">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger id="timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time</SelectItem>
                  <SelectItem value="pst">Pacific Time</SelectItem>
                  <SelectItem value="cet">Central European Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-gray-900">Privacy & Security</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Manage your data and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-sharing" className="text-gray-900">Data Sharing</Label>
                <p className="text-sm text-gray-600">Share anonymous usage data to improve the service</p>
              </div>
              <Switch id="data-sharing" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor" className="text-gray-900">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">Enable</Button>
            </div>
            <Separator />
            <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-50">
              <Lock className="h-4 w-4 mr-2" />
              Change Password
            </Button>
          </CardContent>
        </Card>

        {/* Account */}
        <Card className="border-red-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-700">Account Management</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
              Export My Data
            </Button>
            <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">Reset to Defaults</Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

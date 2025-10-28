import { useState } from "react";
import { useUserData } from "../context/UserDataContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/AIButton";
import { Input } from "../components/ui/AIInput";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Briefcase, Plus, CheckCircle2, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function Careers() {
  const { careers, setActiveCareer, setCareers } = useUserData();
  const [newCareerTitle, setNewCareerTitle] = useState("");
  const [newCareerLevel, setNewCareerLevel] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCareer = () => {
    if (!newCareerTitle || !newCareerLevel) {
      toast.error("Please fill in all fields");
      return;
    }

    const newCareer = {
      id: Date.now().toString(),
      title: newCareerTitle,
      level: newCareerLevel,
      isActive: false,
      interviewsCompleted: 0,
      avgScore: 0
    };

    setCareers([...careers, newCareer]);
    setNewCareerTitle("");
    setNewCareerLevel("");
    setIsDialogOpen(false);
    toast.success("Career added successfully!");
  };

  const handleSetActive = (id: string) => {
    setActiveCareer(id);
    toast.success("Career set as active");
  };

  return (
    <div className="flex flex-col h-screen lg:h-screen flex-1 overflow-hidden bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">My Careers</h1>
              <p className="text-gray-600">Manage your career paths and practice goals</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Career
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-gray-900">Add New Career</DialogTitle>
              <DialogDescription className="text-gray-600">
                Add a new career path to practice for
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="career-title" className="text-gray-700">Career Title</Label>
                <Input
                  id="career-title"
                  placeholder="e.g., Frontend Developer"
                  value={newCareerTitle}
                  className="border-gray-300 focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setNewCareerTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="career-level" className="text-gray-700">Level</Label>
                <Select value={newCareerLevel} onValueChange={setNewCareerLevel}>
                  <SelectTrigger id="career-level" className="border-gray-300 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Junior">Junior</SelectItem>
                    <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Lead">Lead</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddCareer} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add Career
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active Career */}
      <Card className="mb-8 border-blue-500 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Active Career
            </CardTitle>
            <Badge className="bg-green-100 text-green-700 border-green-200">Current</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {careers.filter(c => c.isActive).map(career => (
            <div key={career.id}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-1 text-gray-900">{career.title}</h2>
                  <p className="text-gray-600">{career.level}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-600">Interviews</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{career.interviewsCompleted} completed</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-600">Avg Score</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{career.avgScore}%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* All Careers */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">All Careers</CardTitle>
          <CardDescription className="text-gray-600">Switch between different career paths</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {careers.map((career) => (
            <div
              key={career.id}
              className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                career.isActive ? "border-blue-500 bg-blue-50" : "hover:border-blue-500 border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                  career.isActive ? "bg-blue-600" : "bg-blue-100"
                }`}>
                  <Briefcase className={`h-6 w-6 ${
                    career.isActive ? "text-white" : "text-blue-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{career.title}</h3>
                    {career.isActive && (
                      <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{career.level}</p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-gray-600">Interviews</p>
                    <p className="font-semibold text-gray-900">{career.interviewsCompleted}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Avg Score</p>
                    <p className="font-semibold text-gray-900">{career.avgScore}%</p>
                  </div>
                </div>
              </div>
              {!career.isActive && (
                <Button variant="outline" onClick={() => handleSetActive(career.id)} className="ml-4 border-blue-300 text-blue-700 hover:bg-blue-50">
                  Set Active
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
        </div>
      </div>
    </div>
  );
}

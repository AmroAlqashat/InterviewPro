import { useUserData } from "../context/UserDataContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/AIButton";
import { Badge } from "../components/ui/badge";
import { FileText, Upload, Eye, Trash2, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function CVManager() {
  const { cvs, setActiveCv, setCvs } = useUserData();

  const handleUpload = () => {
    toast.success("CV upload feature coming soon!");
  };

  const handlePreview = (cv: any) => {
    toast.info(`Previewing ${cv.name}`);
  };

  const handleSetActive = (id: string) => {
    setActiveCv(id);
    toast.success("CV set as active");
  };

  const handleDelete = (id: string) => {
    const newCvs = cvs.filter(cv => cv.id !== id);
    setCvs(newCvs);
    toast.success("CV deleted successfully");
  };

  return (
    <div className="flex flex-col h-screen lg:h-screen flex-1 overflow-hidden bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">CV Manager</h1>
            <p className="text-gray-600">Upload, manage, and preview your resumes</p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8 border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Upload New CV</CardTitle>
              <CardDescription className="text-gray-600">Add a new resume to your collection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Upload className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Upload your CV</h3>
                    <p className="text-sm text-gray-600">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>
                  <Button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CV List */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Your CVs</CardTitle>
              <CardDescription className="text-gray-600">Manage your uploaded resumes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cvs.map((cv) => (
                <div
                  key={cv.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate text-gray-900">{cv.name}</h3>
                        {cv.isActive && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{cv.size}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-blue-600" />
                          {cv.position}
                        </span>
                        <span>•</span>
                        <span>{cv.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <Button variant="outline" size="sm" onClick={() => handlePreview(cv)} className="border-gray-300 text-gray-700 hover:bg-gray-100">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                      <Download className="h-4 w-4" />
                    </Button>
                    {!cv.isActive && (
                      <Button variant="outline" size="sm" onClick={() => handleSetActive(cv.id)} className="border-blue-300 text-blue-700 hover:bg-blue-50">
                        Set Active
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(cv.id)}
                      disabled={cv.isActive}
                      className="border-red-300 text-red-700 hover:bg-red-50 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

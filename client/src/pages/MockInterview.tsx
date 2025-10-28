import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/AIButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { MessageSquare, ArrowRight } from "lucide-react";

const interviewTypes = [
  "Technical Interview",
  "Behavioral Interview",
  "System Design Interview",
  "Coding Interview",
  "HR Interview"
];

const topics = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "System Design",
  "Data Structures",
  "Algorithms"
];

export default function MockInterview() {
  const navigate = useNavigate();
  const [interviewType, setInterviewType] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const handleStart = () => {
    if (interviewType && topic) {
      navigate("/interview-area", { state: { interviewType, topic } });
    }
  };

  return (
    <div className="flex flex-col h-screen lg:h-screen flex-1 overflow-hidden bg-gray-50">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <Card className="w-full max-w-2xl shadow-lg border-gray-200">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-900">Start Mock Interview</CardTitle>
            <CardDescription className="text-base text-gray-600">
              Choose your interview type and topic to begin practicing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Interview Type */}
            <div className="space-y-2">
              <Label htmlFor="interview-type" className="text-base font-semibold text-gray-700">
                Interview Type
              </Label>
              <Select value={interviewType} onValueChange={setInterviewType}>
                <SelectTrigger id="interview-type" className="h-12 border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select interview type" />
                </SelectTrigger>
                <SelectContent>
                  {interviewTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Topic */}
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-base font-semibold text-gray-700">
                Topic
              </Label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger id="topic" className="h-12 border-gray-300 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Start Button */}
            <Button
              onClick={handleStart}
              disabled={!interviewType || !topic}
              className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
              size="lg"
            >
              Start Interview
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Info */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700 text-center">
                The AI interviewer will ask you relevant questions based on your selections.
                Take your time to provide thoughtful answers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/AIButton";
import { Input } from "../components/ui/AIInput";
import { Badge } from "../components/ui/badge";
import { Send, Bot, User as UserIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function InterviewArea() {
  const location = useLocation();
  const { interviewType, topic } = location.state || { interviewType: "Technical Interview", topic: "JavaScript" };
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I'm your AI interviewer for today's ${interviewType} focused on ${topic}. Let's begin. Can you tell me about your experience with ${topic}?`
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's an interesting answer. Can you elaborate on how you would approach this problem?",
        "Good point. Now, let me ask you about a related concept. What are your thoughts on performance optimization?",
        "I see. Can you walk me through a specific example from your experience?",
        "Excellent. Let's dive deeper into that. What challenges did you face and how did you overcome them?",
        "Thank you for sharing. How would you explain this concept to a junior developer?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1 text-gray-900">Mock Interview Session</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {interviewType}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {topic}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-4",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
              )}
              <Card className={cn(
                "p-4 max-w-[80%] border-gray-200",
                message.role === "user" ? "bg-blue-600 text-white border-blue-600" : "bg-white"
              )}>
                <p className="text-sm leading-relaxed">{message.content}</p>
              </Card>
              {message.role === "user" && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4 justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                <Bot className="h-5 w-5 text-blue-600" />
              </div>
              <Card className="p-4 bg-white border-gray-200">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here..."
            className="flex-1 h-12 border-gray-300"
          />
          <Button onClick={handleSend} size="lg" disabled={!input.trim()} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

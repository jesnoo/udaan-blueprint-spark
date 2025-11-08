import { useState, useRef, useEffect } from "react";
import { Play, X, CheckCircle, Bot, MessageCircle, Send, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

type ChatMessage = {
  type: "ai" | "user";
  text: string;
  timestamp: string;
};

const LearningExperience = () => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "good" | "improve"; message: string } | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      type: "ai",
      text: "Hi! I'm here to help you with this lesson. Ask me anything about professional emails!",
      timestamp: "Just now",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const exampleQuestions = [
    "What if I need urgent leave?",
    "How to address my boss?",
    "Email format example?",
  ];

  const aiResponses: { [key: string]: string } = {
    "urgent": "Good question! For urgent leave, your subject should show urgency:\n\nInstead of: 'Leave Request'\nTry: 'Urgent: Sick Leave Request for Today'\n\nKey words to use:\n• Urgent\n• Today/Tomorrow\n• Emergency\n\nWant to practice writing one?",
    "boss": "In emails to your manager, use:\n\nFormal: 'Dear Mr./Ms. [Last Name]'\nSemi-formal: 'Hello [First Name]' (if company culture is casual)\n\nAlways start with a greeting and end with:\n• 'Best regards,'\n• 'Thank you,'\n• 'Sincerely,'\n\nThen your name.",
    "format": "Here's a professional email format:\n\n[Subject Line]\nClear and specific (under 10 words)\n\n[Greeting]\nDear/Hello [Name],\n\n[Opening]\nState your purpose in first line\n\n[Body]\nProvide details (2-3 short paragraphs)\n\n[Closing]\nRequest/Call to action\n\n[Sign-off]\nBest regards,\n[Your Name]",
  };

  const handleCheckAnswer = () => {
    if (!userAnswer.trim()) return;

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setFeedback({
        type: "good",
        message: `Your answer: "${userAnswer}"\n\nThis is clear and urgent. Great job! You could also add the date to be more specific: 'Emergency Leave Request - [Date]'`,
      });
    }, 1500);
  };

  const handleChatSubmit = (message?: string) => {
    const messageToSend = message || chatInput;
    if (!messageToSend.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: messageToSend, timestamp: "Just now" },
    ]);
    setChatInput("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      let response = aiResponses.default || "That's a great question! In professional emails, clarity and respect are most important. Keep your language simple, your message focused, and always proofread before sending. What specific aspect would you like to know more about?";
      
      const lowerMessage = messageToSend.toLowerCase();
      if (lowerMessage.includes("urgent") || lowerMessage.includes("leave")) {
        response = aiResponses.urgent;
      } else if (lowerMessage.includes("boss") || lowerMessage.includes("address") || lowerMessage.includes("manager")) {
        response = aiResponses.boss;
      } else if (lowerMessage.includes("format") || lowerMessage.includes("example")) {
        response = aiResponses.format;
      }

      setChatMessages((prev) => [
        ...prev,
        { type: "ai", text: response, timestamp: "Just now" },
      ]);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Same as Dashboard */}
      <div className="w-[200px] border-r bg-card flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-primary mb-8 cursor-pointer" onClick={() => navigate("/dashboard")}>
            Udaan
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Left Column - Lesson Content (60%) */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-[700px]">
            {/* Progress Header */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Module 2 → Lesson 3 of 12</p>
              <h2 className="text-2xl font-semibold mb-2">Writing Professional Emails</h2>
              <p className="text-muted-foreground mb-4">
                Master the art of clear, professional email communication
              </p>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Step 2 of 5</span>
                  <span className="font-medium">40%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-8">
              <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center group cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                  <p className="text-sm font-medium">Email ka Basic Structure</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Step 2: Writing the Subject Line</h3>
                
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="font-medium mb-3">A good subject line is:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Clear and specific</li>
                    <li>• Under 10 words</li>
                    <li>• States the purpose</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-error/10 border border-error/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <X className="w-5 h-5 text-error" />
                      <span className="font-medium text-error">Bad Example</span>
                    </div>
                    <p className="text-sm">"Hello"</p>
                  </div>

                  <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="font-medium text-success">Good Example</span>
                    </div>
                    <p className="text-sm">"Request for Meeting on Monday"</p>
                  </div>
                </div>
              </div>

              {/* Practice Exercise */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Practice Exercise</h3>
                <p className="mb-4">Write a subject line for the following situation:</p>
                
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm">
                    You need to request leave from your manager for a family emergency.
                  </p>
                </div>

                <Textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your subject line here..."
                  className="mb-4"
                  rows={2}
                  disabled={isChecking || !!feedback}
                />

                {!feedback && (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={!userAnswer.trim() || isChecking}
                    className="w-full"
                  >
                    {isChecking ? "Checking..." : "Check My Answer"}
                  </Button>
                )}

                {feedback && (
                  <div className={`border rounded-lg p-4 ${
                    feedback.type === "good" ? "bg-success/10 border-success/30" : "bg-warning/10 border-warning/30"
                  }`}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ${
                        feedback.type === "good" ? "text-success" : "text-warning"
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">
                          {feedback.type === "good" ? "Good effort!" : "Let's improve this"}
                        </h4>
                        <p className="text-sm whitespace-pre-line">{feedback.message}</p>
                        <div className="flex gap-3 mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setUserAnswer("");
                              setFeedback(null);
                            }}
                          >
                            Try Another Exercise
                          </Button>
                          <Button size="sm">Continue to Next Step</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Step
                </Button>
                <Button>
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                You can move forward anytime, but practicing helps!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - AI Chat (40%) */}
        <div className="w-[40%] border-l bg-muted/30 flex flex-col">
          <div className="p-6 border-b bg-card">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Ask AI Tutor</h3>
            </div>
            <p className="text-sm text-muted-foreground">Have a question? Ask anytime!</p>
          </div>

          <div className="flex-1 overflow-auto p-6 space-y-4">
            {chatMessages.map((message, index) => (
              <div key={index}>
                {message.type === "ai" ? (
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-card border rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {chatMessages.length === 1 && (
              <div className="flex flex-wrap gap-2 pl-10">
                {exampleQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleChatSubmit(question)}
                    className="px-3 py-2 text-xs rounded-full border bg-background hover:bg-muted transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-card border rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder="Ask a question about this lesson..."
                className="flex-1"
              />
              <Button
                onClick={() => handleChatSubmit()}
                size="icon"
                disabled={!chatInput.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;

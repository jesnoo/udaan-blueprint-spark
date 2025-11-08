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

const LearningLesson2 = () => {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "good" | "improve"; message: string } | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      type: "ai",
      text: "I'm here to help! Ask me anything about writing professional email body content.",
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
    "How long should an email be?",
    "Can I use informal language?",
    "How to close an email?",
  ];

  const aiResponses: { [key: string]: string } = {
    "length": "Keep professional emails concise:\n\n• Ideal length: 50-150 words\n• 2-3 short paragraphs maximum\n• One main point per email\n\nIf you need to share more information, consider attaching a document instead of writing a long email.\n\nRemember: Busy professionals appreciate brevity!",
    "informal": "In professional emails, maintain a respectful tone:\n\n✓ Use: 'I would like to request...'\n✗ Avoid: 'I wanna ask...'\n\n✓ Use: 'Please let me know'\n✗ Avoid: 'Tell me'\n\nYou can be friendly without being casual. Think: respectful conversation, not text message.",
    "close": "Professional email closings:\n\nFormal:\n• 'Best regards,'\n• 'Sincerely,'\n• 'Thank you,'\n\nSemi-formal:\n• 'Thanks,'\n• 'Regards,'\n• 'Warm regards,'\n\nAlways add your full name on the next line!",
  };

  const handleCheckAnswer = () => {
    if (!userAnswer.trim()) return;

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      
      const hasGreeting = userAnswer.toLowerCase().includes("dear") || userAnswer.toLowerCase().includes("hello");
      const hasClosing = userAnswer.toLowerCase().includes("regards") || userAnswer.toLowerCase().includes("thank");
      const isPolite = userAnswer.toLowerCase().includes("please") || userAnswer.toLowerCase().includes("kindly");
      
      if (hasGreeting && hasClosing && isPolite) {
        setFeedback({
          type: "good",
          message: `Your email body is well-structured!\n\nStrengths:\n✓ Professional greeting\n✓ Polite language\n✓ Proper closing\n\nTip: Keep it concise - aim for 2-3 short paragraphs maximum.`,
        });
      } else {
        setFeedback({
          type: "improve",
          message: `Good start! Here's how to improve:\n\n${!hasGreeting ? "• Add a greeting (e.g., 'Dear Sir/Madam,')\n" : ""}${!isPolite ? "• Use polite words like 'please' or 'kindly'\n" : ""}${!hasClosing ? "• Add a proper closing (e.g., 'Best regards,')\n" : ""}\nTry again with these improvements!`,
        });
      }
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
      
      let response = "That's a great question! Professional email body should be clear, concise, and respectful. Start with a greeting, state your purpose in the first line, provide necessary details in 2-3 short paragraphs, and end with a clear closing. What specific aspect would you like help with?";
      
      const lowerMessage = messageToSend.toLowerCase();
      if (lowerMessage.includes("length") || lowerMessage.includes("long") || lowerMessage.includes("short")) {
        response = aiResponses.length;
      } else if (lowerMessage.includes("informal") || lowerMessage.includes("casual") || lowerMessage.includes("friendly")) {
        response = aiResponses.informal;
      } else if (lowerMessage.includes("close") || lowerMessage.includes("closing") || lowerMessage.includes("end")) {
        response = aiResponses.close;
      }

      setChatMessages((prev) => [
        ...prev,
        { type: "ai", text: response, timestamp: "Just now" },
      ]);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
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
              <p className="text-sm text-muted-foreground mb-2">Module 2 → Lesson 4 of 12</p>
              <h2 className="text-2xl font-semibold mb-2">Writing Professional Email Body</h2>
              <p className="text-muted-foreground mb-4">
                Learn to structure clear and effective email content
              </p>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Step 3 of 5</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "60%" }} />
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
                  <p className="text-sm font-medium">Email Body Structure: The 3-Part Formula</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Step 3: The 3-Part Email Body</h3>
                
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="font-medium mb-3">Every professional email body has 3 parts:</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">1. Opening:</span>
                      <span>State your purpose clearly in the first sentence</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">2. Details:</span>
                      <span>Provide necessary information (2-3 short paragraphs)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">3. Closing:</span>
                      <span>End with a clear request or next step</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-error/10 border border-error/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <X className="w-5 h-5 text-error" />
                      <span className="font-medium text-error">Unclear</span>
                    </div>
                    <p className="text-sm">"Hi, I wanted to talk about something. Can we meet?"</p>
                  </div>

                  <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="font-medium text-success">Clear</span>
                    </div>
                    <p className="text-sm">"I would like to discuss the project timeline. Are you available tomorrow at 2 PM?"</p>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mb-6">
                  <p className="text-sm font-medium mb-2">💡 Pro Tip:</p>
                  <p className="text-sm">Busy professionals often skim emails. Put the most important information in the first line so they see it immediately!</p>
                </div>
              </div>

              {/* Practice Exercise */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Practice Exercise</h3>
                <p className="mb-4">Write a complete email body for this situation:</p>
                
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-sm">
                    You need to inform your team leader that you completed the data entry task they assigned yesterday, and you're ready for the next task.
                  </p>
                </div>

                <Textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Dear [Name],&#10;&#10;I am writing to inform you that...&#10;&#10;Best regards,&#10;[Your Name]"
                  className="mb-4 font-mono text-sm"
                  rows={8}
                  disabled={isChecking || !!feedback}
                />

                {!feedback && (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={!userAnswer.trim() || isChecking}
                    className="w-full"
                  >
                    {isChecking ? "Checking..." : "Check My Email"}
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
                          {feedback.type === "good" ? "Excellent work!" : "Let's improve this"}
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
                            Try Again
                          </Button>
                          <Button size="sm" onClick={() => navigate("/dashboard")}>
                            Continue to Dashboard
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <Button variant="outline" onClick={() => navigate("/learn/email-basics")}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Lesson
                </Button>
                <Button onClick={() => navigate("/dashboard")}>
                  Back to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                Lesson 4 completed! Continue your learning journey from the dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - AI Chat (40%) */}
        <div className="w-[40%] border-l bg-muted/30 flex flex-col">
          <div className="p-6 border-b bg-card">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Learning Assistant</h3>
            </div>
            <p className="text-sm text-muted-foreground">Ask questions about this lesson</p>
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
                placeholder="Ask about email body structure..."
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

export default LearningLesson2;

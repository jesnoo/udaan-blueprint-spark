import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

type UserData = {
  currentWork: string;
  languages: string[];
  dailyTime: string;
  desiredRole: string;
};

type Message = {
  type: "ai" | "user";
  text: string;
  chips?: string[];
  multiSelect?: boolean;
  timestamp: string;
};

const OnboardingChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [userData, setUserData] = useState<UserData>({
    currentWork: "",
    languages: [],
    dailyTime: "",
    desiredRole: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Initial AI messages
    setTimeout(() => {
      setMessages([
        {
          type: "ai",
          text: "Namaste! 👋 I'm your career coach. Let's understand where you are today and where you want to go.",
          timestamp: "Just now",
        },
      ]);
    }, 300);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "What do you currently do for work?",
          chips: ["Delivery/Driving", "Retail/Shop work", "Security/Housekeeping", "Other"],
          timestamp: "Just now",
        },
      ]);
    }, 1300);
  }, []);

  const handleChipClick = (value: string, isMultiSelect = false) => {
    if (currentStep === 0) {
      // Current work
      setUserData({ ...userData, currentWork: value });
      setMessages((prev) => [
        ...prev,
        { type: "user", text: value, timestamp: "Just now" },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "Got it. And what languages are you comfortable with?",
            chips: ["Hindi", "English (Basic)", "English (Fluent)", "Regional language"],
            multiSelect: true,
            timestamp: "Just now",
          },
        ]);
        setCurrentStep(1);
      }, 800);
    } else if (currentStep === 1) {
      // Languages (multi-select)
      const newLanguages = userData.languages.includes(value)
        ? userData.languages.filter((l) => l !== value)
        : [...userData.languages, value];

      setUserData({ ...userData, languages: newLanguages });
    } else if (currentStep === 2) {
      // Daily time
      setUserData({ ...userData, dailyTime: value });
      setMessages((prev) => [
        ...prev,
        { type: "user", text: value, timestamp: "Just now" },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "Last question - what kind of office job interests you?",
            chips: [
              "I need suggestions",
              "Customer service",
              "Data entry",
              "Sales/Business Development",
            ],
            timestamp: "Just now",
          },
        ]);
        setCurrentStep(3);
      }, 800);
    } else if (currentStep === 3) {
      // Desired role
      setUserData({ ...userData, desiredRole: value });
      setMessages((prev) => [
        ...prev,
        { type: "user", text: value, timestamp: "Just now" },
      ]);

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "Excellent! Let me analyze the best path for you...",
            timestamp: "Just now",
          },
        ]);

        setTimeout(() => {
          navigate("/analysis");
        }, 1000);
      }, 2000);
    }
  };

  const confirmLanguages = () => {
    if (userData.languages.length === 0) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userData.languages.join(", "), timestamp: "Just now" },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Perfect! How much time can you dedicate to learning daily?",
          chips: ["30 minutes", "1 hour", "2 hours"],
          timestamp: "Just now",
        },
      ]);
      setCurrentStep(2);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary">Udaan</h1>
        </div>

        {/* Messages */}
        <div className="p-6 space-y-4 pb-32">
          {messages.map((message, index) => (
            <div key={index}>
              {message.type === "ai" ? (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="bg-card border rounded-lg p-4 max-w-[85%]">
                      <p className="text-sm">{message.text}</p>
                    </div>
                    {message.chips && (
                      <div className="flex flex-wrap gap-2">
                        {message.chips.map((chip) => (
                          <button
                            key={chip}
                            onClick={() => handleChipClick(chip, message.multiSelect)}
                            className={`px-4 py-2 rounded-full text-sm border transition-all ${
                              message.multiSelect && userData.languages.includes(chip)
                                ? "bg-secondary text-secondary-foreground border-secondary"
                                : "bg-background hover:bg-muted border-border"
                            }`}
                          >
                            {message.multiSelect && userData.languages.includes(chip) && "✓ "}
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                    {message.multiSelect && userData.languages.length > 0 && (
                      <Button
                        onClick={confirmLanguages}
                        className="mt-2"
                        size="sm"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-lg p-4 max-w-[85%]">
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-secondary animate-bounce delay-100" />
                  <div className="w-2 h-2 rounded-full bg-secondary animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingChat;

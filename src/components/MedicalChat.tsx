import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Stethoscope } from "lucide-react";
import medicalAvatar from "@/assets/medical-ai-avatar.jpg";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const MedicalChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Olá! Sou seu assistente médico de IA. Posso ajudar estudantes e pesquisadores da área da saúde com informações médicas, análises de casos, orientações de estudo e muito mais. Como posso ajudá-lo hoje?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Obrigado pela sua pergunta. Como este é um protótipo, não posso fornecer respostas médicas reais. Para implementar funcionalidades de IA real, você precisaria integrar com APIs como OpenAI, Anthropic ou outros modelos especializados em medicina. Recomendo sempre consultar profissionais médicos qualificados para questões de saúde.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">MediChat AI</h1>
            <p className="text-white/90">Assistente de IA para Estudantes e Pesquisadores em Saúde</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted border-l-4 border-primary p-4 m-4 rounded-r-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Aviso:</strong> Este chatbot é uma ferramenta educacional para estudantes e pesquisadores. 
          Não substitui consulta médica profissional. Sempre consulte um profissional de saúde qualificado.
        </p>
      </div>

      {/* Chat Area */}
      <Card className="flex-1 mx-4 mb-4 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {message.type === "assistant" ? (
                    <img
                      src={medicalAvatar}
                      alt="Medical AI"
                      className="w-10 h-10 rounded-full border-2 border-primary"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <User className="w-5 h-5 text-secondary-foreground" />
                    </div>
                  )}
                </div>
                <div
                  className={`max-w-[70%] rounded-xl p-4 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground ml-12"
                      : "bg-card border shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-3">
                <img
                  src={medicalAvatar}
                  alt="Medical AI"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                />
                <div className="bg-card border shadow-sm rounded-xl p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputMessage);
            }}
            className="flex gap-2"
          >
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua pergunta médica ou de pesquisa..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="px-6"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default MedicalChat;
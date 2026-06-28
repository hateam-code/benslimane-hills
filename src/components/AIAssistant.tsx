import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Bonjour ! Je suis votre Conseiller IA Benslimane Hills. Comment puis-je vous guider dans votre projet d’acquisition ou d’investissement aujourd'hui ?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      const data = await response.json();
      
      const modelMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'model',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err) {
      console.error('AI chat error:', err);
      const errorMessage: ChatMessage = {
        id: `msg-error-${Date.now()}`,
        role: 'model',
        text: "Je rencontre actuellement une difficulté technique de connexion. N'hésitez pas à appeler notre service commercial directement au 06 10 360 360 pour toute question !",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Quels sont les prix des lots ?",
    "Proximité du Grand Stade Hassan II ?",
    "Quels loisirs sont intégrés ?",
    "Casablanca est à quelle distance ?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        
        {/* Expanded Chat Box UI */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="bg-white border border-studio-border/50 rounded-3xl shadow-2xl w-[350px] sm:w-[380px] h-[520px] flex flex-col overflow-hidden mb-4"
          >
            {/* Chat Box Header */}
            <div className="bg-studio-ink border-b border-studio-border/30 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-studio-highlight/20 border border-studio-highlight/30 flex items-center justify-center text-studio-highlight">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white leading-none">Conseiller IA</h4>
                  <span className="text-[10px] text-studio-highlight font-sans tracking-widest uppercase font-medium mt-1 inline-block">Benslimane Hills</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-studio-bg">
              {messages.map((msg) => {
                const isModel = msg.role === 'model';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isModel ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm ${
                        isModel
                          ? 'bg-white text-studio-ink border border-studio-border/50 rounded-tl-none'
                          : 'bg-studio-ink text-white font-medium rounded-tr-none'
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      <span className={`block text-[9px] mt-1.5 text-right font-mono ${
                        isModel ? 'text-studio-muted' : 'text-white/60'
                      }`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Loader Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-studio-muted border border-studio-border/50 rounded-2xl rounded-tl-none p-4 text-xs flex items-center space-x-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-studio-accent" />
                    <span>Le conseiller formule une réponse...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions helper bubbles */}
            <div className="px-5 pb-2 pt-2 bg-studio-bg flex gap-2 overflow-x-auto scrollbar-none">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputValue(q);
                  }}
                  className="bg-white hover:bg-studio-ink hover:text-white border border-studio-border text-studio-muted transition-colors text-[10px] rounded-full px-4 py-2 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Submission Bar */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-studio-border/30 bg-studio-bg flex items-center space-x-2.5">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez une question sur le projet..."
                className="flex-grow bg-white border border-studio-border text-studio-ink placeholder-studio-muted px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-studio-accent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-studio-ink hover:bg-studio-accent text-white disabled:opacity-40 transition-all flex items-center justify-center cursor-pointer flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sparkles Button trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-studio-ink text-white hover:bg-studio-accent shadow-2xl flex items-center justify-center cursor-pointer relative group"
        aria-label="Contacter le conseiller IA"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center justify-center relative"
            >
              <MessageSquare className="w-5 h-5" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-studio-highlight rounded-full border border-white flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-white animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating pulse wave visual effect */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full border border-studio-highlight/20 animate-ping opacity-75 pointer-events-none duration-2000"></span>
        )}
      </motion.button>
    </div>
  );
}

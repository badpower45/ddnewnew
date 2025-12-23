import React from 'react';
import { GlassCard } from "./ui/glass-card";
import { Search, MoreVertical, Send } from "lucide-react";

export function Messages() {
  const [selectedChat, setSelectedChat] = React.useState(0);

  const chats = [
    { id: 0, name: "Urban Eats Founder", role: "Owner", lastMsg: "The Q4 report is ready for your review.", time: "10:45 AM", unread: 2 },
    { id: 1, name: "TechFlow Support", role: "Admin", lastMsg: "Your transfer has been confirmed.", time: "Yesterday", unread: 0 },
    { id: 2, name: "Investment Manager", role: "CHANCE Team", lastMsg: "Can we schedule a call for the new deal?", time: "2 Days ago", unread: 0 },
  ];

  return (
    <div className="h-[calc(100vh-80px)] bg-[#020b1c] flex overflow-hidden">
      {/* Sidebar List */}
      <div className="w-80 border-r border-white/10 flex flex-col bg-[#010610]">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-lg font-serif font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 text-sm text-white focus:border-[#d4af37] outline-none"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${selectedChat === chat.id ? 'bg-[#d4af37]/5 border-r-2 border-r-[#d4af37]' : ''}`}
            >
              <div className="flex justify-between items-start mb-1">
                <h4 className={`font-bold text-sm ${selectedChat === chat.id ? 'text-[#d4af37]' : 'text-white'}`}>{chat.name}</h4>
                <span className="text-[10px] text-gray-500">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-400 mb-1 line-clamp-1">{chat.lastMsg}</p>
              <div className="flex justify-between items-center mt-2">
                 <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">{chat.role}</span>
                 {chat.unread > 0 && (
                   <span className="w-4 h-4 rounded-full bg-[#d4af37] text-[#020b1c] text-[10px] font-bold flex items-center justify-center">
                     {chat.unread}
                   </span>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#020b1c] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent pointer-events-none" />
        
        {/* Chat Header */}
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#020b1c]/80 backdrop-blur z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center text-[#020b1c] font-bold">
              {chats[selectedChat].name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">{chats[selectedChat].name}</h3>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto relative z-0">
          <div className="flex justify-center">
            <span className="text-[10px] text-gray-500 bg-white/5 px-3 py-1 rounded-full">Today</span>
          </div>
          
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex-shrink-0" />
             <div className="max-w-[70%]">
               <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200">
                 Hi there! The Q4 report is ready for your review. Let me know if you have any questions about the metrics.
               </div>
               <span className="text-[10px] text-gray-500 mt-1 block">10:45 AM</span>
             </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
             <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
             <div className="max-w-[70%]">
               <div className="bg-[#d4af37] rounded-2xl rounded-tr-none p-3 text-sm text-[#020b1c] font-medium shadow-lg">
                 Thanks! I'll take a look this afternoon and get back to you.
               </div>
               <span className="text-[10px] text-gray-500 mt-1 block text-right">10:48 AM</span>
             </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-[#020b1c] z-10">
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:border-[#d4af37] outline-none"
            />
            <button className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#020b1c] hover:bg-[#b5952f] transition-colors shadow-lg">
              <Send className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

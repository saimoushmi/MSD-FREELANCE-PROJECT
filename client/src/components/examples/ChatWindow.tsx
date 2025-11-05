import { useState } from 'react';
import ChatWindow from '../ChatWindow';

export default function ChatWindowExample() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi! I saw your proposal for the React project.', sender: 'them' as const, timestamp: '10:30 AM' },
    { id: '2', text: 'Yes! I\'d love to work on this project. I have experience with similar work.', sender: 'me' as const, timestamp: '10:32 AM' },
    { id: '3', text: 'Great! When can you start?', sender: 'them' as const, timestamp: '10:33 AM' },
    { id: '4', text: 'I can start next week. Would that work for you?', sender: 'me' as const, timestamp: '10:35 AM' }
  ]);

  const handleSend = (text: string) => {
    const newMsg = {
      id: Date.now().toString(),
      text,
      sender: 'me' as const,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    console.log('Sent message:', text);
  };

  return (
    <div className="h-[600px] max-w-2xl">
      <ChatWindow
        recipientName="Tech Innovations Inc"
        recipientInitials="TI"
        messages={messages}
        onSendMessage={handleSend}
      />
    </div>
  );
}

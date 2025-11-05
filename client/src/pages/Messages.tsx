import { useState } from 'react';
import MessageList from '@/components/MessageList';
import ChatWindow from '@/components/ChatWindow';

// todo: remove mock functionality
const mockMessages = [
  {
    id: '1',
    name: 'Tech Innovations Inc',
    initials: 'TI',
    lastMessage: 'Great! When can you start the project?',
    timestamp: '2m ago',
    unread: 2,
    isOnline: true
  },
  {
    id: '2',
    name: 'FitLife Studios',
    initials: 'FL',
    lastMessage: 'Thanks for the quick turnaround!',
    timestamp: '1h ago',
    unread: 0,
    isOnline: true
  },
  {
    id: '3',
    name: 'Creative Agency',
    initials: 'CA',
    lastMessage: 'Can we schedule a call tomorrow?',
    timestamp: '3h ago',
    unread: 1,
    isOnline: false
  }
];

const mockChatMessages: Record<string, any[]> = {
  '1': [
    { id: '1', text: 'Hi! I saw your proposal for the React project.', sender: 'them', timestamp: '10:30 AM' },
    { id: '2', text: 'Yes! I\'d love to work on this project.', sender: 'me', timestamp: '10:32 AM' },
    { id: '3', text: 'Great! When can you start the project?', sender: 'them', timestamp: '10:33 AM' }
  ],
  '2': [
    { id: '1', text: 'The designs look amazing!', sender: 'them', timestamp: 'Yesterday' },
    { id: '2', text: 'Thank you! Happy to help.', sender: 'me', timestamp: 'Yesterday' }
  ],
  '3': [
    { id: '1', text: 'Can we schedule a call tomorrow?', sender: 'them', timestamp: '3h ago' }
  ]
};

export default function Messages() {
  const [selectedId, setSelectedId] = useState('1');
  const [chatMessages, setChatMessages] = useState(mockChatMessages);

  const selectedMessage = mockMessages.find(m => m.id === selectedId);

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender: 'me' as const,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages(prev => ({
      ...prev,
      [selectedId]: [...(prev[selectedId] || []), newMessage]
    }));
    
    console.log('Sent message:', text);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Chat with clients and freelancers</p>
      </div>

      <div className="flex gap-6 h-[600px]">
        <div className="w-80 flex-shrink-0 overflow-y-auto">
          <MessageList
            messages={mockMessages}
            selectedId={selectedId}
            onSelectMessage={setSelectedId}
          />
        </div>

        <div className="flex-1 border rounded-lg overflow-hidden">
          {selectedMessage && (
            <ChatWindow
              recipientName={selectedMessage.name}
              recipientInitials={selectedMessage.initials}
              messages={chatMessages[selectedId] || []}
              onSendMessage={handleSendMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

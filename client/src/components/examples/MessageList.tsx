import { useState } from 'react';
import MessageList from '../MessageList';

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
    name: 'Sarah Johnson',
    initials: 'SJ',
    lastMessage: 'I\'ve sent you the updated proposal',
    timestamp: '1h ago',
    unread: 0,
    isOnline: true
  },
  {
    id: '3',
    name: 'FitLife Studios',
    initials: 'FL',
    lastMessage: 'Thanks for the quick turnaround!',
    timestamp: '3h ago',
    unread: 1,
    isOnline: false
  }
];

export default function MessageListExample() {
  const [selectedId, setSelectedId] = useState('1');
  
  return (
    <div className="p-8 max-w-md">
      <MessageList
        messages={mockMessages}
        selectedId={selectedId}
        onSelectMessage={(id) => {
          setSelectedId(id);
          console.log('Selected message:', id);
        }}
      />
    </div>
  );
}

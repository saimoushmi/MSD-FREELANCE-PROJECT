import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

interface MessageListProps {
  messages: Message[];
  selectedId?: string;
  onSelectMessage: (id: string) => void;
}

export default function MessageList({ messages, selectedId, onSelectMessage }: MessageListProps) {
  return (
    <div className="space-y-1">
      {messages.map((message) => (
        <Card
          key={message.id}
          data-testid={`message-item-${message.id}`}
          className={`p-4 cursor-pointer hover-elevate ${
            selectedId === message.id ? 'border-primary' : ''
          }`}
          onClick={() => onSelectMessage(message.id)}
        >
          <div className="flex items-start gap-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarFallback>{message.initials}</AvatarFallback>
              </Avatar>
              {message.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-semibold truncate">{message.name}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {message.timestamp}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">{message.lastMessage}</p>
            </div>
            
            {message.unread > 0 && (
              <Badge className="bg-primary text-primary-foreground ml-2">
                {message.unread}
              </Badge>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

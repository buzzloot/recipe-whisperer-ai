
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
}

interface ChatInterfaceProps {
  initialRecipe?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialRecipe }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // If there's an initial recipe, add it as a system message with recipe modification suggestions
    if (initialRecipe) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: `I've imported your recipe. How would you like to modify it? I can help with:
          
• Dietary adjustments (vegan, gluten-free, etc.)
• Ingredient substitutions
• Portion scaling
• Unit conversions

Just tell me what changes you'd like to make!`
        }
      ]);
    }
  }, [initialRecipe]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: 'user' as const
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Mock response from AI (in a real app, this would call the Gemini API)
    setIsLoading(true);
    setTimeout(() => {
      const response = mockGenerateResponse(input, initialRecipe);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant'
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const mockGenerateResponse = (prompt: string, recipe?: string): string => {
    // This is just a simple mock for the UI demo
    // In the real app, this would call the Gemini API
    
    if (prompt.toLowerCase().includes('vegan')) {
      return `Here's your recipe modified to be vegan:

### Vegan Version
I've made the following substitutions:
- <span class="recipe-highlight">Replaced butter with olive oil</span>
- <span class="recipe-highlight">Replaced eggs with flax eggs (1 tbsp ground flaxseed + 3 tbsp water per egg)</span>
- <span class="recipe-highlight">Replaced milk with almond milk</span>
- <span class="recipe-highlight">Replaced honey with maple syrup</span>

Would you like me to make any additional changes?`;
    }
    
    if (prompt.toLowerCase().includes('gluten')) {
      return `Here's your recipe modified to be gluten-free:

### Gluten-Free Version
I've made the following substitutions:
- <span class="recipe-highlight">Replaced all-purpose flour with a gluten-free flour blend</span>
- <span class="recipe-highlight">Added 1/2 tsp xanthan gum to improve texture</span>
- <span class="recipe-highlight">Replaced regular soy sauce with tamari</span>

Would you like me to make any additional changes?`;
    }
    
    if (prompt.toLowerCase().includes('double') || prompt.toLowerCase().includes('scale')) {
      return `Here's your recipe with doubled portions:

### Doubled Recipe
I've scaled all ingredients:
- <span class="recipe-highlight">2 cups flour → 4 cups flour</span>
- <span class="recipe-highlight">1 tsp salt → 2 tsp salt</span>
- <span class="recipe-highlight">3 eggs → 6 eggs</span>
- <span class="recipe-highlight">2 tbsp olive oil → 4 tbsp olive oil</span>

Note that the cooking time might need a slight adjustment. Would you like me to adjust anything else?`;
    }

    return `I can help you modify this recipe. What specific changes would you like me to make? For example:

- Convert it to be vegan or gluten-free
- Replace specific ingredients
- Scale the portions up or down
- Convert between measurement units`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    resizeTextarea();
  };

  const getSuggestions = () => {
    const suggestions = [
      "Make this recipe vegan",
      "Convert to gluten-free",
      "Double the portions",
      "Replace butter with olive oil",
      "Use coconut sugar instead of white sugar"
    ];
    return suggestions;
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] border rounded-lg bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
              "mb-4 max-w-[85%] animate-fade-in",
              message.role === 'user' ? 'ml-auto' : 'mr-auto'
            )}
          >
            <div 
              className={cn(
                "p-3 rounded-lg",
                message.role === 'user' 
                  ? 'bg-recipe-purple text-white rounded-tr-none' 
                  : 'bg-recipe-softGray text-foreground rounded-tl-none'
              )}
              dangerouslySetInnerHTML={{ __html: message.content }}
            />
          </div>
        ))}
        {isLoading && (
          <div className="flex space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-recipe-purple animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-recipe-purple animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-recipe-purple animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 0 && !initialRecipe && (
        <div className="py-12 px-4 flex flex-col items-center justify-center text-center">
          <Sparkles className="h-12 w-12 text-recipe-purple mb-3" />
          <h3 className="text-xl font-medium mb-2">Recipe Whisperer AI</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm">
            Paste a recipe or enter a URL to get started. Then ask me how you'd like to modify it!
          </p>
        </div>
      )}

      {/* Quick suggestion buttons */}
      {messages.length > 0 && messages.length < 3 && (
        <div className="px-4 py-2 border-t flex flex-wrap gap-2">
          {getSuggestions().map((suggestion, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => {
                setInput(suggestion);
                // Auto-resize the textarea after setting new input
                setTimeout(resizeTextarea, 0);
              }}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask how you want to modify the recipe..."
            className="min-h-[48px] max-h-[200px] resize-none"
            rows={1}
          />
          <Button 
            size="icon" 
            className="h-12 w-12 shrink-0 bg-recipe-purple hover:bg-recipe-purple/90"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

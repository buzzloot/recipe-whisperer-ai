
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { LinkIcon, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface RecipeInputProps {
  onSubmit: (recipeData: { type: 'text' | 'url', content: string }) => void;
}

const RecipeInput: React.FC<RecipeInputProps> = ({ onSubmit }) => {
  const [recipeText, setRecipeText] = useState('');
  const [recipeUrl, setRecipeUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'text' | 'url'>('text');

  const handleSubmit = () => {
    if (activeTab === 'text' && recipeText.trim()) {
      onSubmit({ type: 'text', content: recipeText });
    } else if (activeTab === 'url' && recipeUrl.trim()) {
      onSubmit({ type: 'url', content: recipeUrl });
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <Tabs defaultValue="text" className="w-full" onValueChange={(value) => setActiveTab(value as 'text' | 'url')}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Paste Recipe</span>
            </TabsTrigger>
            <TabsTrigger value="url" className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              <span>Recipe URL</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="mt-0">
            <Textarea 
              placeholder="Paste your recipe here..." 
              className="min-h-[200px] mb-4"
              value={recipeText}
              onChange={(e) => setRecipeText(e.target.value)}
            />
          </TabsContent>
          
          <TabsContent value="url" className="mt-0">
            <Input 
              type="url" 
              placeholder="https://example.com/recipe" 
              className="mb-4"
              value={recipeUrl}
              onChange={(e) => setRecipeUrl(e.target.value)}
            />
          </TabsContent>
          
          <Button 
            onClick={handleSubmit}
            className="w-full bg-recipe-purple hover:bg-recipe-purple/90 flex items-center gap-2"
            disabled={(activeTab === 'text' && !recipeText.trim()) || (activeTab === 'url' && !recipeUrl.trim())}
          >
            <span>Continue</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecipeInput;

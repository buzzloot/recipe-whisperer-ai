
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Bookmark, Share2 } from 'lucide-react';

interface RecipeDisplayProps {
  title: string;
  content: string;
  isModified?: boolean;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ 
  title, 
  content, 
  isModified = false 
}) => {
  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="bg-recipe-softPurple/30 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {isModified && <span className="text-xs font-medium px-2 py-1 bg-recipe-purple text-white rounded-full">Modified</span>}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
        
        <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Bookmark className="h-4 w-4" />
            <span>Save</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeDisplay;

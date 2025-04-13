
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block">Transform Your Recipes</span> 
            <span className="block text-recipe-purple">With AI Magic</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Recipe Whisperer helps you modify any recipe to fit your dietary needs, available ingredients, or desired portions—all through a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-recipe-purple hover:bg-recipe-purple/90"
            >
              <Link to="/modify" className="flex items-center gap-2">
                <span>Try it now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn more
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-recipe-purple to-recipe-peach rounded-lg blur opacity-30"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-recipe-softGray p-4 rounded-lg mb-4">
              <div className="font-mono text-sm">I'd like to make this pasta recipe vegan</div>
            </div>
            <div className="bg-recipe-softPurple/30 p-4 rounded-lg">
              <p className="font-medium mb-2">Here's your vegan pasta recipe:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Replaced parmesan with <span className="bg-recipe-softPurple/60 px-1 py-0.5 rounded">nutritional yeast</span></li>
                <li>Swapped heavy cream with <span className="bg-recipe-softPurple/60 px-1 py-0.5 rounded">cashew cream</span></li>
                <li>Used <span className="bg-recipe-softPurple/60 px-1 py-0.5 rounded">olive oil</span> instead of butter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

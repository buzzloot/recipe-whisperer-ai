
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, UtensilsCrossed, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SavedRecipes = () => {
  // Mock saved recipes data
  const savedRecipes = [
    {
      id: '1',
      title: 'Vegan Chocolate Chip Cookies',
      original: 'Classic Chocolate Chip Cookies',
      time: '30 mins',
      modifications: ['Vegan']
    },
    {
      id: '2',
      title: 'Gluten-Free Banana Bread',
      original: 'Banana Bread',
      time: '55 mins',
      modifications: ['Gluten-Free']
    },
    {
      id: '3',
      title: 'Keto Cauliflower Pizza Crust',
      original: 'Pizza Dough',
      time: '45 mins',
      modifications: ['Keto', 'Low-Carb']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-8">My Saved Recipes</h1>
        
        {savedRecipes.length === 0 ? (
          <div className="text-center py-16">
            <UtensilsCrossed className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">No saved recipes yet</h2>
            <p className="text-muted-foreground mb-6">
              Modified recipes will appear here once you save them
            </p>
            <Button asChild className="bg-recipe-purple hover:bg-recipe-purple/90">
              <Link to="/modify">Modify a Recipe</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedRecipes.map(recipe => (
              <Card key={recipe.id} className="overflow-hidden">
                <CardHeader className="bg-recipe-softPurple/30 pb-4">
                  <CardTitle className="text-lg">{recipe.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">Modified from: {recipe.original}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{recipe.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {recipe.modifications.map((mod, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-0.5 bg-recipe-purple/20 text-recipe-purple rounded-full"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="ghost" className="w-full flex items-center justify-center gap-1">
                    <span>View Recipe</span>
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedRecipes;

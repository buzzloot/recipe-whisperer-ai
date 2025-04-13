
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeInput from '../components/RecipeInput';
import ChatInterface from '../components/ChatInterface';
import RecipeDisplay from '../components/RecipeDisplay';

interface RecipeData {
  type: 'text' | 'url';
  content: string;
}

const ModifyRecipe = () => {
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [modifiedRecipe, setModifiedRecipe] = useState<string | null>(null);

  const handleRecipeSubmit = (data: RecipeData) => {
    setRecipeData(data);
    
    // In a real app, this would call an API to fetch the recipe details if URL
    // For now, we'll just use the text directly or a mock for URL
    if (data.type === 'url') {
      // Mock recipe from URL for demonstration
      const mockRecipe = `
        <h3>Classic Chocolate Chip Cookies</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>2 1/4 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1 teaspoon salt</li>
          <li>1 cup (2 sticks) butter, softened</li>
          <li>3/4 cup granulated sugar</li>
          <li>3/4 cup packed brown sugar</li>
          <li>1 teaspoon vanilla extract</li>
          <li>2 large eggs</li>
          <li>2 cups chocolate chips</li>
          <li>1 cup chopped nuts (optional)</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Preheat oven to 375° F.</li>
          <li>Combine flour, baking soda and salt in small bowl.</li>
          <li>Beat butter, granulated sugar, brown sugar and vanilla extract in large mixer bowl until creamy.</li>
          <li>Add eggs, one at a time, beating well after each addition.</li>
          <li>Gradually beat in flour mixture.</li>
          <li>Stir in chocolate chips and nuts.</li>
          <li>Drop by rounded tablespoon onto ungreased baking sheets.</li>
          <li>Bake for 9 to 11 minutes or until golden brown.</li>
          <li>Let stand for 2 minutes; remove to wire racks to cool completely.</li>
        </ol>
      `;
      setModifiedRecipe(mockRecipe);
    } else {
      setModifiedRecipe(data.content);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Modify Recipe</h1>
        
        {!recipeData ? (
          <div className="max-w-xl mx-auto">
            <RecipeInput onSubmit={handleRecipeSubmit} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 lg:order-1">
              {modifiedRecipe && (
                <RecipeDisplay
                  title="Original Recipe"
                  content={modifiedRecipe}
                />
              )}
            </div>
            <div className="order-1 lg:order-2">
              <ChatInterface initialRecipe={recipeData.content} />
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ModifyRecipe;

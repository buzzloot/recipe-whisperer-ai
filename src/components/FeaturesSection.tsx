
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Brackets, Scale, Binary, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <UtensilsCrossed className="h-12 w-12 text-recipe-purple" />,
      title: "Dietary Adjustments",
      description: "Convert any recipe to vegan, gluten-free, keto, or any other dietary preference with one click."
    },
    {
      icon: <Brackets className="h-12 w-12 text-recipe-purple" />,
      title: "Ingredient Substitutions",
      description: "Don't have an ingredient? Let AI suggest the perfect replacement based on what you have on hand."
    },
    {
      icon: <Scale className="h-12 w-12 text-recipe-purple" />,
      title: "Portion Scaling",
      description: "Easily adjust recipes to serve any number of people with automatically calculated proportions."
    },
    {
      icon: <Binary className="h-12 w-12 text-recipe-purple" />,
      title: "Unit Conversion",
      description: "Switch between metric and imperial measurements seamlessly for international cooking."
    }
  ];

  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="mb-3">Powered by AI <Sparkles className="inline h-6 w-6 text-recipe-purple" /></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recipe Whisperer uses advanced AI to understand and modify recipes according to your needs, 
          making cooking more accessible and enjoyable for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Recipe Whisperer has been a game-changer for my family with multiple food allergies. We can now enjoy our favorite recipes without worry!",
      author: "Emma W.",
      role: "Health-Conscious Mom"
    },
    {
      quote: "As a beginner cook, I love how easy it is to simplify complex recipes. The AI actually explains why certain substitutions work!",
      author: "Alex T.",
      role: "Novice Chef"
    },
    {
      quote: "I've saved so much money by adapting recipes to use ingredients I already have, instead of buying something I'll only use once.",
      author: "Michael R.",
      role: "Budget-Conscious Cook"
    }
  ];

  return (
    <section className="py-16 bg-recipe-softGray/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of home cooks who are transforming their culinary experiences with Recipe Whisperer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-recipe-purple text-recipe-purple" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;


import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        <FeaturesSection />
        
        <TestimonialSection />
        
        {/* CTA Section */}
        <section className="py-16 container text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2>Ready to Transform Your Recipes?</h2>
            <p className="text-lg text-muted-foreground">
              Start modifying recipes to match your needs and preferences today.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-recipe-purple hover:bg-recipe-purple/90"
            >
              <Link to="/modify" className="flex items-center gap-2">
                <span>Try Recipe Whisperer Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

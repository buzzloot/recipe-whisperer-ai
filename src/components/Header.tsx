
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-recipe-purple" />
          <Link to="/" className="text-xl font-bold">
            Recipe Whisperer
          </Link>
        </div>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/modify" className="text-sm font-medium hover:underline underline-offset-4">
            Modify Recipe
          </Link>
          <Link to="/saved" className="text-sm font-medium hover:underline underline-offset-4">
            My Recipes
          </Link>
        </nav>

        <div className="ml-4 flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">Hi, {user.user_metadata.username || user.email}</span>
              <Button variant="ghost" size="sm" onClick={signOut} className="flex gap-1 items-center">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-recipe-purple hover:bg-recipe-purple/90" asChild>
                <Link to="/auth?tab=register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

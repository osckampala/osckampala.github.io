import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-tekOrange">
          <h1 className="text-9xl font-bold">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-6">
          <Link to="/">
            <Button className="bg-tekOrange hover:bg-orange-600 text-white">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

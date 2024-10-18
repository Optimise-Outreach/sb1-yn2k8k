import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to the Investor Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
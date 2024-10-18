import React from 'react';
import Header from './components/Header';
import PropertyGrid from './components/PropertyGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
        <PropertyGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
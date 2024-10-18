import React, { useState, useMemo } from 'react';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';
import Filters from './Filters';

const PropertyGrid: React.FC = () => {
  const properties = [
    { 
      id: 1, 
      name: 'Luxury Apartment', 
      description: 'Modern 2-bedroom apartment in the heart of the city',
      price: 450000,
      status: 'On Market',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1200
    },
    { 
      id: 2, 
      name: 'Suburban House', 
      description: 'Spacious 4-bedroom house with a large garden',
      price: 650000,
      status: 'Sold',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2500
    },
    { 
      id: 3, 
      name: 'City Center Studio', 
      description: 'Cozy studio apartment, perfect for young professionals',
      price: 250000,
      status: 'On Market',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 500
    },
    { 
      id: 4, 
      name: 'Beachfront Villa', 
      description: 'Luxurious 5-bedroom villa with stunning ocean views',
      price: 1200000,
      status: 'On Market',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 5,
      bathrooms: 4,
      squareFootage: 3500
    },
    { 
      id: 5, 
      name: 'Mountain Retreat', 
      description: 'Charming 3-bedroom cabin with panoramic mountain views',
      price: 380000,
      status: 'Sold',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1800
    },
    { 
      id: 6, 
      name: 'Downtown Loft', 
      description: 'Stylish open-plan loft in a converted warehouse',
      price: 520000,
      status: 'On Market',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1500
    },
    { 
      id: 7, 
      name: 'Upcoming Townhouse', 
      description: 'Modern 3-bedroom townhouse in a new development',
      price: 480000,
      status: 'Pre-Market',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1700
    },
    { 
      id: 8, 
      name: 'Exclusive Penthouse', 
      description: 'Luxurious penthouse with panoramic city views',
      price: 1500000,
      status: 'Pre-Market',
      image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 3000
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [bedroomFilter, setBedroomFilter] = useState('');

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.price.toString().includes(searchTerm);
      const matchesStatus = statusFilter === '' || property.status === statusFilter;
      const matchesBedrooms = bedroomFilter === '' || property.bedrooms >= parseInt(bedroomFilter);
      
      let matchesPrice = true;
      if (priceFilter !== '') {
        const [min, max] = priceFilter === 'Below £50,000' ? [0, 50000] :
                           priceFilter === '£50,000 - £100,000' ? [50000, 100000] :
                           priceFilter === '£100,000 - £150,000' ? [100000, 150000] :
                           [150000, Infinity];
        matchesPrice = property.price >= min && property.price <= max;
      }
      
      return matchesSearch && matchesStatus && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, statusFilter, priceFilter, bedroomFilter]);

  return (
    <div>
      <div className="mb-6">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
        />
      </div>
      <Filters
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        priceFilter={priceFilter}
        onPriceChange={setPriceFilter}
        bedroomFilter={bedroomFilter}
        onBedroomChange={setBedroomFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      {filteredProperties.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No properties found matching your criteria.</p>
      )}
    </div>
  );
};

export default PropertyGrid;
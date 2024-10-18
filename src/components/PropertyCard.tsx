import React from 'react';
import { Tag, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  name: string;
  description: string;
  price: number;
  status: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  description,
  price,
  status,
  image,
  bedrooms,
  bathrooms,
  squareFootage,
}) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pre-Market':
        return 'bg-purple-100 text-purple-800';
      case 'On Market':
        return 'bg-green-100 text-green-800';
      case 'Sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
          <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusStyle(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-gray-500" />
              <span className="text-sm text-gray-600">{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-gray-500" />
              <span className="text-sm text-gray-600">{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1 text-gray-500" />
              <span className="text-sm text-gray-600">{squareFootage} sq ft</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-blue-600">£{price.toLocaleString()}</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
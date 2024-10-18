import React from 'react';

interface FiltersProps {
  statusFilter: string;
  onStatusChange: (status: string) => void;
  priceFilter: string;
  onPriceChange: (price: string) => void;
  bedroomFilter: string;
  onBedroomChange: (bedrooms: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  statusFilter,
  onStatusChange,
  priceFilter,
  onPriceChange,
  bedroomFilter,
  onBedroomChange,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="Pre-Market">Pre-Market</option>
            <option value="On Market">On Market</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="bedroom-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            id="bedroom-filter"
            value={bedroomFilter}
            onChange={(e) => onBedroomChange(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range
        </label>
        <div className="flex flex-wrap gap-2">
          {['Below £50,000', '£50,000 - £100,000', '£100,000 - £150,000', 'Above £150,000'].map((range) => (
            <button
              key={range}
              onClick={() => onPriceChange(range)}
              className={`px-3 py-1 rounded-full text-sm ${
                priceFilter === range
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
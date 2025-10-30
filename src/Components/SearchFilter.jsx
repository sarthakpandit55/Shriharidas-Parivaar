import React from 'react';

const SearchFilter = ({ searchQuery, onSearchChange, activeFilter, onFilterChange, filters }) => (
  <div className="w-full max-w-4xl mx-auto mb-8 px-4">
    <div className="flex flex-col md:flex-row gap-4 items-center mt-10">
      {/* Search Bar */}
      <div className="relative flex-1 w-full">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-amber-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filter Dropdown */}
      {filters && filters.length > 0 && (
        <div className="relative w-full md:w-48">
          <select
            value={activeFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-amber-500 appearance-none cursor-pointer"
          >
            {filters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default SearchFilter;
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import FilterSidebar from './components/FilterSidebar';
import Pagination from './components/Pagination';
import paintingsData from './data/paintingsData';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const [filters, setFilters] = useState({
    artist: '',
    location: '',
    yearFrom: '',
    yearTo: ''
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
    }
  }, [isDarkTheme]);
  
  const filteredPaintings = useMemo(() => {
    let result = [...paintingsData];
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(painting => 
        painting.title.toLowerCase().includes(term)
      );
    }
    
    if (filters.artist) {
      result = result.filter(painting => painting.artist === filters.artist);
    }
    
    if (filters.location) {
      result = result.filter(painting => painting.museum === filters.location);
    }
    
    if (filters.yearFrom) {
      const fromYear = parseInt(filters.yearFrom);
      result = result.filter(painting => painting.date >= fromYear);
    }
    if (filters.yearTo) {
      const toYear = parseInt(filters.yearTo);
      result = result.filter(painting => painting.date <= toYear);
    }
    
    return result;
  }, [searchTerm, filters]);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);
  
  const totalPages = Math.ceil(filteredPaintings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPaintings = filteredPaintings.slice(startIndex, startIndex + itemsPerPage);
  
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  
  const openFilter = () => {
    setIsFilterOpen(true);
  };
  
  const closeFilter = () => {
    setIsFilterOpen(false);
  };
  
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    closeFilter();
  };
  
  const clearFilters = () => {
    setFilters({
      artist: '',
      location: '',
      yearFrom: '',
      yearTo: ''
    });
    setSearchTerm('');
    closeFilter();
  };
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="app">
      <Header 
        isDarkTheme={isDarkTheme}
        onToggleTheme={toggleTheme}
        onSearch={handleSearch}
        onOpenFilter={openFilter}
        searchValue={searchTerm}
      />
      
      <main className="container-1440 main-content">
          <Gallery paintings={currentPaintings} searchTerm={searchTerm} />
      </main>
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onGoToPage={goToPage}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />
      
      <FilterSidebar 
        isOpen={isFilterOpen}
        onClose={closeFilter}
        onApply={applyFilters}
        onClear={clearFilters}
        currentFilters={filters}
      />
    </div>
  );
}

export default App;
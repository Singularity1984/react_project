import React, { useState, useEffect } from 'react';

const FilterSidebar = ({ isOpen, onClose, onApply, onClear, currentFilters }) => {
  const [localFilters, setLocalFilters] = useState({
    artist: '',
    location: '',
    yearFrom: '',
    yearTo: ''
  });
  
  const [accordionOpen, setAccordionOpen] = useState({
    artist: true,
    location: false,
    years: false
  });
  
  useEffect(() => {
    if (isOpen) {
      setLocalFilters({ ...currentFilters });
    }
  }, [isOpen, currentFilters]);
  
  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleArtistChange = (e) => {
    setLocalFilters(prev => ({ ...prev, artist: e.target.value }));
  };
  
  const handleLocationChange = (e) => {
    setLocalFilters(prev => ({ ...prev, location: e.target.value }));
  };
  
  const handleYearFromChange = (e) => {
    setLocalFilters(prev => ({ ...prev, yearFrom: e.target.value }));
  };
  
  const handleYearToChange = (e) => {
    setLocalFilters(prev => ({ ...prev, yearTo: e.target.value }));
  };
  
  const handleShowResults = () => {
    onApply(localFilters);
  };
  
  const handleClear = () => {
    const emptyFilters = {
      artist: '',
      location: '',
      yearFrom: '',
      yearTo: ''
    };
    setLocalFilters(emptyFilters);
    onClear();
  };
  
  return (
    <>
      <div 
        className={`filter-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      ></div>
      
      <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
        <button id="closeFilterBtn" className="close-filter-btn" onClick={onClose}>
          ×
        </button>
        
        <div className="filter-sidebar-content">
          {/* ARTIST Accordion */}
          <div className={`accordion-item ${accordionOpen.artist ? 'active' : ''}`}>
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion('artist')}
            >
              <span>ARTIST</span>
              <span className="accordion-icon">{accordionOpen.artist ? '−' : '+'}</span>
            </div>
            <div className="accordion-body">
              <select 
                id="artistSelect" 
                className="sidebar-select"
                value={localFilters.artist}
                onChange={handleArtistChange}
              >
                <option value="">Select the artist</option>
                <option value="JEAN-HONORE FRAGONARD">Jean-Honoré Fragonard</option>
                <option value="VINCENT VAN GOGH">Vincent van Gogh</option>
                <option value="THOMAS GAINSBOROUGH">Thomas Gainsborough</option>
              </select>
            </div>
          </div>
          
          {/* LOCATION Accordion */}
          <div className={`accordion-item ${accordionOpen.location ? 'active' : ''}`}>
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion('location')}
            >
              <span>LOCATION</span>
              <span className="accordion-icon">{accordionOpen.location ? '−' : '+'}</span>
            </div>
            <div className="accordion-body">
              <select 
                id="locationSelect" 
                className="sidebar-select"
                value={localFilters.location}
                onChange={handleLocationChange}
              >
                <option value="">Select the location</option>
                <option value="LOUVRE MUSEUM">Louvre Museum</option>
                <option value="MUSEUM OF MODERN ART">Museum of Modern Art</option>
                <option value="NATIONAL GALLERY">National Gallery</option>
              </select>
            </div>
          </div>
          
          {/* YEARS Accordion */}
          <div className={`accordion-item ${accordionOpen.years ? 'active' : ''}`}>
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion('years')}
            >
              <span>YEARS</span>
              <span className="accordion-icon">{accordionOpen.years ? '−' : '+'}</span>
            </div>
            <div className="accordion-body">
              <div className="sidebar-years-range">
                <input 
                  type="number" 
                  id="yearFrom" 
                  placeholder="From" 
                  className="sidebar-input"
                  value={localFilters.yearFrom}
                  onChange={handleYearFromChange}
                />
                <span className="dash">—</span>
                <input 
                  type="number" 
                  id="yearTo" 
                  placeholder="To" 
                  className="sidebar-input"
                  value={localFilters.yearTo}
                  onChange={handleYearToChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="sidebar-actions">
          <button id="showResults" className="sidebar-show-btn" onClick={handleShowResults}>
            SHOW THE RESULTS
          </button>
          <button id="clearFilters" className="sidebar-clear-btn" onClick={handleClear}>
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
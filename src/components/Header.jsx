import React from 'react';

const Header = ({ isDarkTheme, onToggleTheme, onSearch, onOpenFilter, searchValue }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };
  
  return (
    <header className="header">
      <div className="container-1440">
        <div className="header-content">
          <button 
            id="theme-toggle" 
            className="theme-btn"
            onClick={onToggleTheme}
          >
            <img 
              id="theme-icon-img" 
              src={isDarkTheme ? "/img/light_btn.png" : "/img/dark_btn.png"} 
              alt="Переключить тему" 
              className="theme-icon-img"
            />
          </button>
          
          <div className="search-wrapper">
            <div className="search-input-wrapper">
              <input 
                type="text" 
                id="search-input" 
                placeholder="Painting title" 
                className="search-input"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <div className="search-icon">
                <img src="/img/icon-1.png" alt="search" />
              </div>
            </div>
            <button 
              id="filter-btn" 
              className="filter-btn"
              onClick={onOpenFilter}
            >
              <img 
                id="filter-icon-img" 
                src={isDarkTheme ? "/img/icon_btn.png" : "/img/icon_btn_white.png"} 
                alt="Фильтр" 
                className="filter-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
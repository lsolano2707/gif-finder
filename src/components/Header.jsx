import React from 'react';

const Header = () => {
  return (
    <header className="header print:hidden">
      <nav className="flex items-center justify-between flex-wrap bg-pink-600 text-white p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Gif Finder</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

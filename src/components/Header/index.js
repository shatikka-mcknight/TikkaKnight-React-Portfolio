import React from 'react';
const Header = () => {
  
  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Link className="" to="/">
            <h1 className="title has-text-centered is-size-1 pb-3">Pick Your Poison</h1>
            </Link>
            <p className="subtitle has-text-centered">Let us pick your perfect cocktail.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
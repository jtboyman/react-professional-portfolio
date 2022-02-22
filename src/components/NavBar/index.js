import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className="container">
            <header className="row">
                <div className="col-6">
                    <h1><a href="#" onClick={() => handlePageChange('About')} className="glow">J. Boyman</a></h1>
                </div>
                <nav className="col-6 navbar">
                    <a href="#About" onClick={() => handlePageChange('About')} className="glow">
                        About Me
                    </a> |
                    <a href="#Projects" onClick={() => handlePageChange('Projects')} className="glow">
                        Projects
                    </a> |
                    <a href="#Contact" onClick={() => handlePageChange('Contact')}className="glow">
                        Contact Me
                    </a> |
                    <a href="#Resume" onClick={() => handlePageChange('Resume')} className="glow">
                        Resume
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <header>
            <div>
                <h1><a href="#" onClick={() => handlePageChange('About')}>J. Boyman</a></h1>
            </div>
            <nav>
            <a href="#About" onClick={() => handlePageChange('About')}>
                About Me
            </a> |
            <a href="#Projects" onClick={() => handlePageChange('Projects')}>
                | Projects
            </a> |
            <a href="#Contact" onClick={() => handlePageChange('Contact')}>
                | Contact Me
            </a> |
            <a href="#Resume" onClick={() => handlePageChange('Resume')}>
                | Resume
            </a>
        </nav>
        </header>
    );
}

export default NavBar;
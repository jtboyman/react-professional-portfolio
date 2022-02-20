import React from 'react';

function NavBar({currentPage, handlePageChange}) {
    return (
        <ul>
            <li>
                <a href="#About" onClick={() => handlePageChange('About')}>
                    About Me
                </a>
            </li>
            <li>
                <a href="#Projects" onClick={() => handlePageChange('Projects')}>
                    Project
                </a>
            </li>
            <li>
                <a href="#Contact" onClick={() => handlePageChange('Contact')}>
                    Contact Me
                </a>
            </li>
            <li>
                <a href="#Resume" onClick={() => handlePageChange('Resume')}>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavBar;
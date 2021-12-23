import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand' to='/'>
                    MongoDB
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/create">
                            Create Record
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet/>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const activeClassName = 'active__link';

  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.id}>
            {' '}
            <NavLink
              to={link.path}
              end
              className={({ isActive }) => (isActive ? activeClassName : null)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
		<nav>
			<ul>
				<Link style={{ textDecoration: 'none' }} className='nav-link' to="/">
					<li>Home</li>
				</Link>
				<Link style={{ textDecoration: 'none' }} className='nav-link' to="/leaderboard">
					<li >Leaderboard</li>
				</Link>
			</ul>

		</nav>
		)
};

export default Nav;

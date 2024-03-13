import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <CgMenuGridR className='icon' onClick={() => setMenuOpen(!menuOpen)} />
      <div className='nav-menu' style={{ display: menuOpen ? 'flex' : 'none' }}>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

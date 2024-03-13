import SiteBrand from './SiteBrand';
import Navbar from './nav/Navbar';

const Header = () => {
  return (
    <header className='header-container'>
      <SiteBrand />
      <Navbar />
    </header>
  );
};

export default Header;

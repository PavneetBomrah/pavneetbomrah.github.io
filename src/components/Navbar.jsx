import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = React.useState('About');
  const navItems = [
    {page:"About",path:"/"}, 
    {page:"Resume",path:"/resume"}, 
    {page:"Portfolio",path:"/portfolio"}, 
    {page:"Contact",path:"/contact"}];
    console.log(window.location.href)
  return (
    <div>
      <nav className="lg:flex lg:justify-center lg:items-center lg:gap-[40px] max-md:gap-[20px] md:gap-[50px] max:md lg:py-4 max-lg:py-7 lg:bg-[var(--jet)] max-lg:bg-[rgba(48,48,48,0.5)] backdrop-blur-[3px] lg:px-[32px] lg:rounded-bl-xl lg:rounded-tr-xl max-lg:rounded-t-4xl  max-lg:flex max-lg:justify-center text-white">
        {navItems.map((item) => (
          <Link key={item.page} to={item.path} className={`hover:text-[var(--orange-yellow-crayola)] ${active === item.page ? 'text-[var(--orange-yellow-crayola)]':'text-white'}`} onClick={()=>{setActive(item.page)}}>
            {item.page}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

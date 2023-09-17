import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1} from 'react-icons/hi';
import { AiFillCloseCircle } from "react-icons/ai";



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="bg-yellow-200 text-black p-6">
            <div className="md:hidden duration-1000 text-xl" onClick={() => setOpen(!open)}>
                {
                  open === true ? <AiFillCloseCircle></AiFillCloseCircle> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                }
            
            </div>
            <ul className={`md:flex absolute  bg-yellow-200 px-6 md:static duration-1000 text-black ${open ? 'top-16' : '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import LogoSharkTCG from '../NavBar/assets/logo/LogoSharkTCG.png';
import '../NavBar/NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <img src={LogoSharkTCG} alt="Logo Shark TCG" />
            </Link>
            <div className="Categories">
                <NavLink to={`/category/expansion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Expansion </NavLink>
                <NavLink to={`/category/caja`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Caja </NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Accesorios </NavLink>
                <NavLink to={`/category/lata`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Lata </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
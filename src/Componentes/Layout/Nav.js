import {NavLink} from 'react-router-dom'
import './styles/Layout/Nav.css';
const Nav = (props) => {
    return (
        <nav className='Nav'>
            
                <ul className='nav__ul'>
                    <li className='Nav__li'><NavLink to="/" className={({isActive}) => isActive ? 'activo' : 
                    undefined}>Home</NavLink></li>
                    <li className='Nav__li'><NavLink to="/Nosotros" className={({isActive}) => isActive ? 'activo' : 
                    undefined}>Nosotros</NavLink></li>
                    <li className='Nav__li'><NavLink to="/Novedades" className={({isActive}) => isActive ? 'activo' : 
                    undefined}>Novedades</NavLink></li>
                    <li className='Nav__li'><NavLink to="/Contacto" className={({isActive}) => isActive ? 'activo' : 
                    undefined}>Contacto</NavLink></li>
                </ul>
            
        </nav>
    )
}

export default Nav;

import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/about">About</NavLink>
                    <NavLink className='nav-link' to="/login">Login</NavLink>
                </div>
                </div>
            </div>
        </nav>
        
    </>
  )
}

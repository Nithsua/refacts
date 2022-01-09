import logo from '../images/react-icon-small.png';

export default function NavBar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={ logo }/>
            <h3>ReactFacts</h3>
        </nav>
    )
}
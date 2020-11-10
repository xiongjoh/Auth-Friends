import { Link, useHistory } from "react-router-dom";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    history.push('/login')
  };

  return (
    <header>
      <nav>
        <ul>
          {isLoggedIn ? console.log('Logged IN') : console.log('Not Logged IN')}
          {isLoggedIn 
          ? (<li>
            <Link to="#" onClick={logout}>
              Logout
            </Link>
          </li>) 
          : (<li>
            <Link to="/login">Login</Link>
          </li>)}
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

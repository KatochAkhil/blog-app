import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Icon } from "@iconify/react";
import { getuser } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const getUser = useSelector((state) => state.data);

  useEffect(() => {
    if (user) {
      dispatch(getuser(user?.id));
    }
  }, [user?.id]);

  return (
    <div className="myNavbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/blogs"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blogs
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/special">
                  Special
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/create">
                  New
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/authors">
                  Authors
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search ..."
                aria-label="Search"
              />
              {!user ? (
                <>
                  <Link to="/login">
                    <Icon
                      icon="material-symbols:account-circle-outline"
                      width="30"
                      color="black"
                    />
                  </Link>
                  <Link to="/register">
                    <Icon icon="mdi:register" width="30" color="black" />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/author">
                    <Icon icon="mdi:user-box" width="30" color="black" />
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => {
                      localStorage.removeItem("user");
                    }}
                  >
                    <Icon icon="basil:logout-solid" width="30" color="black" />
                  </Link>
                </>
              )}
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

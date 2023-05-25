import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PrimaryRightArrow from "../assets/images/primary-right-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import FormModal from "../pages/login/FormModal";
import ForgotModal from "../pages/login/ForgotPassword";
import SignupModal from "../pages/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { handleActiveTab } from "../redux/reducers/navigationSlice";
import "./style.scss";
import "../pages/login/style.scss";
import CartIcon from "./../assets/images/cart.svg";
import Notification from "./../assets/images/notification.svg";
import UserProfileIcon from "./../assets/images/user-profile.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { logout } from "./../redux/reducers/loginSlice";
import dropdownOptions from "./../assets/jsonData/productCatalog.json";


function Header() {
  const navigateData = useNavigate();
  const dispatch = useDispatch();
  const selectorData = useSelector(
    (state) => state.rootReducer.navigationSlice.activeTab
  );
  const locationData = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showResetModal, setResetShowModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const selector = useSelector((state) => state.rootReducer.cartSlice);

  useEffect(() => {
    switch (locationData.pathname) {
      case "/explore-catalouge":
        dispatch(handleActiveTab("exploreCatalouge"));
        break;
      case "/examFactor":
        dispatch(handleActiveTab("examfactor"));
        break;
      case "/":
        if (locationData.hash === "#contactUS") {
          dispatch(handleActiveTab("contact"));
        } else if (locationData.hash === "#aboutUS") {
          dispatch(handleActiveTab("about"));
        } else {
          dispatch(handleActiveTab("home"));
        }
        break;
        default:
    }
  }, [locationData,dispatch]);

  const loggedOut = (e) => {
    // e.preventDefault();
    dispatch(logout(null));
  };

  function handleMouseAction(event) {
    const windowHeight = window.innerHeight;
    const currentElm = event.currentTarget;
    const domElm = currentElm.querySelector(".dropdown-submenu");
    const mouseYPosition = currentElm.getBoundingClientRect().y;
    const elmHeight = domElm ? domElm.offsetHeight : 0;
    if (elmHeight + mouseYPosition > windowHeight) {
      domElm.style.top = windowHeight - (elmHeight + mouseYPosition + 5) + "px";
    }
    // console.log(event.target.id);
  }

  function handleNavigation(itemData, url) {
    return (
      <ul className="dropdown-menu dropdown-submenu list-group">
        {itemData.map((item) => (
          <li
            onMouseEnter={(event) => handleMouseAction(event)}
            onClick={(event) =>
              handleMenuClick(event, `/catalogue/${url}/${item.name}`)
            }
            key={item.id}
            className="d-flex border-bottom-0 align-items-center list-item list-group-item"
          >
            <span className="dark-black">
              {item.name.replace(/&frasl;/gim, "/")}
            </span>
            {item && item.options && item.options.length > 0 ? (
              <span className="dark-black ms-auto ps-3">&gt;</span>
            ) : null}
            {item.options.length > 0
              ? handleNavigation(item.options, url + "/" + item.name)
              : null}
          </li>
        ))}
      </ul>
    );
  }

  function handleMenuClick(event, url) {
    navigateData(url);
    document.querySelector(".dropdown-menu.show").classList.remove("show");
    dispatch(handleActiveTab("exploreCatalouge"));
    event.stopPropagation();
  }
  return (
    <Navbar bg="white" expand="lg" fixed="top" onSelect={(e) => console.log(e)}>
      <Container className="header-container">
        <Navbar.Brand>
          <Link onClick={() => dispatch(handleActiveTab("home"))} to="/ecom">
            {/* <img
              className="brand-logo"
              src={`${ExamFactorLogo}`}
              alt="Examfactor logo"
            /> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="toggle-dropdown-elm bg-white p-3 rounded"
        >
          <Nav className="ms-auto align-items-lg-center w-100 justify-content-evenly">
            <Link
              to="/ecom"
              className={`${selectorData === "home" && "active"}`}
              onClick={() => dispatch(handleActiveTab("home"))}
            >
              Home
            </Link>
            <NavDropdown
              title="Explore catalogue"
              id="basic-nav-dropdown"
              className={`${selectorData === "exploreCatalouge" && "active"}`}
              onSelect={() => dispatch(handleActiveTab("exploreCatalouge"))}
            >
              {dropdownOptions.map((item) => (
                <NavDropdown.Item
                  onMouseEnter={(event) => handleMouseAction(event)}
                  onClick={() =>
                    item.options.length === 0
                      ? navigateData("/explore-catalogue")
                      : navigateData(`/catalogue/${item.id}`)
                  }
                  className="d-flex align-items-center"
                  key={item.id}
                  href="#"
                >
                  <span>{item.name.replace(/&frasl;/gim, "/")}</span>
                  {item.options.length > 0 ? (
                    <span className="ps-3 ms-auto">&gt;</span>
                  ) : null}

                  {item.options.length > 0
                    ? handleNavigation(item.options, item.id)
                    : null}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Link
              to="/examFactor"
              onClick={() => dispatch(handleActiveTab("examfactor"))}
              className={`${selectorData === "examfactor" && "active"}`}
            >
              Why ExamFactor?
            </Link>
            <HashLink
              to="/#aboutUS"
              className={`${selectorData === "about" && "active"}`}
              onClick={() => dispatch(handleActiveTab("about"))}
            >
              About us
            </HashLink>
            <HashLink
              // to="/contact-us"
              to="/#contactUS"
              className={`${selectorData === "contact" && "active"}`}
              onClick={() => dispatch(handleActiveTab("contact"))}
            >
              Contact us
            </HashLink>
          </Nav>
          {useSelector(state => state.rootReducer.userReducer.user) == null ?
            <button
              className='h-52 btn btn-outline-primary font-weight-700 w-135'
              onClick={() => setShowModal(true)}
            >
              Login <img src={`${RightArrow}`} className="right-arrow arrow-elm" alt="right arrow" />
              <img src={`${PrimaryRightArrow}`} className="primary-arrow arrow-elm" alt="right arrow" />
            </button>
            :
            (
              <div className="header-right-icons">
                <button className="btn" onClick={() => navigateData("/cart")}>
                  <img src={CartIcon} alt="cart" />
                  <span className="badge header-badge">
                    {" "}
                    {selector.cartItems.length}{" "}
                  </span>
                </button>

                <div>
                  <img
                    src={Notification}
                    alt="Notification"
                    className="notification-icon"
                  />
                  <span className="badge header-badge"> 1 </span>
                </div>

                <Dropdown className="user-profile-dropdown">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="btn-outline-primary"
                  >
                    <img src={UserProfileIcon} alt="User Profile" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                      loggedOut()
                      navigateData("/ecom")
                    }}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )
          }
        </Navbar.Collapse>
      </Container>


      {showModal && <FormModal
        close={() => {
          setShowModal(false);
        }}
        show={showModal}
        showReset={() => setResetShowModal(true)}
        signup={() => setShowSignupModal(true)}
      />}
      {showResetModal && <ForgotModal
        close={() => {
          setResetShowModal(false);
        }}
        show={showResetModal}
        showLogin={() => setShowModal(true)}
      />}
      {showSignupModal && <SignupModal
        close={() => {
          setShowSignupModal(false);
        }}
        show={showSignupModal}
        showLogin={() => setShowModal(true)}
      />}
    </Navbar>
  );
}

export default React.memo(Header);

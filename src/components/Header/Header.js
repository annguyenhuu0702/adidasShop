import React from "react";
import "./../../assets/css/base.css";
import "./../../assets/css/header.css";
import { Route, Link } from "react-router-dom";

function Header() {
  const menus = [
    {
      name: "TRANG CHỦ",
      to: "/",
      exact: true,
    },
    {
      name: "NAM",
      to: "/nam",
      exact: false,
    },
    {
      name: "NỮ",
      to: "/nu",
      exact: false,
    },
    {
      name: "TRẺ EM",
      to: "/tre-em",
      exact: false,
    },
  ];

  const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          return (
            <div className={`menu-navigation ${match ? "active" : ""}`}>
              <Link to={to}>{lable}</Link>
            </div>
          );
        }}
      />
    );
  };

  const showMenu = () => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            lable={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header__top">
              <div className="top__menu">
                <ul>
                  <li>
                    <a href=" ">Trợ giúp</a>
                  </li>
                  <li>
                    <a href=" ">Trình theo dõi đơn hàng</a>
                  </li>
                  <li>
                    <a href=" ">Đăng ký</a>
                  </li>
                  <li>
                    <a href=" ">Đăng nhập</a>
                  </li>
                  <li className="image-flag">
                    <img
                      src="https://adl-foundation.adidas.com/flags/1-0-0/vn.svg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__bottom">
              <div className="header__bottom-wrap">
                <Link to="/" className="bottom__logo">
                  <img
                    src="https://www.adidas.com.vn/glass/react/fc0a64b/assets/img/icon-adidas-logo.svg"
                    alt=""
                  />
                </Link>
                <div className="bottom__menu">
                  {/* <div className="menu-navigation active">
                    <a href=" ">Trang chủ</a>
                  </div>
                  <div className="menu-navigation">
                    <a href=" ">Nam</a>
                  </div>
                  <div className="menu-navigation">
                    <a href=" ">Nữ</a>
                  </div>
                  <div className="menu-navigation">
                    <a href=" ">Trẻ em</a>
                  </div> */}
                  {showMenu(menus)}
                </div>
                <div className="bottom__right-side-menu">
                  <div className="search__input-wrapper">
                    <form>
                      <input className="form-control" placeholder="Tìm kiếm" />
                      <span className="search__input-icon">
                        <i className="far fa-search"></i>
                      </span>
                    </form>
                  </div>
                  <div className="side-menu__cart">
                    <i className="far fa-shopping-cart"></i>
                    <div className="side-menu__cart-qtt">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

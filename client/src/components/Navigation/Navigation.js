import { Link } from "react-router-dom";
import { Menu, MenuToggle } from "./Navigation.styled";

export const Navigation = () => (
  <MenuToggle id="menuToggle">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <Menu id="menu">
      <Link to="/">
        <li>Main</li>
      </Link>
      <Link to="/sp500">S&P 500</Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </Menu>
  </MenuToggle>
);
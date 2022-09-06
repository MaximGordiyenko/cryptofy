import styled from 'styled-components';

export const MenuToggle = styled.nav`
  display: block;
  position: relative;
  top: 15px;
  left: 10px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  
  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
    
    &:hover {
      color: tomato;
    }
  }
  
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }
  
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }
  
  span:first-child {
    transform-origin: 0% 0%;
  }
  
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  
  input:checked ~ ul {
    transform: none;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.9;
  margin: -100px 0 0 -50px;
  padding: 125px 50px 50px 50px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  
  li {
    padding: 10px 0;
    font-size: 22px;
  }
`;
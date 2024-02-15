import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
  background-color: black;
  height:80px;

  color: #fff;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position:stiky;
  top:0;
  z-index:10;


   @media screen and (max-width: 980px) {
    transition: 0.8s all ease;
    

`;

export const Navcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 800px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Logo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursur: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 980px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenue = styled.ul`
color:red;
  display: flex;
  align-item:center;
  list-style:none;
  text-align:center;
  margin-right:22px;
  height:440px;
  background:transparent;
  

  @media screen and (max-width: 980px) {
    display:none;

  }
  `

  export const Navitem = styled.li`
  height:100%;
  // background:blue;
 

  `
  export const NavLinks =  styled(LinkS)`
  color:yellow;
  display:flex;
  align-item:center;
  text-decoration:none;
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  font-size: 1.5rem;
  margin-top:402px;


  &.active{
    border-bottom: 3px solid red;
  }
  // @media screen and (max-width: 980px) {
  //   display:none;
  // }

  `

 

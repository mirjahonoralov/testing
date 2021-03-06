import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "../Container";
import { Links, Wrapper, Country, Countries, Nav } from "./style";
import { MdTravelExplore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getAllPlaces, setSelectedCountry } from "../../store/slices/mainSlice";
import { CountriesData } from "../../store/data/CountriesData";

const Navbar = () => {
  const dispatch = useDispatch();

  const selectCountry = (country) => {
    dispatch(setSelectedCountry(country.regions));
    dispatch(getAllPlaces(country.places));
  };

  return (
    // <Nav>
    <div style={{ height: "100vh" }}>
      <Container>
        <Wrapper>
          <Nav>
            <span>
              <MdTravelExplore />
              Tourism
            </span>
            <Links>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </Links>
            <select name="language">
              <option value="uzb">uzb</option>
              <option value="rus">rus</option>
              <option value="eng">eng</option>
            </select>
          </Nav>

          <Countries>
            {CountriesData.map((country, id) => (
              <Country onClick={() => selectCountry(country)} key={id}>
                {country.countryName}
              </Country>
            ))}
          </Countries>
        </Wrapper>
      </Container>

      <Outlet />
    </div>
    // </Nav>
  );
};

export default Navbar;

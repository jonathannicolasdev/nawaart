import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Navigation = styled.nav`
  font-size: 1.5em;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  li {
    margin: 0 10px;
  }
`;

function App() {
  return (
    <div>
      <Header>
        <img src="/nawaart-logo.svg" alt="nawaart" />
        <Navigation>
          <Links>
            <li>Artists</li>
            <li>Artworks</li>
            <li>Stories</li>
            <li>About</li>
          </Links>
        </Navigation>
      </Header>
      <div>
        <h2>Billy Childish</h2>
        <p>
          remember all the / high and exalted things remember all the low / and
          broken things
        </p>
        <p>New York, W 22nd Street</p>
        <p>January 23 - March 21, 2020</p>
      </div>
      <main>
        <h1>Stories</h1>
        <div>
          <img src="/assets/story.jpg" alt="Home at The Peninsula New York" />
          <h3>Home at The Peninsula New York</h3>
          <p>Through March 2020</p>
          <p>
            Lehmann Maupin presents an exhibition featuring Ashley Bickerton,
            Heidi Bucher, Do Ho Suh, Catherine Opie, and Angel Otero that
            showcases works addressing themes of identity, heritage, and
            community.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

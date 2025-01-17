import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>
        <img src="img/fleamarket.png" />
      </div>
      <div>안녕하세요</div>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 1200px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 20px;
  & > div > img {
    width: 80px;
    height: 80px;
  }
`;

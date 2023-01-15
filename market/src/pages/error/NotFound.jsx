import React from "react";
import styled from "styled-components";
import { gTheme } from "../../theme/globalTheme";
import Layout from "../../components/Layout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <SContainer>
        <STitle>404</STitle>
        <SSubTitle>요청된 페이지를 찾을 수 없습니다. ⚠️</SSubTitle>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: gTheme.color.primary,
            fontSize: 16,
            fontWeight: 700,
          }}
          onClick={handleBackToHome}
        >
          홈으로
        </Button>
      </SContainer>
    </Layout>
  );
};

export default NotFound;

/* Style */
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`;

const STitle = styled.p`
  font-family: "Gowun Dodum", sans-serif;
  font-size: 64px;
  font-weight: 900;
  text-align: center;
  color: rgba(76, 78, 100, 0.87);
  width: 100%;
`;

const SSubTitle = styled.p`
  margin-top: -50px;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: rgba(76, 78, 100, 0.87);
  width: 100%;
`;

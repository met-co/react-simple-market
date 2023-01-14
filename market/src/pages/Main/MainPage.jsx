import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <button onClick={() => navigate("/signin")}>로그인</button>
        <button onClick={() => navigate("/product-registration")}>
          상품등록
        </button>
      </div>
    </Layout>
  );
};

export default MainPage;

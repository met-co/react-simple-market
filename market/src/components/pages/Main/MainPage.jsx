import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/signin")}>로그인</button>
      <button onClick={() => navigate("/product-registration")}>
        상품등록
      </button>
    </div>
  );
};

export default MainPage;

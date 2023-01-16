import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.post_list);
  console.log(posts);

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

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const navigate = useNavigate();

  //   onClick={() => {
  //     navigate(`/guestbooks/${guestbook.id}`);
  //   }}

  // 콘솔 로그 post
  // console.log(post);

  // const productData = useSelector((state) => state.file.fileData);
  // const [imageURL, setImageURL] = useState("");

  // useEffect(() => {
  //   setImageURL(productData.url);
  // }, [productData]);

  return (
    <StLink to={`/product-detail/${post.id}`} key={post.id}>
      <StCard>
        <StImgContainer>
          <img src={post.imageUrl} />
        </StImgContainer>
        <StTextContainer>
          <div>{post.name}</div>
          <div>
            {post.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
          {/* <div>댓글 갯수</div> */}
        </StTextContainer>
      </StCard>
    </StLink>
  );
};

export default Card;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StCard = styled.div`
  color: #333333;
  width: 240px;
  height: 360px;
`;

const StImgContainer = styled.div`
  width: 90%;
  height: 230px;
  margin: 0 auto;
  border-radius: 15px;
  & > img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const StTextContainer = styled.div`
  padding-left: 15px;
  & > div:first-child {
    margin: 10px 0px 5px 0px;
    font-size: 20px;
  }
  & > div:nth-child(2) {
    font-weight: bold;
    margin: 5px 0px;
  }
  & > div:nth-child(3) {
    color: #868e96;
  }
`;

import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import Header from "../../components/Header";
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const ProductRegistration = () => {
  const navigate = useNavigate();

    const [age, setAge] = useState('');

    const handleChange = (e) => {
      setAge(e.target.value)};

  return (
    <Layout>
      <Header />
        {/* 전체를 감싸는 div */}
        <StWrap>
          {/* input 구역 div */}
          <StInputBox>
            <div>상품명</div>
            <TextField id="standard-basic" label="" variant="standard" />
            <div>상품 설명</div>
            <TextField id="standard-basic" label="" variant="standard" />
            <div>가격</div>
            <TextField id="standard-basic" label="" variant="standard" />


            {/* select box */}
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Button variant="outlined">Outlined</Button>
          </StInputBox>
          {/* 이미지 등록 구역 div */}
          <StImgBox>
            <div>이미지 구역
              안녕하세요. 상품등록합니다
              반갑습니다. 안녕하세요.
              FLEA MARKET
              ㅇㄹㄴㅁ
            </div>
            <Button variant="outlined">Outlined</Button>
          </StImgBox>
        </StWrap>
      </Layout>
    );
};

export default ProductRegistration;

const StWrap = styled.div`
  color : black;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* gap : 30px; */
  height: 700px;
`;

const StInputBox = styled.div`
  color : black;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StImgBox = styled.div`
width: 50%;
 & > div {
  background-color: gray;
  height: 150px;
 }
`;
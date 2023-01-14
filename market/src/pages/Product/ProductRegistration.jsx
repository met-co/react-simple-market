import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import Header from "../../components/Header";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// import { gTheme } from "../../theme/globalTheme";
import { FormControl } from "@mui/material";


const ProductRegistration = () => {
  const navigate = useNavigate();

    const [age, setAge] = useState('');

    const handleChange = (e) => {
      setAge(e.target.value)};

  return (
    <Layout>
      <Header />
       
         
        <Stdiv>
          <Button variant="outlined">이 전 으 로</Button>
        </Stdiv>
        
        {/* 전체를 감싸는 div */}
        <StContainer>
          <StForm>
          {/* input 구역 div */}
          <StInputBox>
            {/* <StInputdiv> */}
            
            
              {/* <span>상 품 명</span> */}
              <TextField id="standard-basic" label="상 품 명" variant="standard" />
            
              {/* <span>가 격</span> */}
              <TextField id="standard-basic" label="가 격" variant="standard" />
          
             
            

            
              
              {/* select box */}
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">카 테 고 리</InputLabel>
          
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="category"
                
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            

              {/* <div>상 품 설 명</div> */}
              <Textarea
                name="content"
                rows="10"
                maxLength={200}
                // onChange={onChangeHandler}
                placeholder="상품 설명을 입력해주세요. (200자 이내)"
                // value={guestbook.content}
              />
            
              <Button variant="outlined">Outlined</Button>
              {/* </StInputdiv> */}
          </StInputBox>


          {/* 이미지 등록 구역 div */}
          <StImgBox>
            <div>이미지 구역</div>
            <div>
            <Button variant="outlined">이미지 저장</Button>
            <Button variant="outlined">이미지 삭제</Button>
            </div>
          </StImgBox>
          </StForm>
        </StContainer>
      </Layout>
    );
};

export default ProductRegistration;

const StContainer = styled.div`
  color : black;
  height: 100%;
`;

const StForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap : 60px;
  padding: 10px;
`;

const StInputBox = styled.div`
  color : #333333;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
  padding: 0px 40px 0px 40px;
  & > div{
    padding-bottom: 20px;
    width: 100%;
  }

  & > p {
    margin: 0;
  }
`;

const StImgBox = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 & > div:first-child {
  background-color: lightblue;
  width: 60%;
  height: 370px;
  margin-top: 40px;
  
 }
 & > div:nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  
 }
 & > div:nth-child(2) button {
 }
`;

const Stdiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 110px 0px 0px;
`;

// const StInputdiv = styled.div`
//   border: 1px solid black;
//   margin: 30px;
//   & > div {
//     padding-top: 20px;
//   }
//   padding-left: 60px;
// `;

const Textarea = styled.textarea`
  width: 95%;
  /* border: 1px solid #004A7C; */
  padding: 12px;
  /* margin-top: 30px; */
  margin-bottom: 40px;
  font-size: 14px;
`;



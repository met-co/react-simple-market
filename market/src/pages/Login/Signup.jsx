import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { gTheme } from "../../theme/globalTheme";

import { TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Signup = () => {
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState("/img/default_profile.png");

  const handleSignup = (data) => {
    console.log(data);
  };
  const handleError = (error) => {
    console.log(error);
  };
  const handleSelectedImage = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);

    // const response = await apiClient.post("~~", formData)
    // setImageURL(
    //   "https://cdn.comento.kr/images/edu/banner-4.jpg?s=978x780&q=75"
    // );
  };

  return (
    <SWrapper>
      <SCard>
        <STitleContainer>
          <STitle>회원가입</STitle>
          <Button component="label">
            <Avatar src={imageURL} sx={{ width: 80, height: 80 }} />
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleSelectedImage}
            />
          </Button>
        </STitleContainer>
        <form onSubmit={handleSubmit(handleSignup, handleError)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            autoFocus
            {...register("id", {
              minLength: { value: 5, message: "테스트" },
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password-confirm"
            label="비밀번호 재확인"
            type="password"
            id="password-confirm"
            autoComplete="current-password"
            {...register("password-confirm", {})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="nickname"
            label="닉네임"
            type="text"
            id="nickname"
            autoComplete="nickname"
            {...register("nickname", {})}
          />
          <SButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: gTheme.color.primary,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            회원가입
          </SButton>
          <SSignupContainer>
            <SSignupText>이미 계정이 있나요?</SSignupText>
            <Link to={"/signin"}>로그인</Link>
          </SSignupContainer>
        </form>
      </SCard>
    </SWrapper>
  );
};

export default Signup;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  border-radius: 10px;
  padding: 48px 28px 36px 28px;
  box-shadow: 0px 2px 10px 0px rgba(76, 78, 100, 0.22);
`;

const STitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const STitle = styled.p`
  text-align: center;
  font-size: 24px;
`;

const SButton = styled(Button)`
  height: 44px;
  font-size: 100;
  font-weight: 600;
`;

const SSignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SSignupText = styled.p`
  margin-right: 6px;
  color: gray;
`;

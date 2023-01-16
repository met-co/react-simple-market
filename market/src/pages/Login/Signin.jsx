import React from "react";
import { gTheme } from "../../theme/globalTheme";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Signin = () => {
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm();

  console.log(watch(), "watch");

  const handleLogin = (data) => {
    console.log(data);
  };
  const handleError = (error) => {
    console.log(error);
  };

  return (
    <SWrapper>
      <SCard>
        <STitleContainer>
          <Avatar sx={{ bgcolor: gTheme.color.primary }}>
            <LockOutlinedIcon />
          </Avatar>
          <STitle>로그인</STitle>
        </STitleContainer>
        <form onSubmit={handleSubmit(handleLogin, handleError)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            autoFocus
            {...register("signin-id", {
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
            로그인
          </SButton>
          <SSignupContainer>
            <SSignupText>아직 회원이 아니세요?</SSignupText>
            <Link to={"/signup"}>회원가입</Link>
          </SSignupContainer>
        </form>
      </SCard>
    </SWrapper>
  );
};

export default Signin;

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

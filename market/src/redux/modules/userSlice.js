import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../shared/api/api";
import { authAPI } from "../../shared/api/authAPI";

export const actionType = {
  user: {
    POST_SIGNUP: "POST_SIGNUP",
    POST_SIGNIN: "POST_SIGNIN",
    GET_USER_INFO: "GET_USER_INFO",
    DELETE_USER: "DELETE_USER",
    PUT_CHANGE_PASSWORD: "PUT_CHANGE_PASSWORD",
  },
};

const initialState = {
  isLoading: false,
  error: null,
};

/* 회원가입 */
export const __signup = createAsyncThunk(
  actionType.user.POST_SIGNUP,
  async (user, thunkAPI) => {
    try {
      // console.log("111", client);
      const result = await authAPI.post(
        process.env.REACT_APP_BASE_URL + "/api/user/signup",
        {
          username: "buzz111111",
          password: "qwer1234",
          passwordCheck: "qwer1234",
          nickname: "test",
          imageResponseDto: {},
        }
      );

      console.log("RESULT!!:", result);
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* 로그인 */
export const __signin = createAsyncThunk(
  actionType.user.POST_SIGNIN,
  async (user, thunkAPI) => {
    try {
      const result = await client.post(
        process.env.REACT_APP_BASE_URL + "/api/user/login",
        user
      );
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* 로그인 유저 이름 반환 */
export const __userInfo = createAsyncThunk(
  actionType.user.GET_USER_INFO,
  async (_, thunkAPI) => {
    try {
      const result = await client.get(
        process.env.REACT_APP_BASE_URL + "/api/user/info"
      );
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 회원가입
      .addCase(__signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signup.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action", action);
      })
      .addCase(__signup.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      })
      // 로그인
      .addCase(__signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signin.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // 유저 정보
      .addCase(__userInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__userInfo.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(__userInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;

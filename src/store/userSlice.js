import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {
        name: "",
        age: 0,
        email: "",
        login: false,
    },
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState, //初始狀態
    reducers: { //改變state的fuctions
        setLogin(state, action) { //自帶兩參數 action:依靠外部參數
            // console.log(action.payload);
            const { name, age, email } = action.payload;
            state.profile = {
                name,
                age,
                email,
                login: true,
            };
        },
        setLogout(state, action) {
            state.profile = { ...initialState.profile };
        }
    }
})

// 解構取得functions
export const { setLogin, setLogout } = userSlice.actions;

// reducer
export default userSlice.reducer;
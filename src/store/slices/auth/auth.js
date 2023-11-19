import {createSlice} from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {firebaseAuth} from "../../../firebase/firebase";

const initialState = {
  user: {},
  error: {
    errorCode: '',
    errorMessage: ''
  }
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
     registerUser:  (state=initialState, action) => {
      const {email, password } = action.payload;
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          state.user = userCredential.user;
        })
        .catch((error) => {
          state.error.errorCode = error.code;
          state.error.errorMessage = error.message;
        });
    },
    resetRegisterError: (state=initialState, action) => {
       state.error = {errorCode: '', errorMessage: ''};
    }
  }
})

export const {registerUser, resetRegisterError} = authSlice.actions;

export default authSlice;

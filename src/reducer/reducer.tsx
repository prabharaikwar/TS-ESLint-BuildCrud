import { createSlice,PayloadAction,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getAllUsers } from './action';


// Application State
export interface User {
  id: number;
  name: string;
  username: string;
}

export interface UsersState {
  allUsers: User[];
  error: string | null;
  loading: boolean;
}

export const getAllUsers = createAsyncThunk('fetchuser/apiUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data as User[]; // Return the fetched data
})



const initialState : UsersState = {
  allUsers: [],
  error: null,
  loading: false,
}


// Create action
const usersSlice = createSlice({
  name: 'users',
  initialState,
  
  // initialState: {
  //   allUsers: [],
  //   error: null,
  //   loading: false
  // },

  //Reducer
  reducers: {  
    addUser: (state, action: PayloadAction<User>) => {
      state.allUsers.push(action.payload);
    },
    editUser: (state,  action: PayloadAction<{ id: number; inputData: Partial<User> }>) => {
      const { id, inputData } = action.payload;
      const userIndex = state.allUsers.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.allUsers[userIndex] = { ...state.allUsers[userIndex], ...inputData };
      }
    },
    removeUser: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      const deletedUsers = state.allUsers.filter((user) => user.id !== action.payload);
      state.allUsers = deletedUsers;
      console.log(deletedUsers, 'delete')
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export const { editUser, addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/posts";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addPost = createAsyncThunk("posts/add", async (post) => {
  const res = await axios.post(API, post);
  return res.data;
});

export const deletePost = createAsyncThunk("posts/delete", async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], filter: "" },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      });
  },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;

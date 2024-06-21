import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '0ea5e0b2d8fd4b1ea376ce92a4814427';
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category = 'general', country = 'us', page = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: API_KEY,
          category,
          country,
          pageSize: 10,
          page,
        },
      });
      return response.data.articles;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default articlesSlice.reducer;

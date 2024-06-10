import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addJobInternship = createAsyncThunk(
  "jobsInternships/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://65f2b05d034bdbecc765912d.mockapi.io/SwirlJobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showJobsInternships = createAsyncThunk(
  "jobsInternships/show",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://65f2b05d034bdbecc765912d.mockapi.io/SwirlJobs");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


// In JobsInternshipSlice.js

export const editJobInternship = createAsyncThunk(
  "jobsInternships/edit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
          `https://65f2b05d034bdbecc765912d.mockapi.io/SwirlJobs/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Update extraReducers to handle editJobInternship action

export const deleteJobInternship = createAsyncThunk(
  "jobsInternships/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://65f2b05d034bdbecc765912d.mockapi.io/SwirlJobs/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const JobsInternshipSlice = createSlice({
  name: "jobsInternships",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addJobInternship.pending, (state) => {
        state.loading = true;
      })
      .addCase(addJobInternship.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addJobInternship.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(showJobsInternships.pending, (state) => {
        state.loading = true;
      })
      .addCase(showJobsInternships.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(showJobsInternships.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editJobInternship.pending, (state) => {
        state.loading = true;
      })
      .addCase(editJobInternship.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(editJobInternship.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteJobInternship.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteJobInternship.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteJobInternship.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default JobsInternshipSlice.reducer;

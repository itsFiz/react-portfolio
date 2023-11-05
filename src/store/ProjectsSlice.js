import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

export const fetchProjects = () => async (dispatch) => {
  try {
    // Use the relative path to your JSON file
    const response = await fetch('src\projectportfolio.json'); // Update the path accordingly

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(setProjects(data));
  } catch (error) {
    // Handle any errors that may occur during the fetch
    console.error('Error fetching data:', error);
  }
};



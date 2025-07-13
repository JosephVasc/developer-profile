import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  photoUrl: string;
  isEditing: boolean;
  theme: 'light' | 'dark';
}

const initialState: ProfileState = {
  name: "Joseph Vasconcelos",
  title: "Full Stack Engineer",
  location: "Plymouth, MA",
  email: "joseph.vasconcelos97@gmail.com",
  phone: "(781)-243-1009",
  linkedin: "linkedin.com/in/joseph-vasconcelos",
  bio: "Full Stack Engineer with expertise in Java, TypeScript, Python, and GoLang. Passionate about building scalable applications and integrating AI solutions. Experienced in developing microservices, managing cloud infrastructure, and delivering innovative solutions for global clients.",
  photoUrl: "/profile.jpg",
  isEditing: false,
  theme: 'light'
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, toggleEditing, toggleTheme, resetProfile } = profileSlice.actions;
export default profileSlice.reducer; 
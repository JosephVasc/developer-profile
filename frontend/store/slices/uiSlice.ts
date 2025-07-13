import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface UIState {
  isLoading: boolean;
  notifications: Notification[];
  sidebarOpen: boolean;
  currentSection: string;
}

const initialState: UIState = {
  isLoading: false,
  notifications: [],
  sidebarOpen: false,
  currentSection: 'about'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = Date.now().toString();
      state.notifications.push({ ...action.payload, id });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { 
  setLoading, 
  addNotification, 
  removeNotification, 
  toggleSidebar, 
  setCurrentSection,
  clearNotifications 
} = uiSlice.actions;

export default uiSlice.reducer; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  warning: null,
  selectedArtistId: null,
  reviewModal: null,
  reviewsData: [],
  profileToggle: true,
  sideMenuModal: false,
  editReviewModal: null,
  addItemModal: null,
  submitModal: {
    isOpen: false,
    message: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWarning: (state, action) => {
      state.warning = action.payload;
    },
    setSelectedArtistId: (state, action) => {
      state.selectedArtistId = action.payload;
    },
    setReviewModal: (state, action) => {
      state.reviewModal = action.payload;
    },
    setReviewsData: (state, action) => {
      state.reviewsData = action.payload;
    },
    setProfileToggle: (state, action) => {
      state.profileToggle = action.payload;
    },
    setSideMenuModal: (state, action) => {
      state.sideMenuModal = action.payload;
    },
    setEditReviewModal: (state, action) => {
      state.editReviewModal = action.payload;
    },
    setAddItemModal: (state, action) => {
      state.addItemModal = action.payload;
    },
    setSubmitModal: (state, action) => {
      state.submitModal = action.payload || { isOpen: false, message: "" };
    },
  },
});

export const {
  setLoading,
  setError,
  setWarning,
  setSelectedArtistId,
  setReviewModal,
  setReviewsData,
  setProfileToggle,
  setSideMenuModal,
  setEditReviewModal,
  setAddItemModal,
  setSubmitModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;

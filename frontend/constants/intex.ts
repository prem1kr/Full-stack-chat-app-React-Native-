import { Platform } from "react-native";

export const API_URL = Platform.OS == "android" ? "https://chat-app-tp1p.onrender.com" : "https://chat-app-tp1p.onrender.com";

export const CLOUDINARY_UPLOAD_PRESET = "image-upload";
export const CLOUDINARY_CLOUD_NAME = "ddiirksy2";
export const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ddiirksy2/image/upload";

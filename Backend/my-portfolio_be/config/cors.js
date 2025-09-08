export const corsOptions = {
  origin: (origin, callback) => {
    // origin có thể undefined (ví dụ gọi bằng Postman)
    callback(null, true); // Cho phép tất cả domain
  },
  credentials: true,        // bắt buộc nếu gửi cookie
  optionsSuccessStatus: 200 // IE11/SmartTV legacy
};

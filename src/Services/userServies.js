import axios from "axios";
import { localServ } from "./localServices";
import { https } from "./configURL";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
export const userServ = {
  // lấy đata user
  postLogin: (dataLogin) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  // lấy dữ liệu danh sách user
  getUserList: () => {
    return axios({
      // config url - bổ sung maNhom từ data localStorage trong localServ lưu về được từ việc gọi api trước đó
      url: `${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${
        localServ.user.get()?.maNhom
      }`,
      method: "GET",
    });
  },
  // xóa người dùng
  deleteUser: (taiKhoan) => {
    return https.delete(
      `api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  // lấy dữ liệu thông tin user đăng nhập:
  getUser: () => {
    return axios({
      // config url - bổ sung maNguoiDung từ data localStorage trong localServ lưu về được từ việc gọi api trước đó
      url: `${BASE_URL}/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${
        localServ.user.get()?.taiKhoan
      }`,
    });
  },

  themNguoiDung: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data,
      headers: {
        Authorization: "bearer " + localServ.user.get()?.accessToken,
      },
    });
  },

  getUserInfo: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data,
    });
  },

  updateUserInfo: (data) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data,
      headers: {
        Authorization: "bearer " + localServ.user.get()?.accessToken,
      },
    });
  },

  searchUser: (key) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${key}`,
      method: "GET",
    });
  },
};

import {NCKHAxiosClient } from "./base";
import {
  CommonGetAllParams,
  GetDetailCustomerParams,
  UpdateCustomerStatus,
  CommonSearchAllParams
} from "../constants/types/common.type";
import { Customer } from "../constants/types/customer.type";

// các API tổng quát mẫu
export const customerApi = {
  getAll: (params?: CommonGetAllParams) => {
    return NCKHAxiosClient("/customers/all", {
      method: "GET",
      params,
    });
  },
  search: (params?: CommonSearchAllParams) =>{
    return NCKHAxiosClient("/customers/all/search",{
      method: "GET",
      params
    })
  },
  getOne: (params: GetDetailCustomerParams) => {
    return NCKHAxiosClient("/customer", {
      method: "GET",
      params,
    });
  },
  create: (data: Customer) => {
    return NCKHAxiosClient("/customer", {
      method: "POST",
      data,
    });
  },
  updateStatus: (params: UpdateCustomerStatus) => {
    return NCKHAxiosClient("/customer/status", {
      method: "PUT",
      params,
    });
  },
};

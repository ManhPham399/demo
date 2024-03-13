// các API như: lấy toàn bộ danh sách, chi tiết 1 thành phần, thêm, sửa , xóa
//https://jsonplaceholder.typicode.com/guide/
import axios from 'axios';
import {NCKHAxiosClient} from './base'
import { Customer } from '../constants/types/customer.type';
import { PostType } from '../constants/types/post.type';

// dánh sách các API hay dùng với bài viết
export const postapi = {
    getAll: () => {
      return NCKHAxiosClient("/posts",{
        method: "GET"
      });
    },
    getOne: (id:number) => { 
      return NCKHAxiosClient(`/posts/${id}`, {
        method: "GET"
      });
    },
    create: (data: PostType) => {
      return NCKHAxiosClient("/posts", {
        method: "POST",
        data
      });
    },
    update: (data:PostType,id:number) => {
      return NCKHAxiosClient(`/posts/${id}`, {
        method: "PUT",
        data
      });
    },
    delete: (id:number) => {
      return NCKHAxiosClient(`/posts/${id}`, {
        method: "DELETE"
      });
    },
  };
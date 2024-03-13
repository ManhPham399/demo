import React, { useEffect } from "react";
import DashboardChart from "./component/DashboardChart";
import './style.scss'
import { useDispatch } from "react-redux";
import { setSelectedBreadCrumb } from "../App/store/appSlice";
import DashboardGeneralItem from "./component/DashboardGeneralItem";
import { Space, message } from "antd";
import Icons from "../../assets/icons";
import DboardTopCardItem from "./component/DboardTopCardItem";
import { useAllposts, useAllusers,useMotpost,useMotuser, usePhantrang } from "../../utils/request";
import { customerApi } from "../../apis/customer";
import {postapi} from "../../apis/post";
import { PostType } from "../../constants/types/post.type";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let breadCrumb = [
      {
        label: "Dashboard",
        path: "",
      }
    ]
    dispatch(setSelectedBreadCrumb(breadCrumb))
  }, [])
  
  /*======================= API liên quan đến việc GET danh sách dữ liệu và gọi lại API lại====================
const {data,mutate} =  useAllposts(); 
const {data,mutate} =  useAllusers();
const {data,mutate} =  useMotpost();
const {data,mutate} =  useMotuser();

==============================================================================
*/
const params = {
page:1,
limit:10
}
const filter = {
  title:"title",
  price:"price"
}
const {data,mutate} = usePhantrang(params,filter);
console.log(data)
// const fetchData = async () => {
//   const data  =  await postapi.getAll();
//   console.log(data.data)
// }
// useEffect(() => {
//   fetchData();
// },[]) 



// const fetchData = async () => {
//   const data  =  await postapi.getOne(1);
//   console.log(data.data)
// }
// useEffect(() => {
//   fetchData();
// },[]) 


// const fetchData = async () => {
//   const dataPost: PostType = {
//     userId: 1,
//     body: "acbbbb",
//     title: "aaaa"
//   }
//   const data  =  await postapi.create(dataPost);
//   if (data.status === 201) message.success()
// }
// useEffect(() => {
//   fetchData();
// },[])


// const fetchData = async () => {
//     const dataPut: PostType = {
//     title: 'manh',
//     body: 'pham',
//     userId: 10,
//   }
//   const data  =  await postapi.update(dataPut,1)
//   console.log(data.data)
// }
// useEffect(() => {
//   fetchData();
// },[]) 


// const fetchData = async () => {
//   const data  =  await postapi.delete(1);
//   console.log(data.data)
// }
// useEffect(() => {
//   fetchData();
// },[]) 





//const res = itemApi.getDetail(id)
  //const { data, mutate } = useMotuser()
  // const handlerUpdate = (dataUpdate: any) =>{
  //   const res = customerApi.updateStatus(data);
  //   if(res.status === 200) {
  //     message.success("ooke xong");
  //     mutate();
  //   }else message.error()
  //   message.warning()
  // }

  return (
    <div className="customers-wrapper">
      <Space direction="horizontal" className="dasboard-gn-wrapper">
        <DashboardGeneralItem title="Số service" value={12} icon={<Icons.bell />} />
      </Space>
      <DashboardChart />
      <Space direction="horizontal" className="dasboard-gn-wrapper" style={{ marginTop: 10 }}>
        <DboardTopCardItem title="Top vulnerabilities" value={['XSS', 'SQL Injection', 'File Upload']} icon={<Icons.file />} />
        <DboardTopCardItem title="Top rules" value={['100201', '192020', '192829']} icon={<Icons.camera />} />
      </Space>
    </div>
  );
};

export default Dashboard;

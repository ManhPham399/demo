import React, { useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { Tabs } from "antd";
import Rules from "../Keys";
import { useDispatch } from "react-redux";
import { USER_MANAGEMENT, USER_MANAGEMENT_DETAILS } from "../../routes/route.constant";
import { setSelectedBreadCrumb } from "../App/store/appSlice";
import Logs from "./components/Logs";
import UserMnDashboard from "./components/UserMnDashboard";

const UserManagementDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    let breadCrumb = [
      {
        label: "User managerment",
        path: USER_MANAGEMENT
      },
      {
        label: `${id}`,
        path: ""
      }
    ]
    dispatch(setSelectedBreadCrumb(breadCrumb));
  }, [USER_MANAGEMENT_DETAILS])
  console.log(id);
  const items = [{
    label: "Statistic",
    key: "Statistic",
    children: <UserMnDashboard />,
  },
  {
    label: "Events",
    key: "Events",
    children: <Logs />,
  },
  {
    label: "Custom rules",
    key: "ruleCustom",
    children: <Rules />,
  }]

  return (
    <div className="container-wrapper">
      <Tabs items={items} className="userManagementDetailsTab"/>
    </div>
  );
};

export default UserManagementDetail;

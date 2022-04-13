import { Routes, } from "../../routes"
import { faBook, faBoxOpen, faChartPie, faCog, faUser,faUserPlus, faTasks, faHouseUser,  faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../reducers/loginSlice";
// import {getData} from "../../pages/examples/Signin" 

let userData = localStorage.getItem("myData")

// console.log("usrr data fro index ", JSON.parse(userData));

export const sidebarData=[
//     {
//     title: "Home",
//     link: Routes.Presentation.path,
//     icon: faHouseUser,
//     showTo :"admin",
// },
{
    title: "Dashboard",
    link: Routes.DashboardOverview.path,
    icon: faChartPie,
    showTo :"admin", 
},
{
    title: "User List",
    link: Routes.UserList.path,
    icon: faUser,
    showTo :"admin", 
},
{
    title: "Add User",
    link: Routes.AddUser.path,
    icon: faUserPlus,
    showTo :"admin", 
},
{
    title: "Task List",
    link: Routes.TaskList.path,
    icon: faTasks,
    showTo :"admin", 
},
{
    title: "Task Form",
    link: Routes.AddTask.path,
    icon: faTasks,
    showTo :"admin", 
},
{
    title: "Assign Task",
    link: Routes.AssignTask.path,
    icon: faTasks,
    showTo :"admin", 
},
{
    title: "Dashboard",
    link: Routes.DashboardOverview.path,
    icon: faChartPie,
    showTo :"user", 
},
{
    title: "About",
    link: Routes.About.path,
    icon: faTasks,
    showTo :"user", 
},
{
    title: "Task List",
    link: Routes.UserTaskList.path,
    icon: faTasks,
    showTo :"user", 
},
{
    title: "Dashboard",
    link: Routes.DashboardOverview.path,
    icon: faChartPie,
    showTo :"bank", 
},
{
    title: "About",
    link: Routes.About.path,
    icon: faTasks,
    showTo :"bank", 
},
{
    title: "Task List",
    link: Routes.UserTaskList.path,
    icon: faTasks,
    showTo :"bank", 
},
]


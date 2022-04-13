import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";
import Protected from "../pages/Proteccted"
// pages
import About from './userDashboard/About';
import UserTaskList from './userDashboard/TaskList';
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";
import UserList from "./users/UserList";
import TaskList from './task/TaskList';
import AddUser from "./users/AddUser";
import UpdateUser from "./users/UpdateUser"
import UpdateAssign from './UpdateAssign';
import AddTask from './task/AddTask';
import AssignTask from './task/AssignTask';
import UserTask from './UserTask';
import PnbForm from './bank_forms/PnbForm';
import UbiForm from './bank_forms/UbiForm';
import CbForm from './bank_forms/CbForm';
import IdbiForm from './bank_forms/IdbiForm';
import KarnatakaForm from "./bank_forms/KarnatakaForm";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Logout from "./examples/Logout";
import Signup from "./examples/Signup";
import NotFoundPage from "./examples/NotFound";


// documentation pages

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }
  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
         <div style={{marginBottom:'10px'}}>
          <Component {...props} />
          </div>
          {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Logout.path} component={Logout} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    {/* pages */}
    {/* <RouteWithSidebar exact path={Routes.DashboardOverview.path}  >
    <Protected component={DashboardOverview}/>
    </RouteWithSidebar> */}

    <RouteWithSidebar  exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.About.path} component={About} />
    <RouteWithSidebar exact path={Routes.UserTaskList.path} component={UserTaskList} />
    <RouteWithSidebar exact path={Routes.TaskList.path} component={TaskList} />
    <RouteWithSidebar exact path={Routes.UserList.path} component={UserList} />
    <RouteWithSidebar exact path={Routes.AddUser.path} component={AddUser} />
    <RouteWithSidebar exact path={Routes.UpdateUser.path} component={UpdateUser} />
    <RouteWithSidebar exact path={Routes.UpdateAssign.path} component={UpdateAssign} />
    <RouteWithSidebar exact path={Routes.AddTask.path} component={AddTask} />
    <RouteWithSidebar exact path={Routes.AssignTask.path} component={AssignTask} />/
    <RouteWithSidebar exact path={Routes.UserTask.path} component={UserTask} />/
    <RouteWithSidebar exact path={Routes.PnbForm.path} component={PnbForm} />
    <RouteWithSidebar exact path={Routes.UbiForm.path} component={UbiForm} />
    <RouteWithSidebar exact path={Routes.CbForm.path} component={CbForm} />
    <RouteWithSidebar exact path={Routes.IdbiForm.path} component={IdbiForm} />
    <RouteWithSidebar exact path={Routes.KarnatakaForm.path} component={KarnatakaForm} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    <Redirect to={Routes.Presentation.path} />
  </Switch>
);

import React, { useEffect } from 'react';
import {
   DashboardOutlined,
   FileTextOutlined,
   UsergroupAddOutlined,
   TagOutlined,
   BookOutlined
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutePath, routeList } from '@shared/config/routes';
import ProfileMenu from '@features/user/ui/ProfileMenu';
import { useSelector } from 'react-redux';

const { Footer, Sider, Content, Header } = Layout;

function getItem(label, key, children, disabled) {
   return {
      key,
      children,
      label,
      disabled
   };
}
const allMenuItems = [getItem('Панель', 'dashboard'), getItem('Данные', 'data')];

const AdminLayout = (props) => {
   const navigate = useNavigate();
   const location = useLocation();
   const [collapsed, setCollapsed] = useState(false);

   const onCollapse = (value) => {
      setCollapsed(value);
   };

   const onClick = (e) => {
      const routeName = e?.key;
      if (!routeName || !RoutePath[routeName]) return;

      navigate(RoutePath[routeName]);
   };

   let pathName = location.pathname.replace('/', '');

   if (pathName.includes('/')) {
      pathName = pathName.split('/')[0];
   }

   const selectedRoute = RoutePath[pathName] ? [pathName] : null;

   return (
      <Layout
         style={{
            minHeight: '100vh'
         }}>
         <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            trigger={false}
            className="left-sider-menu">
            <div
               className={`left-side-logo ${collapsed ? 'collapsed' : ''}`}
               onClick={() => navigate('/')}>
               AI
            </div>
            <Menu
               onClick={onClick}
               mode="inline"
               items={allMenuItems}
               className="menu"
               selectedKeys={selectedRoute}
               defaultSelectedKeys={selectedRoute}
            />
         </Sider>
         <Layout>
            <Header className="erp-header">
               <div />

               <div style={{ display: 'flex', width: '70px' }}>
                  <ProfileMenu adminMode />
               </div>
            </Header>
            <Content
               style={{
                  margin: '0 16px'
               }}>
               <div
                  style={{
                     padding: '0 24px',
                     minHeight: 360
                  }}>
                  {props.children}
               </div>
            </Content>
            <Footer
               style={{
                  textAlign: 'center'
               }}>
               © {new Date().getFullYear()} Altun. Все права защищены.
            </Footer>
         </Layout>
      </Layout>
   );
};
export default AdminLayout;

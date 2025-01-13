import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';

const userType = {
   seller: 'Продавец',
   admin: 'Администратор'
};

const MenuProfile = ({ isCollapsed }) => {
   const navigate = useNavigate();
   const userData = useSelector(getUserAuthData);

   return (
      <div
         className="menu-items"
         onClick={() => navigate(`/${userData.type}/profile`)}>
         <span className="menu-profile-info_login">Профиль</span>
      </div>
   );
};

export { MenuProfile };

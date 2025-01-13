import React from 'react';
import { Dropdown, Space, Button, Avatar } from 'antd';
import { getUserAuthData } from '@entities/User';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';

const ProfileMenu = ({ adminMode }) => {
   const authData = useSelector(getUserAuthData);
   const navigate = useNavigate();

   if (!authData?.id) {
      return (
         <>
            <Button
               onClick={() => navigate('/login')}
               type="link"
               style={{ marginRight: '10px' }}>
               Войти
            </Button>
            <Button onClick={() => navigate('/register')} type="primary">
               Зарегистрироваться
            </Button>
         </>
      );
   }

   return (
      <div>
         <Button onClick={() => navigate('/logout')} type="primary">
            Выйти
         </Button>
      </div>
   );
};

export default ProfileMenu;

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '@entities/User';
import { Content, Title } from '@shared/ui';
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from '@shared/ui';
import { Modal, Alert } from 'antd';
import { RoutePath } from '@shared/config/routes';

const AuthProvider = (props) => {
   return <>{props.children}</>;
};

export default AuthProvider;

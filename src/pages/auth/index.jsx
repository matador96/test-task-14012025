import React, { useEffect } from 'react';
import LoginForm from '@features/auth/ui/LoginForm';
import { Content, Title, Button } from '@shared/ui';
import { userActions } from '@entities/User';
import Container from '@widgets/Container/ui/Container';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { RoutePath } from '@shared/config/routes';

import { useDispatch } from 'react-redux';

const LoginBlock = () => {
   return (
      <div className="auth-block">
         <div className="auth-block_title">Вход</div>
         <LoginForm />
      </div>
   );
};

const AuthPage = ({ isLoginForm = true }) => {
   const navigate = useNavigate();

   return (
      <Container>
         <LoginBlock />
      </Container>
   );
};

const LogoutPage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(userActions.logoutUser());

      navigate(RoutePath.login);
   }, []);

   return (
      <Content>
         <Title>Выход из аккаунта</Title>
      </Content>
   );
};

export { AuthPage, LogoutPage };

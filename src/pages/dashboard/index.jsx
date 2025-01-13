/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Content, Title } from '@shared/ui';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';

const AdminPage = () => {
   const authData = useSelector(getUserAuthData);

   return (
      <Content>
         <Title>Добро пожаловать {authData?.login}!</Title>
         <p>
            Ниже задание:   Общее Самостоятельно выбрать фреймворк (обязательно один
            из предложенных: AntDesign, MaterialUI, Quasar). Сервера нет. Сделать
            так, чтобы все работало без наличия сервера. Один из вариантов:
         </p>

         <ol>
            <li>
               Реализовать страницы логина (логин, сброс пароля, начальная внутренняя
               страница системы).
            </li>
            <li>
               Реализовать страницу отчета. 3-5 параметров, обязательно с выбором
               интервала дат. Результат - таблица, обязательно 5-7 колонок, с датой.
            </li>
         </ol>
      </Content>
   );
};

export default AdminPage;

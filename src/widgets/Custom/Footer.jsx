/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Container from '@widgets/Container/ui/Container';
import { Input, Button, Space } from 'antd';

import { useNavigate } from 'react-router-dom';

const items = [
   { label: 'Главная', key: '/' },
   { label: 'О нас', key: '/about' }
];

const Footer = () => {
   const navigate = useNavigate();

   return (
      <div className="footer">
         <Container>
            <div className="footer-block">
               <div className="footer-block-logo"></div>
               <div className="footer-block-menu">
                  {items.map((item, index) => (
                     <a
                        key={index}
                        href={item.key}
                        onClick={(e) => {
                           e.preventDefault();
                           navigate(item.key);
                        }}
                        className="footer-block-menu-item">
                        {item.label}
                     </a>
                  ))}
               </div>{' '}
               <div />
               <div className="footer-block-socials">
                  <div className="footer-block-socials_email">
                     <Space.Compact
                        className="footer-block-socials_email_input"
                        style={{
                           width: '100%'
                        }}>
                        <Input defaultValue="" placeholder="Введите почту" />
                        <Button type="primary">Подписаться</Button>
                     </Space.Compact>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Footer;

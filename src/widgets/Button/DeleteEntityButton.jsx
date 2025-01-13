import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';

import { message, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

const DeleteEntityButton = (props) => {
   const [loading, setLoading] = useState(false);
   const {
      id,
      callbackFetch = () => {},
      update = () => {},
      buttonText = <DeleteOutlined />
   } = props;

   const deleteEntity = () => {
      setLoading(true);

      callbackFetch(id)
         .then(() => {
            update();
            message.success('Удалено');
            setLoading(false);
         })
         .catch((e) => {
            message.error(e.message);
            setLoading(false);
         });
   };

   const showConfirm = () => {
      return confirm({
         icon: <ExclamationCircleFilled />,
         title: 'Подтвердите удаление',
         content: `Вы уверены, что хотите удалить?`,
         okText: 'Да',
         okType: 'danger',
         maskClosable: true,
         cancelText: 'Нет',
         onOk() {
            deleteEntity();
         }
      });
   };

   return (
      <Tooltip placement="top" title={'Удалить'}>
         <Button onClick={showConfirm} loading={loading} danger type="link">
            {buttonText}
         </Button>
      </Tooltip>
   );
};

export default DeleteEntityButton;

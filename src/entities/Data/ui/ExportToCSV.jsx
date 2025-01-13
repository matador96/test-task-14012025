import React, { useState, useRef, useEffect } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
import { Button, message } from 'antd';
import { dataColumns } from '@shared/const/tableColumns';

const fieldsOfEntities = [
   { label: 'Имя', key: 'firstName' },
   { label: 'Фамилия', key: 'lastName' },
   { label: 'Дата создания', key: 'createdAt' },
   { label: 'Место рождения', key: 'placeBirth' },
   { label: 'Откуда', key: 'from' },
   { label: 'Пол', key: 'sex' }
];

const ExportToCSV = ({ values }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState(null);
   const csvInstance = useRef();

   const getData = () => {
      setIsLoading(true);

      setData(values);

      setTimeout(() => {
         csvInstance.current.link.click();
         message.success('Данные успешно экспортированы');
         setIsLoading(false);
      }, 500);
   };

   return (
      <>
         <Button
            icon={<DownloadOutlined />}
            onClick={getData}
            loading={isLoading}
            style={{ maxWidth: '240px' }}
            disabled={isLoading}>
            Скачать отчет
         </Button>

         {data ? (
            <CSVLink
               filename={'file.csv'}
               data={data}
               ref={csvInstance}
               headers={fieldsOfEntities}
               separator={';'}
            />
         ) : null}
      </>
   );
};

export default ExportToCSV;

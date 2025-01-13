/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import { Title } from '@shared/ui';
import { Content } from '@shared/ui';
import DataTable from '@entities/Data/ui/DataTable';

const DataPage = () => {
   return (
      <Content>
         <Title>Случайные данные</Title>
         <DataTable />
      </Content>
   );
};

export default DataPage;

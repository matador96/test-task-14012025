import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, message, Modal, Tooltip } from 'antd';

import { Button, VerticalSpace } from '@shared/ui';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { ExclamationCircleFilled } from '@ant-design/icons';
import Filter from '@widgets/Filter';
import { filterToObj } from '@shared/utils/filterToObj';
import dataArray from '@shared/const/data.json';
import ExportToCSV from './ExportToCSV';

const { confirm } = Modal;

import {
   getColumnSearchProps,
   onSearchFilterTable,
   onTableChange
} from '@shared/ui/Table';
import { filterData } from '@shared/const/filterSettings';
import { dataColumns } from '@shared/const/tableColumns';

const DataTable = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState(dataArray);

   const [paramsTable, setParamsTable] = useState({
      filters: [],
      sorter: {}
   });

   const { pagination, filters } = paramsTable;

   const onSearchTable = (searchObj) => {
      onSearchFilterTable(searchObj, paramsTable, fetchData);
   };

   const setFilters = (newFilters) => {
      let data = dataArray;

      const res = (findIndex, filterValue, currentValue) =>
         filterData
            .find((filter) => findIndex === filter.index)
            .filter(filterValue, currentValue);

      newFilters.forEach((filter) => {
         if (filter.index) {
            data = data.filter((item) =>
               res(filter.index, item[filter.index], filter.value)
            );
         }
      });

      setData(data);
      setParamsTable({ ...paramsTable, filters: newFilters });
   };

   return (
      <>
         <Filter
            filterValues={filters}
            filterList={filterData}
            setFilters={setFilters}
         />{' '}
         <VerticalSpace />
         <ExportToCSV values={data} />
         <VerticalSpace />
         <Table columns={dataColumns} dataSource={data} loading={isLoading} />
         <VerticalSpace />
      </>
   );
};

export default DataTable;

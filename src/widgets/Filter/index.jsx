/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Container from '@widgets/Container/ui/Container';
import { useState, useEffect } from 'react';
import { Input, Button, Space, Popover, Tag, Typography, message } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import SelectWithApi from '@widgets/FormItems/SelectWithApi';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import { v4 as uuidv4 } from 'uuid';
const { Text } = Typography;

const Inputs = (c) => ({
   integer: <Input type="number" {...c} />,
   string: <Input type="text" {...c} />,
   selectApi: <SelectWithApi {...c} />,
   default: <Input {...c} />,
   rangePicker: (
      <RangePicker
         {...c}
         defaultValue={[c.value?.[0], c.value?.[1]]}
         value={[c.value?.[0], c.value?.[1]]}
         onChange={(date, dateString) => {
            c.onChange({
               target: {
                  value: [dateString[0], dateString[1]]
               }
            });
            c.onPressEnter({
               target: {
                  value: [dateString[0], dateString[1]]
               }
            });
         }}
      />
   )
});

const FilterInput = (props) => {
   const { type, index, onChangeInput, title, placeholder } = props;
   const [value, setValue] = useState(null);
   let typeOfInput = type || 'default';

   const onChange = (e) => {
      setValue(e.target.value);
   };

   const onPressEnter = (e) => {
      if (!e.target.value) return;

      onChangeInput(index, e.target.value, title, uuidv4());
      setValue(null);
   };

   return (
      <>
         {
            Inputs({
               ...props,
               onPressEnter,
               onChange: onChange,
               placeholder,
               value: value,
               style: { width: '220px', display: 'block' }
            })[typeOfInput]
         }
         <Text type="secondary">Нажмите ENTER для сохранения</Text>
      </>
   );
};

const FilterList = (props) => {
   const { filterList, onChange, setFilters, filterValues } = props;
   const [open, setOpen] = useState(false);
   const [filterMode, setFilterMode] = useState(null);

   const onChangeInput = (index, value, title, hash) => {
      setOpen(false);
      setFilterMode(null);

      const isHaveSomeFilter =
         filterValues.find((e) => e.index === index)?.value === value;

      if (isHaveSomeFilter) {
         message.error('Такой фильтр уже существует');
         return;
      }

      const newFilters = filterValues.filter((filter) => filter.index !== index);

      setFilters([...newFilters, { title, index, value, hash }]);
   };

   const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
   };

   const onChooseFilter = (filter) => {
      setFilterMode(filter);
      setOpen(true);
   };

   return (
      <Space direction="vertical" style={{ width: 220 }}>
         {filterList.map((filter, i) => (
            <Button
               className="filter_button"
               key={filter.title}
               onClick={() => onChooseFilter(filter)}>
               по {filter.title}
            </Button>
         ))}

         <Popover
            content={<FilterInput {...filterMode} onChangeInput={onChangeInput} />}
            trigger="click"
            open={open}
            placement="right"
            onOpenChange={handleOpenChange}
         />
      </Space>
   );
};

const Filter = (props) => {
   const { filterValues, filterList, setFilters } = props;
   const [open, setOpen] = useState(false);

   const deleteFilter = (hash) => {
      const newFilters = filterValues.filter((filter) => filter.hash !== hash);
      setFilters(newFilters);
   };

   const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
   };

   useEffect(() => {
      setOpen(false);
   }, [filterValues]);

   return (
      <div className="filter">
         <div className="filter_list">
            {filterValues.map((filter) => (
               <Tag
                  key={filter.hash}
                  closable
                  onClose={() => deleteFilter(filter.hash)}>
                  {filter.title} : {filter.value}
               </Tag>
            ))}
         </div>
         <div className="filter_add">
            <Popover
               placement="bottom"
               content={
                  <FilterList
                     filterList={filterList}
                     setFilters={setFilters}
                     filterValues={filterValues}
                  />
               }
               open={open}
               onOpenChange={handleOpenChange}
               trigger="click">
               <Button icon={<FilterOutlined />}>Добавить фильтр</Button>
            </Popover>
            {filterValues.length > 0 && (
               <Button
                  style={{ marginLeft: '10px' }}
                  onClick={() => {
                     setFilters([]);
                  }}>
                  Очистить фильтры
               </Button>
            )}
         </div>
      </div>
   );
};

export default Filter;

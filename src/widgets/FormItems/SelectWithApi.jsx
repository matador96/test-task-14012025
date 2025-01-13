import { Select } from 'antd';
import { useState, useEffect } from 'react';

import _ from 'lodash';

const SelectWithApi = (props) => {
   const [options, setOptions] = useState([]);
   const { fetchApi, placeholder, onChange, onPressEnter, value } = props;

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      fetchApi({}).then((res) => {
         const modifiedData = res.data.map((item) => ({
            label: item,
            value: item
         }));
         setOptions(modifiedData);
      });
   };

   return (
      <div>
         <Select
            style={{ width: '100%', marginBottom: '15px' }}
            onSelect={(value) => {
               onChange({
                  target: {
                     value // :D
                  }
               });
               onPressEnter({
                  target: {
                     value // :D
                  }
               });
            }}
            value={value}
            placeholder={placeholder}
            filterOption={false}
            options={options}
         />
      </div>
   );
};
export default SelectWithApi;

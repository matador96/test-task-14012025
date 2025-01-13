const filterData = [
   {
      title: 'Имя',
      type: 'string',
      index: 'firstName',
      placeholder: 'Введите имя',
      filter: (filterValue, currentValue) =>
         currentValue.toLowerCase().includes(filterValue.toLowerCase())
   },
   {
      title: 'Интервал создания',
      type: 'rangePicker',
      index: 'createdAt',
      placeholder: 'Введите период',
      filter: (filterValue, currentValue) => {
         const [start, end] = currentValue;
         const startDate = new Date(start);
         const endDate = new Date(end);

         const targetDate = new Date(filterValue);

         const isInRange = targetDate >= startDate && targetDate <= endDate;

         return isInRange;
      }
   }
];

module.exports = {
   filterData
};

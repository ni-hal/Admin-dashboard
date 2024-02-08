import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
   <div>Employee</div>
  );
};
export default Employees;

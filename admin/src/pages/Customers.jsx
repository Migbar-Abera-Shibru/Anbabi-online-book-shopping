import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header, Navbar } from '../components';
import { useNavigate } from 'react-router-dom'


const Customers = () => {
  let navigate= useNavigate();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
       <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            

     
       <Header category="Page" title="Customers" />
       <button onClick={() => { navigate("/adduser")}} 
      
       className='rounded-xl m-3 p-3 bg-red-400 hover:bg-orange-600 '>Add new User</button>
      <GridComponent
      
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        allowSorting
      > 
      
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>

      
    </div>
  );
};

export default Customers;

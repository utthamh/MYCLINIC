import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Link } from 'react-router-dom';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function PositioningActionsColumn(props) {
    return (
      <MaterialTable
     
      icons={tableIcons}
        title="Patient List"
        columns={[
          
          { title: 'Patient', field: 'patientPhoto',render: rowData => <img src={rowData.patientPhoto} style={{width: 50, height:50,borderRadius: '50%'}}/> },
        { title: 'Name', field: 'patientName',render:rowData=><Link to={{pathname:'/dashboard/patient/1',state:rowData}}>{rowData.patientName}</Link> },
          { title: 'Gardian Name', field: 'gardianName' },
          {title:'Phone Number',field:'phoneNumber'}
        ]}
        data={props.data||[]}
        editable={{onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = props.data && [...props.data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                props.setData([...dataDelete])
                localStorage.setItem('patientList',JSON.stringify([...dataDelete]))
                resolve();
              }, 1000)
            })}}
        actions={[
          {
            icon: Edit,
            tooltip: 'Save User',
            onClick: (event, rowData) => props.setInitial(rowData)
          }
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    )
  }
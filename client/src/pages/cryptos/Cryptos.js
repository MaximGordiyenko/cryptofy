import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandleBTC } from "../../redux/actions/crypto.action";
import { LineChart } from "../../components/charts/LineChart";
import moment from "moment";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export const Cryptos = () => {
  const dispatch = useDispatch();
  const gridApiRef = useRef(null);
  
  const [sec, setSec] = useState(null);
  const [column, setColumn] = useState({
    columnDefs: [{
      headerName: 'Date', field: 'date', sortable: true, filter: true, checkboxSelection: true,
    }, {
      headerName: 'Open', field: 'open', sortable: true, filter: true,
    }, {
      headerName: 'High', field: 'high', sortable: true, filter: true,
    }, {
      headerName: 'Low', field: 'low', sortable: true, filter: true,
    }, {
      headerName: 'Close', field: 'close', sortable: true, filter: true,
    }, {
      headerName: 'Market Capitalisation', field: 'marketCap', sortable: true, filter: true,
    },], rowData: null,
  });
  
  useEffect(() => {
    dispatch(getCandleBTC());
  }, [dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_LOCAL_HOST}:${process.env.REACT_APP_PORT}/api/sec`)
      .then(res => res.json())
      .then(resp => {
        setSec(resp);
      })
      .catch(err => console.log(err));
  }, []);
  
  const { arrayBtcUsd, loading } = useSelector(state => state?.setCandleBTC);
  const { error } = useSelector(state => state?.error);
  
  const formattedDate = arrayBtcUsd?.map(el => {
    return { x: moment(el[6]).format("YYYY-MM-DD"), y: Math.ceil(el[4]) };
  });
  
  const objectBtcUsd = arrayBtcUsd.map(el => ({
    date: moment(el[0]).format("YYYY-MM-DD"), open: el[1], high: el[2], low: el[3], close: el[4], marketCap: el[10],
  }));
  
  const gridOptions = {
    pagination: true,
  };
  
  const onSelectRow = (params) => {
    gridApiRef.current = params.api;
  };
  
  // const onGridReady = (params) => {
  //   gridApiRef.current = params.api;
  // };

  return (
    <>
      {
        error ? <div dangerouslySetInnerHTML={{ __html: error }}/> : <>
          {
            loading && arrayBtcUsd.length === 0 && <div>Loading...</div>
          }
          <LineChart data={formattedDate}/>
          <div className="ag-theme-balham" style={{ width: '100vw', height: '600px' }}>
            <button onClick={onSelectRow}>Select all</button>
            <AgGridReact
              columnDefs={column?.columnDefs}
              rowData={objectBtcUsd}
              rowSelection="multiple"
              gridOptions={gridOptions}
              // onGridReady={onGridReady}
              ref={gridApiRef}
              defaultColDef={{ resizable: true }}
            />
          </div>
        </>
      }
    </>
  );
};
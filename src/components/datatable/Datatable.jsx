import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Datatable = ({userColumns, userRows, title}) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(userRows)
  },[userRows])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/abc" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title} List
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row)=>row.id}
      />
    </div>
  );
};

export default Datatable;
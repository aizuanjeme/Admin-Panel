import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getStafffromLS } from "../../LocalStorage";
import { DataGrid } from "@material-ui/data-grid";
import "./staff.css";

const List = () => {
  const [data, setData] = useState(getStafffromLS);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (staffs) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={staffs.row.avatar} alt="" />
            {staffs.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (staffs) => {
        return (
          //   <>
          //     <Link to={"/user/" + staffs.row.id}>
          //       <button className="userListEdit">Edit</button>
          //     </Link>
          //     <DeleteOutline
          //       className="userListDelete"
          //       onClick={() => handleDelete(staffs.row.id)}
          //     />
          //   </>
          <h1>hi</h1>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default List;

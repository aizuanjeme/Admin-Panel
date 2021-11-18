import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStafffromLS } from "../../LocalStorage";
import { DataGrid } from "@material-ui/data-grid";
import "./staff.css";
import { DeleteOutline } from "@material-ui/icons";

const List = () => {
  const [data, setData] = useState(getStafffromLS);

  // delete staff from LS
  const handleDelete = (id) => {
    const filteredData = data.filter((element) => {
      return element.id !== id;
    });
    setData(filteredData);
  };

  useEffect(() => {
    const json = JSON.stringify(data);
    localStorage.setItem("Staff", json);
  }, [data]);

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
      field: "gender",
      headerName: "Gender",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "active",
      headerName: "Active",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (staffs) => {
        return (
          <>
            <Link to={"/staff/edit/" + staffs.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(staffs.row.id)}
            />
          </>
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

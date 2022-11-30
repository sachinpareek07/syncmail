import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { getEmails } from "../../api/emails";

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersList = async () => {
      // const userdata = await getUsers();
      // const userdata = await getEmails();
      // console.log(userdata);
      setUsers([]);
    };
    getUsersList();
  }, []);

  const haldelActiveInactive = () => {
    console.log("enter here");
  };
  const userColumns = [
    // {
    //   field: "fullName",
    //   headerName: "Full Name",
    //   width: 230,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellWithImg">
    //         <img className="cellImg" src={params.row.img} alt="avatar" />
    //         {params.row.userName}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "to",
      headerName: "Email",
      width: 230,
      renderCell: (params) => <span>{JSON.stringify(params)}</span>,
    },
    // {
    //   field: "phone",
    //   headerName: "Contact",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.countryCode}`}>
    //         {params.row.countryCode}
    //         {params.row.phone}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   field: "isActive",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.isActive}`}>
    //         {params.row.isActive ? (
    //           `<Link>'Active'</Link>`
    //         ) : (
    //           <span onClick={haldelActiveInactive()}>In Active</span>
    //         )}
    //       </div>
    //     );
    //   },
    // },
  ];

  return users && <Datatable userColumns={userColumns} userRows={users} />;
};

export default List;

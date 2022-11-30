import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { GetCategories } from "../../api/categories";


const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      console.log("enter here")
      const data = await GetCategories();
      setList(data);
    };
    getList();
  }, []);

  const haldelActiveInactive = () => {
    console.log("enter here");
  };
  const userColumns = [
    {
      field: "image",
      headerName: "Image",
      width: 230,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellWithImg">
      //       <img className="cellImg" src={params.row.img} alt="avatar" />
      //       {params.row.userName}
      //     </div>
      //   );
      // }
    },
    {
      field: "name",
      headerName: "Name",
      width: 230
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.isSuspended}`}>
            {params.row.isSuspended ? (
              `<Link>'Active'</Link>`
            ) : (
              <span onClick={haldelActiveInactive()}>In Active</span>
            )}
          </div>
        );
      }
    }
  ];

  return (
    list && <Datatable userColumns={userColumns} userRows={list} />
  );
};

export default List;

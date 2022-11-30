import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";

const List = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersList = async () => {
      const userdata = await getUsers();
      setUsers(userdata);
    };
    getUsersList();
    
  }, [users]);

  return <Datatable />;
};

export default List;

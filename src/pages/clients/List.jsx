import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { getClients } from "../../api/emails";

const List = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsList = async () => {
      const clientsArray = await getClients();
      const clientsData = clientsArray && clientsArray.map((client, index) => {
        return {
          id: index + 1,
          email: client,
        };
      });
      setClients(clientsData);
    };
    getClientsList();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 300 },
  ];

  return <Datatable userColumns={columns} userRows={clients} title="Clients" />;
};

export default List;

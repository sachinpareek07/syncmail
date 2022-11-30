import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { getEmails } from "../../api/emails";

const List = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const getEmailsList = async () => {
      const emailsArray = await getEmails();
      const emailsData =
        emailsArray &&
        emailsArray.map((email, index) => {
          return {
            sno: index + 1,
            ...email,
          };
        });
      setEmails(emailsData);
    };
    getEmailsList();
  }, []);

  const columns = [
    { field: "sno", headerName: "SNO", width: 70, renderCell: (params) => {
      
    }},
    {
      field: "from",
      headerName: "From",
      width: 300,
      renderCell: (params) => {
        return <span>{params.row.from[0]["address"]}</span>;
      },
    },
    {
      field: "to",
      headerName: "To",
      width: 300,
      renderCell: (params) => {
        return <span>{params.row.to[0]["address"]}</span>;
      },
    },
    { field: "subject", headerName: "Subject", width: 300 },
  ];

  return <Datatable userColumns={columns} userRows={emails} title="Emails" />;
};

export default List;

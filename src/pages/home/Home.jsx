import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import { getClients, getEmails } from "../../api/emails";

const Home = () => {
  const [totalEmails, setTotalEmails] = useState(0);
  const [totalClients, setTotalClients] = useState(0);

  useEffect(() => {
    const getTotalEmails = async () => {
      const emails = await getEmails();
      setTotalEmails(emails.length);
    };
    getTotalEmails();

    const getTotalClients = async () => {
      const clients = await getClients();
      setTotalClients(clients.length);
    }
    getTotalClients();
  }, []);
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="Emails" total={totalEmails} />
            <Widget type="Clients" total={totalClients} />
          </div>
          {/* <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;

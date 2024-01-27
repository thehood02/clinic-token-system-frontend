import {useState} from "react";

const TokenDashboard = () => {
  const [tokenList, setTokenList] = useState([]);

  return (
    <main>
      <div className="dashboard">
        <h1 className="heading">Token Dashboard for doctor's clinic</h1>
        <table>
          <tr>
            <th>NAME</th>
            <th>PHONE</th>
            <th>TOKEN</th>
          </tr>
          <tr className="active">
            <td>Gabbar</td>
            <td>9876-xxxx</td>
            <td>T-101</td>
          </tr>
        </table>
        <button>NEXT TOKEN</button>
        <h2>Add Patient</h2>
        <form action="">
          <input type="text" placeholder="Patient Name" />
          <input type="text" placeholder="Phone Number" />
          <button>GENERATE TOKEN</button>
        </form>
      </div>
    </main>
  );
};

export default TokenDashboard;
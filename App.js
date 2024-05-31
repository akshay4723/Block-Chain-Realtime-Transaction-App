import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./main.css";

const App = () => {
  const [formData, setFormData] = useState({
    senderuid: '',
    receiveruid: '',
    amount: ''
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get-transactions/');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/do-transaction/', formData);
      fetchData(); // Refresh data after successful POST
      setFormData({ senderuid: '', receiveruid: '', amount: '' }); // Clear form fields
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h1>MAKE TRANSACTION</h1>
      <h2>REALTIME BLOCK CHAIN TRANSACTION IN BLOCK CHAIN</h2>
<form onSubmit={handleSubmit}>
  <label>
    SENDERUID:
    <input
      type="text"
      name="senderuid"
      value={formData.senderuid}
      onChange={handleChange}
    />
  </label>
  <br />
  <label>
    RECEIVERUID:
    <input
      type="text"
      name="receiveruid"
      value={formData.receiveruid}
      onChange={handleChange}
    />
  </label>
  <br />
  <label>
    AMOUNT:
    <input
      type="text"
      name="amount"
      value={formData.amount}
      onChange={handleChange}
    />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>
<h2>LATEST TRANSACTIONS</h2>
            <table>
        <thead>
          <tr>
            <th>UUID</th>
            <th>SENDERUID</th>
            <th>RECEIVERUID</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
          <tr key={item.hash}>
            <td>{item.id}</td>
            <td>{item.senderuid}</td>
            <td>{item.receiveruid}</td>
            <td>{item.amount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

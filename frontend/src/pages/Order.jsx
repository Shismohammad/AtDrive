import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getOrders,
  getOrderById,
  deleteOrder,
  updateOrder,
  createOrder,
} from '../services/api';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editOrder, setEditOrder] = useState({
    userId: '',
    productIds: [],
    totalAmount: '',
  });
  const [order, setOrder] = useState({
    userId: '',
    productIds: [],
    totalAmount: '',
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      setOrders(orders.filter((o) => o._id !== id));
      alert('Order deleted successfully');
    } catch (error) {
      alert('Failed to delete order');
      console.log(error);
    }
  };

  // const handleEdit = (id) => {
  //   setEditing(true);
  //   setEditingId(id);
  // };

  // const handleSave = async () => {
  //   try {
  //     await updateOrder(editingId, editOrder);
  //     setOrders(
  //       orders.map((o) => (o._id === editingId ? { ...o, ...editOrder } : o)),
  //     );
  //     setEditing(false);
  //     alert('Order updated successfully');
  //   } catch (error) {
  //     console.log(error);
  //     alert('Failed to update order');
  //   }
  // };

  return (
    <div
      style={{
        marginTop: '50px',
        padding: '20px',
      }}
    >
      <h2>Orders</h2>

      {/* <input
        type="text"
        style={{ padding: '10px', marginBottom: '20px', marginLeft: '10px' }}
        placeholder="Search by ID"
        onChange={(e) => {
          setSearchId(e.target.value);
        }}
      />

      <button
        onClick={() => handleSearch(searchId)}
        style={{
          background: 'blue',
          color: 'white',
          marginBottom: '20px',
          marginLeft: '10px',
        }}
      >
        Search Order
      </button> */}

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>userId</th>
            <th>Total Amount</th>
            <th>Products</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{orders.indexOf(order) + 1}</td>
              <td>{order._id}</td>
              <td>{order.userId}</td>
              <td>{order.totalAmount}</td>
              <td>{order.productIds.join(', ')}</td>

              <td>
                {/* <button
                  onClick={() => handleEdit(order._id)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </button> */}

                <button
                  onClick={() => handleDelete(order._id)}
                  style={{ background: 'red', color: 'white' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {orders.length === 0 && (
            <tr>
              <td colSpan="5" align="center">
                No Orders Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* {editing && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Order</h3>

          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Name"
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
          />

          <input
            type="number"
            style={{ padding: '10px' }}
            placeholder="Total amount"
            value={order.price}
            onChange={(e) => setOrder({ ...product, price: e.target.value })}
          />

          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Product IDs"
            value={order.description}
            onChange={(e) =>
              setOrder({ ...product, description: e.target.value })
            }
          />

          <button
            onClick={() => handleSave()}
            style={{ marginRight: '10px', background: 'green', color: 'white' }}
          >
            Update
          </button>

          <button
            onClick={() => setEditing(false)}
            style={{ background: 'grey', color: 'white' }}
          >
            Cancel
          </button>
        </div>
      )} */}
    </div>
  );
}

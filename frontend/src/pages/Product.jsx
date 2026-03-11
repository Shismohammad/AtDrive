import { useEffect, useState } from 'react';
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../services/api';

export default function Product() {
  const [adding, setAdding] = useState(false);
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchId, setSearchId] = useState('');
  const [addProduct, setAddProduct] = useState({
    name: '',
    price: '',
    description: '',
  });
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (id) => {
    try {
      const data = await getProductById(id);
      console.log(data);
      // if (false) setProducts(data);
      if (data) {
        setProducts([data]);
      } else {
        alert('Product not found');
        setProducts([]);
      }
    } catch (error) {
      console.log(error);
      alert('Product not found');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
      alert('Product deleted successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to delete product');
    }
  };

  const handleEdit = (id) => {
    setEditing(true);
    setEditingId(id);
  };

  const handleAdd = () => {
    setAdding(true);
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        await updateProduct(editingId, product);
        setProducts(
          products.map((p) => (p._id === editingId ? { ...p, ...product } : p)),
        );
        alert('Product updated successfully');
      } else {
        const newProduct = await createProduct(product);
        setProducts([...products, newProduct]);
        alert('Product added successfully');
      }
      setEditing(false);
      setProduct({ name: '', price: '', description: '' });
    } catch (error) {
      console.log(error);
      alert('Failed to save product');
    }
  };

  const handleAddProduct = async () => {
    try {
      const newProduct = await createProduct(addProduct);
      setProducts([...products, newProduct]);
      alert('Product added successfully');
      setAdding(false);
      setAddProduct({ name: '', price: '', description: '' });
    } catch (error) {
      console.log(error);
      alert('Failed to add product');
    }
  };

  return (
    <div style={{ marginTop: '50px', padding: '20px' }}>
      <h2>Products</h2>

      <input
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
        Search Product
      </button>

      <button
        onClick={() => handleAdd()}
        style={{
          background: 'grey',
          color: 'white',
          marginBottom: '20px',
          marginLeft: '10px',
        }}
      >
        Add Product
      </button>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{products.indexOf(product) + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>

              <td>
                <button
                  onClick={() => handleEdit(product._id)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  style={{ background: 'red', color: 'white' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {products.length === 0 && (
            <tr>
              <td colSpan="5" align="center">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editing && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Product</h3>
          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />

          <input
            type="number"
            style={{ padding: '10px' }}
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />

          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
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
      )}

      {adding && (
        <div style={{ marginTop: '20px' }}>
          <h3>Add Product</h3>
          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Name"
            value={addProduct.name}
            onChange={(e) =>
              setAddProduct({ ...addProduct, name: e.target.value })
            }
          />

          <input
            type="number"
            style={{ padding: '10px' }}
            placeholder="Price"
            value={addProduct.price}
            onChange={(e) =>
              setAddProduct({ ...addProduct, price: e.target.value })
            }
          />

          <input
            type="text"
            style={{ padding: '10px' }}
            placeholder="Description"
            value={addProduct.description}
            onChange={(e) =>
              setAddProduct({ ...addProduct, description: e.target.value })
            }
          />

          <button
            onClick={() => handleAddProduct()}
            style={{ marginRight: '10px', background: 'green', color: 'white' }}
          >
            Save
          </button>

          <button
            onClick={() => setAdding(false)}
            style={{ background: 'grey', color: 'white' }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

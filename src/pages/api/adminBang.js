import { useState, useEffect } from 'react';

function adminBang({ initialData }) {
  const [formData, setFormData] = useState(initialData);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/data', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const updatedData = await response.json();
    setFormData(updatedData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export async function getServerSideProps() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return { props: { initialData: data } };
}

export default adminBang;

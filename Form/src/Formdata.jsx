import { useState } from 'react'

function Formdata() {
    // State variables to store form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    // Function to handle form input changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', formData);
      // You can add your logic to submit the form data to a server or perform other actions here
    };
  
    return (
      <div>
        <h1>Please login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Formdata;
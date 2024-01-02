// components/LoginForm.jsx
import { useState } from 'react';
import { useFormik } from 'formik';

const LoginForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        // Your login logic here, e.g., make a request to your backend
        // If successful, you can navigate to another page
        // Example: await loginRequest(values);
        console.log("in")// Replace '/dashboard' with the desired route
      } catch (error) {
        setError('Invalid credentials. Please try again.');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Login</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

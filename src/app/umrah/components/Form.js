import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Basic form validation function
  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      // Handle form submission (e.g., API call)
    }
  };

  return (
    <div className="col-span-12 border-l-2 border-dashed lg:col-span-3 px-5">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-blue-500">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-10 px-3 border text-sm border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs mt-1">{errors.fullName}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-blue-500">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-blue-500">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-10 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-10 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

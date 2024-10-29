import React from "react";
import toast from "react-hot-toast";
import { leaveApplyUser } from "../../api";
import { Navigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

const ApplyForLeaveStudent = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const formik = useFormik({
    initialValues: {
      id: '',
      reason: '',
      fromDate: '',
      toDate: '',
      leaveType: '',
      requestTo: '',
      status: 'Pending'
    },
    validationSchema: Yup.object({
      reason: Yup.string().required('Reason is required'),
      fromDate: Yup.date().required('From date is required'),
      toDate: Yup.date()
        .required('To date is required')
        .min(Yup.ref('fromDate'), "'To' date cannot be before 'From' date"),
      leaveType: Yup.string().required('Leave type is required'),
      requestTo: Yup.string().required('Please select whom to request'),
    }),
    onSubmit: async (values) => {
      try {
        const randomId = Math.random().toString(36).substr(2, 9);
        
        const updatedValues = { ...values, id: randomId, name: user?.name };
        
        await leaveApplyUser(updatedValues);
        toast.success('Leave Applied Successfully!');
        
        formik.resetForm(); 
      } catch (error) {
        toast.error("Error While Submitting the Form!");
      }
    }
  });

  if (user?.role !== 'student') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-5">Apply Leave</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* Reason Field */}
        <div className="mb-5">
          <label htmlFor="reason" className="block text-sm font-semibold text-gray-700">
            Reason: <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formik.values.reason}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            rows="3"
            required
          />
          {formik.touched.reason && formik.errors.reason ? (
            <div className="text-red-500">{formik.errors.reason}</div>
          ) : null}
        </div>

        {/* Date Range Fields */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="fromDate" className="block text-sm font-semibold text-gray-700">
              From: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={formik.values.fromDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
            {formik.touched.fromDate && formik.errors.fromDate ? (
              <div className="text-red-500">{formik.errors.fromDate}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="toDate" className="block text-sm font-semibold text-gray-700">
              To: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={formik.values.toDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
            {formik.touched.toDate && formik.errors.toDate ? (
              <div className="text-red-500">{formik.errors.toDate}</div>
            ) : null}
          </div>
        </div>

        {/* Leave Type Field */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700">
            Leave Type: <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="leaveType"
                value="Fullday"
                checked={formik.values.leaveType === "Fullday"}
                onChange={formik.handleChange}
                className="form-radio text-green-500 ml-4"
                required
              />
              <span className="ml-2">
                Fullday{" "}
                <span className="text-gray-500 text-sm">(9AM to 6PM)</span>
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="leaveType"
                value="First Half"
                checked={formik.values.leaveType === "First Half"}
                onChange={formik.handleChange}
                className="form-radio text-green-500"
              />
              <span className="ml-2">
                First Half{" "}
                <span className="text-gray-500 text-sm">(9AM to 1PM)</span>
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="leaveType"
                value="Second Half"
                checked={formik.values.leaveType === "Second Half"}
                onChange={formik.handleChange}
                className="form-radio text-green-500"
              />
              <span className="ml-2">
                Second Half{" "}
                <span className="text-gray-500 text-sm">(1PM to 6PM)</span>
              </span>
            </label>
          </div>
          {formik.touched.leaveType && formik.errors.leaveType ? (
            <div className="text-red-500">{formik.errors.leaveType}</div>
          ) : null}
        </div>

        {/* Request To Field */}
        <div className="mb-5">
          <label htmlFor="requestTo" className="block text-sm font-semibold text-gray-700">
            Request To: <span className="text-red-500">*</span>
          </label>
          <select
            id="requestTo"
            name="requestTo"
            value={formik.values.requestTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          >
            <option>Select Request To HOD</option>
            <option>Raman Sir</option>
            <option>Shyam Sir</option>
            <option>Radhika Mam</option>
            <option>Karina Mam</option>
          </select>
          {formik.touched.requestTo && formik.errors.requestTo ? (
            <div className="text-red-500">{formik.errors.requestTo}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForLeaveStudent;
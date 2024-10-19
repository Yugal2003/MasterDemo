// import React from 'react'

// const ApplyForLeaveStudent = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//         <h1 className="text-3xl font-bold">Apply For Leave</h1>
//         {/* Your content for the View Leave Status section */}
//     </div>
//   )
// }

// export default ApplyForLeaveStudent

import React,{useState} from "react";

const ApplyForLeaveStudent = () => {

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    gender: '',
    phone: '',
    address: '',
});

  const [formDataApply, setFormDataApply] = useState({
    reason: '',
    fromDate: '',
    toDate: '',
    leaveType: '',
    // workingOn: '',
    requestTo: '',
    status: 'Pending'
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleChangeApply = (e) => {
    setFormDataApply({ ...formDataApply, [e.target.name]: e.target.value });
};

const handleSubmitApply = (e) => {
    e.preventDefault();
    console.log(formDataApply); // You can handle form submission here
};

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-5">Apply Leave</h1>

      <form onSubmit={handleSubmitApply}>
        {/* Reason Field */}
        <div className="mb-5">
          <label
            htmlFor="reason"
            className="block text-sm font-semibold text-gray-700"
          >
            Reason: <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formDataApply.reason}
            onChange={handleChangeApply}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Date Range Field */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label
              htmlFor="fromDate"
              className="block text-sm font-semibold text-gray-700"
            >
              Date Range: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={formDataApply.fromDate}
              onChange={handleChangeApply}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="toDate"
              className="block text-sm font-semibold text-gray-700"
            >
              To: <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={formDataApply.toDate}
              onChange={handleChangeApply}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
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
                checked={formDataApply.leaveType === "Fullday"}
                onChange={handleChangeApply}
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
                checked={formDataApply.leaveType === "First Half"}
                onChange={handleChangeApply}
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
                checked={formDataApply.leaveType === "Second Half"}
                onChange={handleChangeApply}
                className="form-radio text-green-500"
              />
              <span className="ml-2">
                Second Half{" "}
                <span className="text-gray-500 text-sm">(1PM to 6PM)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Working On Field */}
        {/* <div className="mb-5">
            <label htmlFor="workingOn" className="block text-sm font-semibold text-gray-700">
                Working ON: <span className="text-red-500">*</span>
            </label>
            <select
                id="workingOn"
                name="workingOn"
                value={formDataApply.workingOn}
                onChange={handleChangeApply}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                required
            >
                <option value="" disabled>Select</option>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
            </select>
        </div> */}

        {/* Request To Field */}
        <div className="mb-5">
          <label
            htmlFor="requestTo"
            className="block text-sm font-semibold text-gray-700"
          >
            Request To: <span className="text-red-500">*</span>
          </label>
          <select
            id="requestTo"
            name="requestTo"
            value={formData.requestTo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          >
            <option>Select Request To HOD</option>
            <option>Rakesh Sir</option>
            <option>Shyam Sir</option>
            <option>Kishan Sir</option>
            <option>Rahul Sir</option>
          </select>
        </div>

        {/* Status Field */}
        {/* <div className="mb-5">
          <label
            htmlFor="status"
            className="block text-sm font-semibold text-gray-700"
          >
            Status: <span className="text-red-500">*</span>
          </label>
          <select
            id="status"
            name="status"
            value={formDataApply.status}
            onChange={handleChangeApply}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div> */}

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

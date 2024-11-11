// without formik code will run perfectly


// import React,{useState} from "react";
// import toast from "react-hot-toast";
// import { leaveApplyHOD } from "../../api";
// import { Navigate } from 'react-router-dom';

// const ApplyForLeaveHOD = () => {

//   const [formDataApply, setFormDataApply] = useState({
//     id : '',
//     reason: '',
//     fromDate: '',
//     toDate: '',
//     leaveType: '',
//     requestTo: '',
//     status: 'Pending'
// });

// const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user.name);
  
//   if (user?.role !== 'hod') {
//     return <Navigate to="/login" />;
//   }

//   const handleChangeApply = (e) => {
//     setFormDataApply({ ...formDataApply, [e.target.name]: e.target.value });
// };

// const handleSubmitApply = async(e) => {
//     e.preventDefault();

//     if (new Date(formDataApply.fromDate) > new Date(formDataApply.toDate)) {
//       toast.error("'From' date cannot be later than the 'To' date.");
//       return;
//     }

//     // Generate a random ID
//     const randomId = Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
  
//     // Include the generated ID in the form data
//     const updatedFormData = { ...formDataApply, id: randomId, name : user.name };
//     try {
//       await leaveApplyHOD(updatedFormData); // Send formData including the random ID
//       toast.success('Leave Applied Successfully!');
      
//       // Reset the form fields
//       setFormDataApply({
//         id: '',
//         reason: '',
//         fromDate: '',
//         toDate: '',
//         leaveType: '',
//         requestTo: '',
//         status: 'Pending'
//       });
//     } catch (error) {
//       toast.error("Error While Submitting the Form!");
//     }
// };

//   return (
//     <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-green-600 mb-5">Apply Leave</h1>

//       <form onSubmit={handleSubmitApply}>
//         {/* Reason Field */}
//         <div className="mb-5">
//           <label
//             htmlFor="reason"
//             className="block text-sm font-semibold text-gray-700"
//           >
//             Reason: <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="reason"
//             name="reason"
//             value={formDataApply.reason}
//             onChange={handleChangeApply}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//             rows="3"
//             required
//           ></textarea>
//         </div>

//         {/* Date Range Field */}
//         <div className="grid grid-cols-2 gap-4 mb-5">
//           <div>
//             <label
//               htmlFor="fromDate"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Date Range: <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               id="fromDate"
//               name="fromDate"
//               value={formDataApply.fromDate}
//               onChange={handleChangeApply}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="toDate"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               To: <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               id="toDate"
//               name="toDate"
//               value={formDataApply.toDate}
//               onChange={handleChangeApply}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//               required
//             />
//           </div>
//         </div>

//         {/* Leave Type Field */}
//         <div className="mb-5">
//           <label className="block text-sm font-semibold text-gray-700">
//             Leave Type: <span className="text-red-500">*</span>
//           </label>
//           <div className="flex flex-col space-x-4 mt-1">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="Fullday"
//                 checked={formDataApply.leaveType === "Fullday"}
//                 onChange={handleChangeApply}
//                 className="form-radio text-green-500 ml-4"
//                 required
//               />
//               <span className="ml-2">
//                 Fullday{" "}
//                 <span className="text-gray-500 text-sm">(9AM to 6PM)</span>
//               </span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="First Half"
//                 checked={formDataApply.leaveType === "First Half"}
//                 onChange={handleChangeApply}
//                 className="form-radio text-green-500"
//               />
//               <span className="ml-2">
//                 First Half{" "}
//                 <span className="text-gray-500 text-sm">(9AM to 1PM)</span>
//               </span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="Second Half"
//                 checked={formDataApply.leaveType === "Second Half"}
//                 onChange={handleChangeApply}
//                 className="form-radio text-green-500"
//               />
//               <span className="ml-2">
//                 Second Half{" "}
//                 <span className="text-gray-500 text-sm">(1PM to 6PM)</span>
//               </span>
//             </label>
//           </div>
//         </div>

//         {/* Request To Field */}
//         <div className="mb-5">
//           <label htmlFor="requestTo" className="block text-sm font-semibold text-gray-700">
//             Request To: <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="requestTo"
//             name="requestTo"
//             value={formDataApply.requestTo}
//             onChange={handleChangeApply}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//             required
//           >
//             <option>Select Request To HOD</option>
//             <option>Admin</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyForLeaveHOD;


// apply formik in code // current code


// import React, { useState } from "react";
// import { useFormik } from "formik";
// import toast from "react-hot-toast";
// import { leaveApplyHOD } from "../../api";
// import { Navigate } from 'react-router-dom';

// const ApplyForLeaveHOD = () => {

//   const user = JSON.parse(localStorage.getItem('user'));

//   // Initialize Formik hook outside of any conditional logic
//   const formik = useFormik({
//     initialValues: {
//       id: '',
//       reason: '',
//       fromDate: '',
//       toDate: '',
//       leaveType: '',
//       requestTo: '',
//       status: 'Pending'
//     },
//     onSubmit: async (values) => {
//       // Check if 'From' date is later than 'To' date
//       if (new Date(values.fromDate) > new Date(values.toDate)) {
//         toast.error("'From' date cannot be later than the 'To' date.");
//         return;
//       }

//       // Generate a random ID
//       const randomId = Math.random().toString(36).substr(2, 9);

//       // Update form values with ID and user name
//       const updatedFormData = { ...values, id: randomId, name: user.name };

//       try {
//         await leaveApplyHOD(updatedFormData);
//         toast.success('Leave Applied Successfully!');
//         formik.resetForm(); // Reset form values after successful submission
//       } catch (error) {
//         toast.error("Error While Submitting the Form!");
//       }
//     },
//   });

//   if (user?.role !== 'hod') {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-green-600 mb-5">Apply Leave</h1>

//       <form onSubmit={formik.handleSubmit}>
//         {/* Reason Field */}
//         <div className="mb-5">
//           <label
//             htmlFor="reason"
//             className="block text-sm font-semibold text-gray-700"
//           >
//             Reason: <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="reason"
//             name="reason"
//             value={formik.values.reason}
//             onChange={formik.handleChange}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//             rows="3"
//             required
//           ></textarea>
//         </div>

//         {/* Date Range Fields */}
//         <div className="grid grid-cols-2 gap-4 mb-5">
//           <div>
//             <label
//               htmlFor="fromDate"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Date Range: <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               id="fromDate"
//               name="fromDate"
//               value={formik.values.fromDate}
//               onChange={formik.handleChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="toDate"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               To: <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               id="toDate"
//               name="toDate"
//               value={formik.values.toDate}
//               onChange={formik.handleChange}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//               required
//             />
//           </div>
//         </div>

//         {/* Leave Type Field */}
//         <div className="mb-5">
//           <label className="block text-sm font-semibold text-gray-700">
//             Leave Type: <span className="text-red-500">*</span>
//           </label>
//           <div className="flex flex-col space-x-4 mt-1">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="Fullday"
//                 checked={formik.values.leaveType === "Fullday"}
//                 onChange={formik.handleChange}
//                 className="form-radio text-green-500 ml-4"
//                 required
//               />
//               <span className="ml-2">Fullday <span className="text-gray-500 text-sm">(9AM to 6PM)</span></span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="First Half"
//                 checked={formik.values.leaveType === "First Half"}
//                 onChange={formik.handleChange}
//                 className="form-radio text-green-500"
//               />
//               <span className="ml-2">First Half <span className="text-gray-500 text-sm">(9AM to 1PM)</span></span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="leaveType"
//                 value="Second Half"
//                 checked={formik.values.leaveType === "Second Half"}
//                 onChange={formik.handleChange}
//                 className="form-radio text-green-500"
//               />
//               <span className="ml-2">Second Half <span className="text-gray-500 text-sm">(1PM to 6PM)</span></span>
//             </label>
//           </div>
//         </div>

//         {/* Request To Field */}
//         <div className="mb-5">
//           <label htmlFor="requestTo" className="block text-sm font-semibold text-gray-700">
//             Request To: <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="requestTo"
//             name="requestTo"
//             value={formik.values.requestTo}
//             onChange={formik.handleChange}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
//             required
//           >
//             <option>Select Request To HOD</option>
//             <option>Admin</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyForLeaveHOD;






// after authguard code



import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { leaveApplyHOD } from "../../api";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ApplyForLeaveHOD = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.id);
  const userId = user.id;

  const formik = useFormik({
    initialValues: {
      id: '',
      reason: '',
      fromDate: '',
      toDate: '',
      leaveType: '',
      requestTo: 'Admin',
      status: 'Pending'
    },
    onSubmit: async (values) => {
      if (new Date(values.fromDate) > new Date(values.toDate)) {
        toast.error("'From' date cannot be later than the 'To' date.");
        return;
      }

      const randomId = Math.random().toString(36).substr(2, 9);

      const updatedFormData = { ...values, id: randomId, name: user.id };

      try {
        await leaveApplyHOD(updatedFormData);
        toast.success('Leave Applied Successfully!');
        formik.resetForm(); 
        navigate(`/hod-dashboard/:${userId}`)
      } catch (error) {
        toast.error("Error While Submitting the Form!");
      }
    },
  });

  if (user?.role !== 'hod') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-5">Apply Leave</h1>

      <form onSubmit={formik.handleSubmit}>
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
            value={formik.values.reason}
            onChange={formik.handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Date Range Fields */}
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
              value={formik.values.fromDate}
              onChange={formik.handleChange}
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
              value={formik.values.toDate}
              onChange={formik.handleChange}
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
                checked={formik.values.leaveType === "Fullday"}
                onChange={formik.handleChange}
                className="form-radio text-green-500 ml-4"
                required
              />
              <span className="ml-2">Fullday <span className="text-gray-500 text-sm">(9AM to 6PM)</span></span>
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
              <span className="ml-2">First Half <span className="text-gray-500 text-sm">(9AM to 1PM)</span></span>
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
              <span className="ml-2">Second Half <span className="text-gray-500 text-sm">(1PM to 6PM)</span></span>
            </label>
          </div>
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
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            required
          >
            {/* <option>Select Request To HOD</option> */}
            <option value="Admin">Admin</option>
          </select>
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

export default ApplyForLeaveHOD;
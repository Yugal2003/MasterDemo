import React from 'react'

const ManageStudentAdmin = () => {
  return (
    <div class="container mx-auto p-4">
      <div class="overflow-x-auto">
        <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Students Management List :-</h1>
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-2 py-2 border border-gray-300 text-left">Name</th>
              <th class="px-2 py-2 border border-gray-300 text-left">ID</th>
              <th class="px-2 py-2 border border-gray-300 text-left">Departmens</th>
              <th class="px-2 py-2 border border-gray-300 text-left">Gender</th>
              <th class="px-1 py-2 border border-gray-300 text-left">Role</th>
              <th class="px-0 py-2 border border-gray-300 text-left">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-1 py-2 border border-gray-300">Out of city</td>
              <td class="px-4 py-2 border border-gray-300">Not Assigned</td>
              <td class="px-4 py-2 border border-gray-300">Fullday</td>
              <td class="px-4 py-2 border border-gray-300">07/10/2024</td>
              <td class="px-4 py-2 border border-gray-300">07/10/2024</td>
              <td class="px-4 py-2 border border-gray-300">
                <button class="bg-green-500 text-white px-3 py-1 rounded">Approved</button>
              </td>
              <td class="px-4 py-2 border border-gray-300">
                <button class="bg-blue-500 text-white px-3 py-1 rounded mr-1">+</button>
                <button class="bg-black text-white px-3 py-1 rounded">💬</button>
              </td>
            </tr>
            <tr>
              <td class="px-1 py-2 border border-gray-300">Health is not well</td>
              <td class="px-4 py-2 border border-gray-300">Not Assigned</td>
              <td class="px-4 py-2 border border-gray-300">Secondhalf</td>
              <td class="px-4 py-2 border border-gray-300">18/09/2024</td>
              <td class="px-4 py-2 border border-gray-300">18/09/2024</td>
              <td class="px-4 py-2 border border-gray-300">
                <button class="bg-green-500 text-white px-3 py-1 rounded">Approved</button>
              </td>
              <td class="px-0 py-2 border border-gray-300">
                <button class="bg-blue-500 text-white px-3 py-1 rounded mr-1">+</button>
                <button class="bg-black text-white px-3 py-1 rounded">💬</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageStudentAdmin
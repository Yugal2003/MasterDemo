import React from 'react';

const ViewLeaveBalanceStudent = () => {
    return (
        <div className='flex flex-col'>
            {/* Students */}
            <div class="container mx-auto p-4">
                <div class="overflow-x-auto">
                    <h1 className='mt-20 mb-6 flex justify-left items-center text-2xl font-bold'>Students Leave Report :-</h1>
                    <table class="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="px-2 py-2 border border-gray-300 text-left">ID</th>
                                <th class="px-2 py-2 border border-gray-300 text-left">Total Leave</th>
                                <th class="px-2 py-2 border border-gray-300 text-left">Available Leave</th>
                                <th class="px-1 py-2 border border-gray-300 text-left">Used Leave</th>
                                <th class="px-0 py-2 border border-gray-300 text-left">Year</th>
                                <th class="px-0 py-2 border border-gray-300 text-left">Total Working Days</th>
                                <th class="px-0 py-2 border border-gray-300 text-left">Attendance Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-2 border border-gray-300">request.name</td>
                                <td className="px-2 py-2 border border-gray-300">request.id</td>
                                <td className="px-2 py-2 border border-gray-300">request.fromDate</td>
                                <td className="px-2 py-2 border border-gray-300">request.toDate</td>
                                <td className="px-2 py-2 border border-gray-300">request.requestTo</td>                                        
                                <td className="px-2 py-2 border border-gray-300">request.requestTo</td>
                                <td className="px-2 py-2 border border-gray-300">request.requestTo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewLeaveBalanceStudent;
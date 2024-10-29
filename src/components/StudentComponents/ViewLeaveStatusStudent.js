import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const ViewLeaveStatusStudent = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [totalLeave, setTotalLeave] = useState(0);
  const [balanceLeave, setBalanceLeave] = useState(0);
  const [error, setError] = useState('');

  const API = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const response = await API.get(`/userLeaveRequests?name=${user.name}`);
        const filteredRequests = response.data.filter(
          (request) => request.name === user.name
        );
        setLeaveRequests(filteredRequests);

        const leaveDataResponse = await API.get('/userLeaveRequests');
        const totalLeaveData = leaveDataResponse.data.find(item => item.totalLeave);
        const balanceLeaveData = leaveDataResponse.data.find(item => item.balanceLeave);

        if (totalLeaveData && balanceLeaveData) {
          setTotalLeave(totalLeaveData.totalLeave);
          setBalanceLeave(balanceLeaveData.balanceLeave - filteredRequests.length);
          if (balanceLeave <= 0) {
            setBalanceLeave(0);
          }
        } else {
          setError('No Leave Data Available!');
        }
      } catch (err) {
        setError('Error fetching leave requests');
      }
    };

    fetchLeaveData();
  }, []);

  const usedLeaves = leaveRequests.length;
  const leavePercentage = totalLeave > 0 ? ((totalLeave - usedLeaves) / totalLeave) * 100 : 0;

  const columns = useMemo(() => [
    {
      Header: 'No',
      accessor: (row, i) => i + 1, 
    },
    {
      Header: 'Reason',
      accessor: 'reason',
    },
    {
      Header: 'Leave Type',
      accessor: 'leaveType',
    },
    {
      Header: 'Leave From',
      accessor: 'fromDate',
    },
    {
      Header: 'Leave To',
      accessor: 'toDate',
    },
    {
      Header: 'Request To',
      accessor: 'requestTo',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <span
          className={`px-2 py-1 rounded ${
            value === 'Pending'
              ? 'bg-gray-400'
              : value === 'Approved'
              ? 'bg-green-400'
              : value === 'Reject'
              ? 'bg-red-400'
              : ''
          }`}
        >
          {value}
        </span>
      ),
    },
  ], []);

  const tableInstance = useTable({ columns, data: leaveRequests });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="overflow-x-auto">
        <div className='mb-2 flex flex-row justify-between items-center w-[95%] mx-auto'>
          <h1 className='flex justify-left items-center text-2xl font-bold'>Leave List:</h1>
        </div>
        
        <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-2 py-2 border border-gray-300 text-left"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No leave requests found.
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td
                        {...cell.getCellProps()}
                        className="px-2 py-2 border border-gray-300"
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeaveStatusStudent;
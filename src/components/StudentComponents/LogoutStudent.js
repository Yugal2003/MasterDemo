import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutStudent = ({ onCancel }) => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/'); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-4">Are you sure you want to logout?</h2>
                <div className="flex justify-end space-x-4">
                    <button 
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button 
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        onClick={handleLogout} 
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutStudent;
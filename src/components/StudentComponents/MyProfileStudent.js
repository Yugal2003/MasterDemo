import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import { updateUserData } from "../../api"; 
import { FaRegUser } from "react-icons/fa";

const MyProfileStudent = () => {
    const [userDataShow, setUserDataShow] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        id: '',
        gender: '',
        phone: '',
        address: '',
        image: '', 
    });

    const user = JSON.parse(localStorage.getItem('user'));    
    useEffect(() => {
        if (user) {
            setFormData({
                email: user.email,
                id: user.id,
                gender: user.gender,
                phone: user.phone,
                address: user.address,
                image: user.image, 
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: reader.result,  
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedUser = {
                ...user, 
                ...formData 
            };
            await updateUserData(user, formData);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            toast.success('Profle updated successfully!');
        } 
        catch (error) {
            toast.error('Update failed.');
        }
        setUserDataShow(false);
    };
    const changeUserProfile = () => {
        setUserDataShow(!userDataShow);
    };

    return (
        <div className="flex flex-col mt-4 md:mt-12 lg:mt-16 px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="underline text-2xl md:text-3xl font-bold flex justify-center items-center mt-4">
                Welcome Profile Page
            </h1>
            <h1 className="items-center border-2 border-black border-b-4 text-lg md:text-xl lg:text-2xl font-medium flex pl-4 md:pl-8 mt-6 md:mt-8">
                <FaRegUser/>Profile Info
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
                <div className="flex justify-center items-center">
                    <img 
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full" 
                        src={formData.image} 
                        alt="user_image" 
                    />
                    {userDataShow && (
                        <input 
                            className="w-full mt-4 md:mt-8" 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    )}
                </div>

                {userDataShow ? (
                    <div className="w-full md:w-1/2 lg:w-2/3">
                        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row items-start gap-4">
                                <label className="font-medium">Email:</label>
                                <input
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Gender:</label>
                                <br />
                                <input
                                    className="ml-2"
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                />
                                <label>Male</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                />
                                <label>Female</label>
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Mobile :</label>
                                <input
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-4 pt-4">
                                <label className="font-medium">Address :</label>
                                <textarea
                                    cols={25}
                                    rows={3}
                                    className="border px-2 py-1 rounded-md w-full md:w-2/3"
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-24 py-2 mt-4 bg-blue-500 text-white rounded-md">
                                Update
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="pb-8 flex flex-col gap-4 mt-4 md:mt-0 md:ml-12">
                        <div className="flex flex-row gap-4">
                            {/* <label className="font-medium">User ID :</label>
                            <p>{user.id}</p> */}
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Email :</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Gender :</label>
                            <p>{user.gender}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Mobile :</label>
                            <p>{user.phone}</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <label className="font-medium">Address :</label>
                            <p>{user.address}</p>
                        </div>
                        <button onClick={changeUserProfile} className="w-16 py-2 mt-4 bg-green-500 text-white rounded-md">
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfileStudent;
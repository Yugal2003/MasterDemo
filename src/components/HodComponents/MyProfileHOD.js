import React,{useState,useEffect}from "react";
// import { useParams } from 'react-router-dom';
import { updateUserData } from "../../api";
import { toast } from 'react-hot-toast';  

const MyProfileHOD = () => {
    const [userDataShow, setUserDataShow] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        id: '',
        gender: '',
        phone: '',
        address: '',
    });

    // const { studentId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                id: user.id,
                gender: user.gender,
                phone: user.phone,
                address: user.address,
            });
        }
    }, [user]);



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserData(formData);
            toast.success('User updated successfully!');
        } catch (error) {
            if (error.message === 'Email already registered') {
                toast.error('Email is already registered!');
            } else {
                toast.error('Update failed.');
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const changeUserProfile = () => {
        setUserDataShow(!userDataShow);
    };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold flex flex-col justify-center items-center mt-4">
        Welcome Profile Page
      </h1>
      <h1 className="border-2 border-black text-2xl font-medium flex flex-col items-start pl-8 mt-8">
        Profile Info
      </h1>

      <div className="flex flex-row gap-20 mt-8">
        <div>
          <img className="goal_circle" src={`${user.image}`} alt="user_image" />
        </div>
        {userDataShow ? (
          <div>
            <form onSubmit={handleFormSubmit} className="userData_info">
              <div className="flex flex-row gap-4 pb-4">
                <label>User ID :</label>
                <input
                  type="number"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row gap-4">
                <label>Name :</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row text-center pt-4 gap-1">
                <label>Gender :</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label className="px-1">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label className="pl-1">Female</label>
              </div>
              <div className="flex flex-row gap-4 pt-4">
                <label>Mobile :</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row gaps items-center">
                <label>Address :</label>
                <textarea
                  cols={25}
                  rows={3}
                  className="border"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
            <button onClick={changeUserProfile} className="buttons">
              Update
            </button>
          </div>
        ) : (
          <div className="mt-2">
            <div className="flex flex-row gap-4 pb-4">
              <label>User ID :</label>
              <p>{user.id}</p>
            </div>
            <div className="flex flex-row gap-4">
              <label>Name :</label>
              <p>{user.name}</p>
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <label>Gender :</label>
              <p>{user.gender}</p>
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <label>Mobile :</label>
              <p>{user.phone}</p>
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <label>Address :</label>
              <p>{user.address}</p>
            </div>
            <button onClick={changeUserProfile} className="buttons">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfileHOD;
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../../store/actions/userActions";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.userData);
  const [previewImg, setPreviewImg] = useState(null);
  const fileInputRef = useRef(); // Reference to file input

  useEffect(() => {
    if (user) {
      reset(user);
      if (user.userImage) {
        setPreviewImg(user.userImage); // Load existing image
      }
    }
  }, [user, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
        // console.log("Base64 Image:", reader.result); 
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      navigate(-1);
    }
  };

  const onSubmit = (updatedData) => {
    updatedData.userImage = previewImg; 
    // console.log("Updated Data:", updatedData);
    dispatch(asyncUpdateUser(updatedData, user.id));
    toast.success("Profile updated successfully");
    navigate(-1);
  };

  return (
    <div
  onClick={handleBackdropClick}
  className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50 px-4"
>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-xl bg-slate-800 p-8 rounded-3xl shadow-2xl space-y-6 border border-blue-900/20 transition duration-300"
  >
    <h2 className="text-3xl font-bold text-blue-400 text-center tracking-wide">
      Edit Profile
    </h2>

    {/* Profile Image Upload (clickable) */}
    <div className="flex flex-col gap-2 items-center">
      <input
        type="file"
        accept="image/*"
        id="userImage"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />
      <img
        src={previewImg || "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"}
        alt="Preview"
        onClick={() => fileInputRef.current.click()}
        className="w-26 h-26 rounded-full object-cover border-4 border-blue-500 shadow-lg cursor-pointer hover:scale-105 transition duration-300"
      />
      <p className="text-sm text-slate-400">Click image to upload</p>
    </div>

    {/* Input Group */}
    {[
      { label: "First Name", name: "firstname" },
      { label: "Last Name", name: "lastname" },
      { label: "Username", name: "username" },
      { label: "Email", name: "email", type: "email" },
      { label: "Change Password", name: "password", type: "password" },
    ].map(({ label, name, type = "text" }) => (
      <div key={name} className="flex flex-col gap-1">
        <label htmlFor={name} className="text-sm text-slate-300 font-medium">
          {label}
        </label>
        <input
          {...register(name, { required: `${label} is required` })}
          type={type}
          id={name}
          placeholder={label}
          className="p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:ring-2 focus:ring-blue-500 transition"
        />
        {errors[name] && (
          <span className="text-red-500 text-sm">{errors[name].message}</span>
        )}
      </div>
    ))}

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-gradient-to-tr from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-6 py-2 rounded-xl text-white font-semibold tracking-wide transition duration-300 shadow-md hover:shadow-lg active:scale-95"
      >
        💾 Save Changes
      </button>
    </div>
  </form>
</div>

  );
};

export default EditProfile;

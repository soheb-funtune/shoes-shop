"use client";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedData = new FormData();
    try {
      if (formData?.name && formData?.description && formData?.price) {
        formatedData.append("name", formData?.name);
        formatedData.append("description", formData?.description);
        formatedData.append("price", formData?.price);
        formatedData.append("image", formData?.image);
        //   console.log({ formData });
        const res = await axios({
          method: "post",
          url: "http://localhost:3000/api/add",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formatedData,
        });
      } else {
        alert("Please fill all fields!");
      }
    } catch (err) {
      console.log({ err });
    }
  };
  return (
    <div className="min-h-[100vh] min-w-[100vw] flex flex-col    items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[100%] sm:w-[300px] bg-red-300 px-6 py-8 rounded-sm"
      >
        <h2> AddProduct</h2>
        <div className="flex flex-col mt-5">
          Name
          <input
            className="px-2 py-1 mt-1"
            type="text"
            name="name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col ">
          Description
          <input
            className="px-2 py-1 mt-1"
            type="text"
            name="description"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col ">
          price
          <input
            className="px-2 py-1 mt-1"
            type="text"
            name="price"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col ">
          Image
          <input
            className="px-2 py-1 mt-1"
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.files?.[0] })
            }
          />
        </div>
        <button className="bg-red-400 px-4 py-2 mt-4 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

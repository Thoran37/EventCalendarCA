import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  function handle(obj) {
    fetch("http://localhost:4000/Events", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.status === 201) {
        alert("Event registered")
        navigate('/admindashboard/goldfish');
      }
    });
  }

  return (
    <div className="container-fluid m-3">
      <form onSubmit={handleSubmit(handle)} className="d-grid">
        <h1 className="text-primary-emphasis text-center mx-auto text-decoration-underline mb-3">
          Event Registration Form
        </h1>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("title", { required: true })}
            />
            {errors.firstname?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Start date</label>
            <input
              type="date"
              className="form-control w-75"
              {...register("startdate", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Faculty Coordinator 1</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("faccor1", { required: true })}
            />
            {errors.lastname?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">End date</label>
            <input
              type="date"
              className="form-control w-75"
              {...register("enddate", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Faculty Coordinator 2</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("faccor2", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Time</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("time", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 1</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("stucor1", { required: true })}
            />
            {errors.lastname?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Handles</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("handles", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 2</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("stucor2", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Registration Link</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("reglink", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 1 Phone number</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("stucorph1", { required: true, maxLength: 10, minLength: 10 })}
            />
            {errors.phone?.type === "required" && (
              <p className="text-danger m-0">Required</p>
            )}
          </div>
          <div className="col-6">
            <label className="form-label">Team Size</label>
            <input
              type="email"
              className="form-control w-75"
              {...register("teamsize", { required: false })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Student Coordinator 2 Phone number</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("stucorph2", { required: false, maxLength: 10, minLength: 10 })}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Logo Link</label>
            <input
              type="text"
              className="form-control w-75"
              {...register("imglink", { required: true })}
            />
          </div>
          <div className="col-12">
            <button className='btn btn-info mb-3 mx-auto d-block mt-3'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;

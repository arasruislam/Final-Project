import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const photoURL = data.photoURL;
    const name = data.name;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        updateUser(name, photoURL)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user created successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>

      <div className="hero mt-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-500">name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className=" text-red-500">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-500">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className=" text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-500">
                    password must be minimum 8 character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className=" text-red-500">
                    password must be not more then 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-500">
                    password must be one lowercase, one number, one uppercase,
                    one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
            <p className="ml-8">
              <small>
                New Here? <Link to="/login">login now</Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

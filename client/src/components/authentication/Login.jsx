import React from "react";
import { Link, Navigate } from "react-router-dom";

import Name from "../../assets/Name.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	checkUserAsync,
	selectError,
	selectLoggedInUser,
} from "../../state/auth/authSlice";

const Login = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectError);
	const user = useSelector(selectLoggedInUser);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<>
			{user && <Navigate to="/productlist" replace={true}></Navigate>}
			<div className="flex flex-col items-center justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Link to="/">
						<img
							className="w-auto h-10 mx-auto"
							src={Name}
							alt="Your Company"
						/>
					</Link>
					<h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						noValidate
						onSubmit={handleSubmit((data) => {
							dispatch(
								checkUserAsync({ email: data.email, password: data.password })
							);
						})}
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
											message: "email is not valid",
										},
									})}
									type="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
								/>
								{errors.email && (
									<p className="text-red-500">{errors.email.message}</p>
								)}
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<Link
										to="/"
										className="font-semibold text-black hover:text-gray-500"
									>
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									{...register("password", {
										required: "Invalid Password",
									})}
									type="password"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
								/>
								{errors.password && (
									<p className="text-red-500">{errors.password.message}</p>
								)}
							</div>
							{error?.message && (
								<p className="text-red-500">{error.message}</p>
							)}
						</div>

						<div>
							<button
								type="submit"
								className="flex hover:text-black w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-sm text-center text-gray-500">
						Don't have any account?
						<Link
							to="/signUp"
							className="font-semibold leading-6 text-black hover:text-gray-500"
						>
							Sign Up
						</Link>
					</p>
				</div>
				{/* <p>user:zahid password:zahid123</p> */}
			</div>
		</>
	);
};

export default Login;

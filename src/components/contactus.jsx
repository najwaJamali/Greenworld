import { Component, React, useState, useEffect } from "react";
import "./contactus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios'
import { Link } from "react-router-dom";

function Contactus() {

	const [id, setId] = useState("");


	const [email, setEmail] = useState("");

	const [message, setmessage] = useState("");

	const [employees, setUsers] = useState([]);




	useEffect(() => {

		(async () => await Load())();

	}, []);




	async function Load() {

		const result = await axios.get("http://127.0.0.1:8000/api/user");

		setUsers(result.data);

		console.log(result.data);

	}




	async function save(event) {

		event.preventDefault();

		try {

			await axios.post("http://127.0.0.1:8000/api/save", {


				email: email,

				message: message,

			});

			alert("Employee Registation Successfully");

			setId("");


			setEmail("");

			setmessage("");

			Load();

		} catch (err) {

			alert("User Registation Failed");

		}

	}
	return (

		<div className="contactus">

			<section class="text-center text-lg-start">


				<div class="container py-4">
					<div class="row g-0 align-items-center">
						<div class="col-lg-6 mb-5 mb-lg-0">
							<div class="card cascading-right" style={{
								background: 'hsla(0, 0%, 100%, 0.55)',
								backdropFilter: 'blur(30px)'
							}}

							>
								<div class="card-body p-5 shadow-5 text-center">
									<h2 class="fw-bold mb-5">Send a message </h2>
									<form>
										<input

											type="text"

											class="form-control"

											id="users_id"

											hidden

											value={id}

											onChange={(event) => {

												setId(event.target.value);

											}}

										/>


										<div class="form-outline mb-4">
											<label class="form-label" for="form3Example3">Email address</label>
											<input

												type="text"

												class="form-control"

												id="email"

												value={email}

												onChange={(event) => {

													setEmail(event.target.value);

												}}

											/>
										</div>

										<div class="form-outline mb-4">
											<label class="form-label" for="form3Example4">message </label>
											<input

												type="text"

												class="form-control"

												id="message"

												value={message}

												onChange={(event) => {

													setmessage(event.target.value);

												}}

											/>
										</div>



										<button type="submit" class="btn btn-primary btn-block mb-4" onClick={save}>
											send
										</button>
										<p>Do not hesitate to contact us , we are here for you &#128522;</p>


									</form>
								</div>
							</div>
						</div>

						<div class="col-lg-6 mb-5 mb-lg-0">
							<img src="/22214.jpg" class="w-100 rounded-4 shadow-4"
								alt="" />
						</div>
					</div>
				</div>

			</section>


		</div>

	);

}

export default Contactus;
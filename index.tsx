import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const app = new Elysia()
    .use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHtml>
				<body class="flex flex-col space-y-24 p-24 w-full h-screen text-slate-300 antialiased">

					{/* <p class="font-sans text-7xl text-slate-300 font-bold col-start-1 col-span-2">Who are you?</p>
					<button hx-get="/user" hx-trigger="click" hx-target="#register" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-auto w-4/5 rounded-full col-start-1 col-span-1">
						<p class="my-10"><i class="fa-solid fa-user"></i>USER</p>
					</button>

					<button hx-get="/tech" hx-trigger="click" hx-target="#register" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-auto w-4/5 rounded-full col-start-2 col-span-2">
						<p class="my-10"><i class="fa-solid fa-wrench"></i>TECH</p>
					</button>

					<button class="g-signin2 bg-gradient-to-r from-cyan-500 to-blue-500  h-auto w-4/5 rounded-full col-start-1 col-span-1" data-onsuccess="onSignIn"></button>

					<button class="g-signin2 bg-gradient-to-r from-cyan-500 to-blue-500  h-auto w-4/5 rounded-full col-start-2 col-span-2" data-onsuccess="onSignIn"></button> */}

					<h1 class="text-7xl italic text-black mt-20"><span class="p-8 pl-14 pr-28 bg-slate-300 rounded-full">TechSwift</span></h1>
					<h2 class="text-5xl italic">Delivering on-demand IT Services to your doorstep</h2>
					<button class="g-signin2 rounded-full" data-onsuccess="onSignIn"></button>

				</body>
			</BaseHtml>
		)
	)
	.get("/tech", () =>
	<div id="tech-register" hx-swap="outerHTML settle:0.5s" class="fade-me-in w-full h-screen justify-items-center grid grid-cols-2 m-20 py-40">

		<p class="font-sans text-slate-300 font-bold col-start-1 col-span-2 my-auto text-7xl">Register</p>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="fname" name="fname" placeholder="First Name"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="lname" name="lname" placeholder="Last Name"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="email" name="email" placeholder="Email"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="password" name="password" placeholder="Password"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="cpassword" name="cpassword" placeholder="Confirm Password"></input>

		<button hx-get="/" hx-trigger="click" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-3/5 w-4/5 rounded-full col-start-1 col-span-1">
			<p class="my-10">Back</p>
		</button>
		<button hx-get="/submit" hx-trigger="click" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-3/5 w-4/5 rounded-full col-start-2 col-span-2">
			<p class="my-10">Submit</p>
		</button>

	</div>)

	.get("/user", () =>
	<div id="user-register" hx-swap="outerHTML settle:0.5s" class="fade-me-in w-full h-screen justify-items-center grid grid-cols-2 m-20 py-40">
		<p class="font-sans text-slate-300 font-bold col-start-1 col-span-2 my-auto text-7xl">Register</p>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="fname" name="fname" placeholder="First Name"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="lname" name="lname" placeholder="Last Name"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="email" name="email" placeholder="Email"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="password" name="password" placeholder="Password"></input>
		<input class="text-center rounded-full h-3/4 w-full col-start-1 col-span-2" type="text" id="cpassword" name="cpassword" placeholder="Confirm Password"></input>

		<button hx-get="/" hx-trigger="click" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-3/5 w-4/5 rounded-full col-start-1 col-span-1">
			<p class="my-10">Back</p>
		</button>
		<button hx-get="/submit" hx-trigger="click" class="bg-gradient-to-r from-cyan-500 to-blue-500  h-3/5 w-4/5 rounded-full col-start-2 col-span-2">
			<p class="my-10">Submit</p>
		</button>

	</div>)

	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);


`Defining base HTML as a variable.  Children variable turns BaseHtml into a component`
const BaseHtml = ({children}: elements.Children) =>
`<!DOCTYPE html>
<html class="bg-black">
<head>
<title>TechSwift - On Domand IT</title>
<script src="https://unpkg.com/htmx.org@1.9.7"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://kit.fontawesome.com/0902ff1ba2.js" crossorigin="anonymous"></script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="668696165605-lfsea9h6h6hl3hoofbdhp7k6cmli87rl.apps.googleusercontent.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap" rel="stylesheet">
<style>body {font-family: 'Open Sans', sans-serif;}</style>
</head>

${children}`
;

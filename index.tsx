import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const app = new Elysia()
    .use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHtml>
				<body class="flex w-full h-screen justify-center items-center text-slate-300 font-sans text-4xl font-bold antialiased">
					<div id="register" hx-swap="outerHTML swap:0.25s" class="fade-me-out w-full h-1/5 justify-items-center grid grid-cols-2 gap-y-40 m-20">
						<p class="font-sans text-7xl text-slate-300 font-bold col-start-1 col-span-2">Who are you?</p>
						<button hx-get="/user" hx-trigger="click" hx-target="#register" class="bg-purple-600 h-auto w-4/5 rounded-full col-start-1 col-span-1">
							<p class="my-10"><i class="fa-solid fa-user"></i>USER</p>
						</button>
						<button hx-get="/tech" hx-trigger="click" hx-target="#register" class="bg-purple-700 h-auto w-4/5 rounded-full col-start-2 col-span-2">
							<p class="my-10"><i class="fa-solid fa-wrench"></i>TECH</p>
						</button>
					</div>
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

		<button hx-get="/" hx-trigger="click" class="bg-purple-600 h-3/5 w-4/5 rounded-full col-start-1 col-span-1">
			<p class="my-10">Back</p>
		</button>
		<button hx-get="/submit" hx-trigger="click" class="bg-purple-700 h-3/5 w-4/5 rounded-full col-start-2 col-span-2">
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

		<button hx-get="/" hx-trigger="click" class="bg-purple-600 h-3/5 w-4/5 rounded-full col-start-1 col-span-1">
			<p class="my-10">Back</p>
		</button>
		<button hx-get="/submit" hx-trigger="click" class="bg-purple-700 h-3/5 w-4/5 rounded-full col-start-2 col-span-2">
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
</head>

<style>
.fade-me-out.htmx-swapping {
	opacity: 0;
	transition: opacity 0.25s ease-out;
}

.fade-me-in.htmx-added {
	opacity: 0;
}
.fade-me-in {
	opacity: 1;
	transition: opacity 0.5s ease-out;
}
</style>

${children}`
;

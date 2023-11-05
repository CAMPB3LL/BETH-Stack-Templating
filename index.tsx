import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const app = new Elysia()
    .use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHtml>
				<body class="flex w-full h-screen justify-center items-center">
					<div class="w-full justify-items-center grid grid-cols-2 gap-y-40 mx-20">
						<p class="font-sans text-8xl text-slate-300 font-bold col-start-1 col-span-2">Who are you?</p>
						<button hx-post="/clicked" hx-swap="outerHTML" class="bg-purple-600 h-48 w-80 rounded-full font-sans text-6xl text-slate-300 font-bold col-start-1 col-span-1">
							<i class="fa-solid fa-user"></i> USER
						</button>
						<button hx-post="/clicked" hx-swap="outerHTML" class="bg-purple-700 h-48 w-80 rounded-full font-sans text-6xl text-slate-300 font-bold col-start-2 col-span-2">
						<i class="fa-solid fa-wrench"></i> TECH
						</button>
					</div>
				</body>
			</BaseHtml>
		)
	)
	.post("/clicked", () => <div class="bg-purple-700 h-48 w-80 rounded-full font-sans text-6xl text-slate-300 font-bold">Im from the server!!</div>)
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
${children}`
;
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia()
    .use(html())
	.get('/', ({ html }) => html(baseHtml))
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);


`Defining base HTML as a variable`
const baseHtml =
`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;
import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';

const app = new Elysia()
    .use(html())
	.get('/', ({ html }) =>
		html(
			<BaseHtml>
				<body>
					<h1>Yup</h1>
				</body>
			</BaseHtml>
		)
	)
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);


`Defining base HTML as a variable.  Children variable turns BaseHtml into a component`
const BaseHtml = ({children}: elements.Children) =>
`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<script src="https://unpkg.com/htmx.org@1.9.7"></script>
</head>
<body>

<h1>My Last Heading</h1>
<p>My first paragraph.</p>

</body>
</html>

${children}`
;
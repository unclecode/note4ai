Installation
Using Vite
Using PostCSS
Tailwind CLI
Framework Guides
Play CDN
Installing Tailwind CLI
The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

01
Install Tailwind CSS
Install tailwindcss and @tailwindcss/cli via npm.

Terminal
npm install tailwindcss @tailwindcss/cli
02
Import Tailwind in your CSS
Add the @import "tailwindcss"; import to your main CSS file.

src/input.css
@import "tailwindcss";
03
Start the Tailwind CLI build process
Run the CLI tool to scan your source files for classes and build your CSS.

Terminal
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
04
Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

src/index.html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

==========================

Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not intended for production.

01
Add the Play CDN script to your HTML
Add the Play CDN script tag to the <head> of your HTML file, and start using Tailwind’s utility classes to style your content.

index.html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
02
Try adding some custom CSS
Use type="text/tailwindcss" to add custom CSS that supports all of Tailwind's CSS features.

index.html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @theme {
        --color-clifford: #da373d;
      }
    </style>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline text-clifford">
      Hello world!
    </h1>
  </body>
</html>
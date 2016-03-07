# TeenChat
## What is this project?

[![Join the chat at https://gitter.im/raketwissenschaftler/TeenChat](https://badges.gitter.im/raketwissenschaftler/TeenChat.svg)](https://gitter.im/raketwissenschaftler/TeenChat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
The purpose is to work on a project together and learn eachother something.

## I want to help, how do I start?
1. Fork the project
2. Make some changes. Add some features or fix some bugs. Dont know what to do? Ask on the subreddit or in the IRC.
3. Send a pull request. If you did a good job, we'll merge it.

## What is the structure of this project?
- Static: Files that don't need to interact with the app, so all static content.
⋅⋅* css: Stylesheets. One per page, which has the same name as the page or template, so index.html has index.css
⋅⋅* html: Html that doesn't need to be rendered. This can be a login page or something.
⋅⋅* img: Images and videos.
⋅⋅* js: Clientside javascript. Same naming conventions as with stylsheets; index.html gets index.js.
- Views: Templates that still need to be rendered.
- App.js: The actual express.js app
- LICENSE: The license, this can still be changed, but MIT is my default one.
- Package.json: this is the configuration file for the project.
- README.md: This file with the description
## Other guidelines
- Encoding: UTF-8
- A tab is 4 spaces, no need to start a war about this
- Use single quotation marks for strings, so ''
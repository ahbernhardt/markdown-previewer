# Markdown Previewer

Build a Markdown Previewer. This is the second project of [FreeCodeCamp Front End Libraries Certification](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer/).

This project was built with React.

## Live Demonstration

Live project link: <https://anguyen0208.github.io/fcc-markdown-previewer/>

## Screenshot

![markdown-screenshot](https://github.com/anguyen0208/Project-Screenshots/blob/master/FCC-Markdown-Previewer.jpg)

## Objective

- Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: <https://codepen.io/freeCodeCamp/full/GrZVVO>. 

- Fulfill the below user stories and get all the tests to pass. Give it your own personal style. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

## User stories

- [x] I can see a `textarea` element with a corresponding `id="editor"`.

- [x] I can see an element with a corresponding `id="preview"`.
- [x] When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
- [x] When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: <https://cdnjs.com/libraries/marked>).
- [x] When my markdown previewer first loads, the default text in the `#editor` field should contain the valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
- [x] When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.
- [x] Optional Bonus: When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
- [x] Optional Bonus: My markdown previewer interprets carriage returns and renders them as br (line break) elements.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

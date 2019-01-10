1. In your own words, explain single-page applications and progressive web apps.
Simply, a single-page application is a website that, rather than loading multiple pages for differing content, say, having a contact page, a main page, a customer support page that must be loaded from the server for each request, the page and all possible content that may be used is loaded initially (or can be loaded dynamically as requested/necessary by the page), and the page is dynamically changed in response to user actions (example: [matchstick brews](https://matchstickbrews.com/), and allows for a more seamless transition and better user experience.
Similarly, progressive web applications are those that meet certain criteria, largely based around responsive design through a secure connection (HTTPS protocol) and usability on poor or no networks through the use of service workers (script running in the background).

2. Either from your research or by inspecting popular sites you frequent (using the Chrome DevTools), give some real-world examples of applications built with React and Angular.
Some of the main sites I use that are built with React are [BBC news](https://www.bbc.com/), [netflix](https://www.netflix.com/), and [Khan academy](https://www.khanacademy.org/), with the last being one of the more seamless and pleasant user experiences.


3. Write a summary of the benefits of React vs. Angular. Then ask your mentor about the current state of web development, and ask questions about how they use these two popular technologies in their work.
React: React is a javascript library (released 2013) maintained by Facebook, and is a component-based system with a slightly different model-view-controller (through a uni-directional flow rather than bi-directional found in Angular1) design to create a user experience. Since it is based in javascript and with the advent of ES6, we can easily utilize React. Additionally, React utilizes a virtual DOM, meaning it compares differing HTML tags and replaces the difference where it is in the DOM, rather than going through the whole DOM up to that differing point. React 

Angular: Angular is a relatively newer framework (released 2016) maintained by Google, and utilizes a traditional model-view-controller (MVC) design architecture for the creating a user experience. Importantly, Angular 2 is working towards implementing a unidirectional architecture rather than a bidirectional, traditional MVC. Angular utilizes TypeScript, a transpiler for JavaScript, that was useful prior to JS ES6, as JS ES5 can have some bulky and difficult to comprehend syntax (prototype inheritance) - typescript helped to make it easier by including OOP principles.
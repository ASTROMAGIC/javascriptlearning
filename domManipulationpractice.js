// let's review basic dom manipulation in practice 

// imagine a basic html file 

// <body>   
// <h1> TITLE OF WEBPAGE </h1>
// <div id="container"></div>

// </body>

// Now for your js file 

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// in the javascript file, first we get a reference to the container div that already exists in our HTML. Then we create a new di v and store it in the variable content. We add a class and some text to the content div and finally append that div to container. After the favascript code is run, our DOM tree will look like this:

// <!-- The DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>

// remember: javascript doe snot alter your HTML, but the DOM - your HTML file will look the same, but the javscript changes what the browser renders. 

// IMPORTANT: if you are including your javascript at the top of your file, many of those DOM manipulation methods will not work because the js code is being run before the nodes are created in the DOM. This is why the easiest fix for this is to include your javascript at the bottom of your HTML file. so that it gets run after the DOM nodes are parsed and created. 

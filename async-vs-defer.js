// 1. <script> in the head
<head>
    <script src='main.js'></script>
</head>
<body></body>
// - parsing HTML -> ⛔️ fetching js -> executing js ⛔️️️️ -> parsing HTML (✨page is ready)
// 👎🏼: block happening before the page is ready 


// 2. <script> in the body(at the bottom)
<head>
</head>
<body>
    <div></div> 
    <script src='main.js'></script>
</body>
// - pasing HTML (✨page is ready) -> fetching js -> exeucuting js
// 👍🏼: users can see the html content asap
// 👎🏼: if the page is highly dependent on the js, HTML content is meaningless

// 3. <script> in the head with 'async' 
<head>
    <script async src='main.js'></script>
</head>
<body></body>
// (parallel ⭐️)
// - pasing HTML -> ⛔️ (while exeuting js) -> parsing HTML (✨page is ready)
// - fetching js -> exeuting js
// 👍🏼: faster than without async
// 👎🏼: block happening + js is executed before all HTML elements arrive, which can cause problems

// 4. <script> in the head with 'defer'
<head>
    <script defer src='main.js'></script>
</head>
<body></body>
// (parallel ⭐️)
// - pasing HTML (✨page is ready) -> exeuting js
// - fetching js
// 👍🏼: 😍 BEST OPTION 


// ️️✨ POINT - async 🆚 defer ✨
// - async: js is executed RIGHT AFTER it is fetched: fetching -> execution
// - defer: js execution CAN WAIT after it is fetched: fetching - (can wait) -> execution


// ❗️Please Note (1):
// As a rule, only the simplest scripts are put into HTML. 
// More complex ones reside in separate files
// The 👍🏼 benefit of a separate file is that the browser will download it and store it in its cache 🤓.
// Other pages that reference the same script will take it from the cache instead of downloading it,
// so the file is actually downloaded only ONCE 🙌🏼.
// That reduces traffic and makes pages faster ⏩.

// ❗️Please Note (2):
// A single <script> tag can’t have both the src attribute and code inside.

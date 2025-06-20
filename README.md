# PostgreSQl express API
<h1>this is the solution to the PostgreSQL API Assignment assignment with exprees.js</h1>
<h2>Routes folder </h2>
<p>The Routes folder house the routes.js file with cointained the CRUD router</p>
<h2> controllers folder</h2>
<p>The conrollers folder house the routerMethods.js which contains the CRUD routers function</p>

<p>The file "PostgreSql CRUD Router.postman_collection.json" contain the sample API request using Postman</p>

<h2>Dependencies to install to excute this programm</h2>
<ol>
<li>express</li>
<li>cors</li>
<li>nodemon</li>
<li>pg</li>
</ol>
<p>use "npm run dev" to start the server</p>
<h2>CRUD endpoint</h2>
<ul>
<li><b>GET</b> "http://localhost:8000/users" :this return all the item in the list</li>
<li><b>GET</b> "http://localhost:8000/users/:id" :this return the item with the id specified from the items list</li>
<li><b>POST</b> "http://localhost:8000/users" :this add a new item to the items list</li>
<li><b>PUT</b> "http://localhost:8000/users/:id" :this modifies the properties of the item with the stated id</li>
<li><b>DELETE</b> "http://localhost:8000/users/:id" :this delete the item with the stated id from the items list</li>
</ul>
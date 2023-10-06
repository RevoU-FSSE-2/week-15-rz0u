import escapeHTML from "escape-html";

export const xss = (req, res) => {
  const name = escapeHTML(req.query.name);
  res.send(`<h1>Hello, ${name}</h1>`);
};

export const clickjacking = (req, res) => {
  res.send(`
       <form action="/click-jacking" method="post">
         <label for="username">Username:</label><br>
         <input type="text" id="username" name="username"><br>
         <label for="password">Password:</label><br>
         <input type="password" id="password" name="password"><br>
         <input type="submit" value="Submit">
       </form>
     `);
};

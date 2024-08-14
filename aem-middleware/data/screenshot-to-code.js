const screenshotHtml = `
<html>
 <head>
  <title>
   Pinterest Explore
  </title>
  <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .container {
    text-align: center;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .cards {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    text-align: left;
  }
  .card .overlay .button {
    background: white;
    color: black;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }
 </style>
 </head>
 <body>
  <div class="container">
   <div class="title">
    Explore the best of Pinterest
   </div>
   <div class="cards">
    <div class="card">
     <img alt="Shipping Container House" height="200" src="" width="300"/>
     <div class="overlay">
      <div>
       Shipping Container House
      </div>
      <button class="button">
       View More
      </button>
     </div>
    </div>
    <div class="card">
     <img alt="Nail Stamping" height="200" src="" width="300"/>
     <div class="overlay">
      <div>
       Nail Stamping
      </div>
      <button class="button">
       Make
      </button>
     </div>
    </div>
    <div class="card">
     <img alt="Hanging Plants" height="200" src="" width="300"/>
     <div class="overlay">
      <div>
       Hanging Plants
      </div>
      <button class="button">
       Try
      </button>
     </div>
    </div>
   </div>
  </div>
 </body>
</html>
`;

export default screenshotHtml;
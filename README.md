# Calendar-Nov-2023
A Calendar for Feb 2023

Welcome to our Kalender for November 2023.
Our porjeckt is made upp of Nodejs, ejs, html, js and css.

We are using dotenv, ejs, express and nodemon. 
Ejs is the template engine we are using.
Dotenv is a file we use to hold information, like port and sutch.
Express and nodemon are the dependencies used for running the code frontend.

To see the calender first install the required pacages. Write "npm install" in a terminal. This shud install all the packages needed. If it worked you can write "npm run start" witch shud then run on the port 3000. To retch the site sertch for "127.0.0.1:3000" or "localhost:300" in your browser.

This site is a test not something offisial thats way you wil automagiclt be sent to the November month...

So the site works like this:
On the mane page you wil see the calender for november 2023. This calender has some colors. 
Gray number with white background mens that the day is from the last month.
Black numbers with white background mens that the day is in november and that you can if clicked oppen a page for that day.
Gray numbers with white background meens that it is a Saturday.
Red numbers with white background meens that it is a Sunday.
Black numbers with green backround is todays day!
All numbers with gray background are locked days. They have not yet been. So clicking them wil do nothing.

If you click on enny of the oppen days you wil be sent to that days page. Since this is a projeckt it will be empty. but if the page has the dates number we are good.

All of this also works on a Phone size screen.

Functions:
On enny page you can use the arrow keys left and right to move between the dates. right meens day forward and left meens day befour. if you are at 1 and go back you will be back at the home page. If you are on the main page and pres the right arrow key you wil go to the 1. day. You can also swipe between the days, like the arrowkeys.

If you press Escape key you will be sendt to the home screen/calender werever you are.

The logo placeholder works like a home button.

Tecnical:
package.json is were our dependencies are cept.
.env is the file that holds with port we are using.

So we have the app.js file with works more like a router. If you setch this you wil end upp here type of stuff. Thats were the code starts.
If you sertch for something we havent planed you wil be sendt to the 404 page.
Wen you then sertch for November/ it wil render the index.ejs file in the views folder, this uses the partials head, header and the footer. its also connected to the scripts in the public folder. 
The Public folder contains all the folders that wil be reatchebl frontend. With is a securety thing. So the app.js file wont be found frontend. In the public folder you have all the days and there html files. Also the pictures, css and some js. 
Js like date. witch is were the locking of dates happen and were the coloring of the main calender overwue hapens. 
arrow.js is the script that makes the arrow kays and Escape key work for moving around.
swipe.js is the script that makes it posible to swipe on phones and sutch to move between pages.


Thanks for reading :D
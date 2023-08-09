fetch('https://bokutachi.xyz/api/v1/users/434/games/usc/Controller/')
.then(response => {
    return response.json();
    });
/* 
The url will fetch my player data from Bokutachi.
I recommend trying that snippet in the browser console, and open the link too.
You should see a similar output in console with the data that's shown when you open that link.

Tachi API documentation for reference:
https://docs.bokutachi.xyz/api/
.. and this related bit to the snippet:
https://docs.bokutachi.xyz/api/routes/user-gamept/ 
*/
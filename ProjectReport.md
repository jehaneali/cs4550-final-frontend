Meta:

Our team was composed of Jehane Ali, Abby Carr, Tanya Kler, and Kia Zafar. The URL’s we deployed to were http://kitchenisland.clipturtle.com/ and https://webchat.kia.town/. The server for the site is hosted on http://kitchenisland.jehaneali.com/. The URL of the github repository with all of our deployed code is https://github.com/jehaneali/cs4550-final-project. Our app is properly deployed and working as well. Each team member had their own tasks to complete while also working together to combine the elements. Kia took the lead on the livestreaming portion with the WebRTC. Abby worked on the backend portion while Jehane got the frontend up and running. Tanya worked on the searching aspect and writing the report. However, all of us worked together to get most of the functionality done and put all the pieces together. 

App:

What does the app do:

Our app is a web program that allows users to find recipes to make while also staying connected to a food community. The home page has featured recipes. Recipes can also be searched for and users have a tab with their saved recipes. Once a recipe is saved it can be found on the user’s profile so they always have access to it. Another important aspect of our app was to make sure we had a community feature. We accomplished this through having a live video chat feature that allows users to livestream themselves cooking and allows other users to join as well.


How has app concept changed: 

One aspect we have changed from the proposal is our live streaming functionality. In our proposal we planned on having live streaming similar to that on Instagram but we decided to have a more Zoom like video chat feature to create an even more inclusive and connected community aspect. We decided not to implement the Spotify like feature that showed what users are currently cooking because our live streaming video chat was a better version of that and we did not want to crowd our app with redundancies.


How do users interact:

Users interact with our app by creating an account, searching for recipes, saving recipes, video calling, and viewing recipe content in its different forms. Creating an account allows users to save recipe content and view it in their my stuff page. Users can accomplish tasks such as finding recipes to make, joining, creating, and sharing video calls, and keeping a record of recipes to refer to at a later time by saving them. A user might find recipes to make with friends through the app or discover a featured recipe they wouldn’t have originally searched for.


Project requirements:

With our searching and saved recipes feature, and live streaming video chat functionality, this app is significantly more ambitious than the bulls-and-cows game as well as the events app. We built the app in frontend and backend portions as required. We deployed the app to the VPS’s of Jehane Ali, Abby Carr, and Kia Zafar. To view recipes, save recipes, follow users, and live streaming you need to have created an account and be logged into it. Our users are stored in a postgres database with searches and saved recipes as the other persistent state. Our server-side code uses an external API called the TheMealDB API (https://www.themealdb.com/api.php). It’s an API that contains a diverse database of recipes and offers a variety of features. Some of these include the ability to search for a meal by name, look for recipes that use specific ingredients, and find recipes that begin with a certain letter. Our real time updates to users include the live streaming video chat. Our ”neat” feature was using WebRTC to include the live streaming aspect of our application. To ensure all of our functionality was working properly we tested extensively throughout the development and after deploying as well.


Beyond project requirement:

Beyond the project requirement, we have styled the app to be aesthetically pleasing and clean. The “interesting” feature we have is the live streaming video call aspect implemented with WebRTC. Users can join a livestream that is already occurring with their cameras and mic on. They can share the link to the room to have other users join. They can create a new video chat room as well to start a new live video call room.


Complex part of the app:

The complex aspects of our application are the live streaming aspects and searching for recipes. Actually getting the functionality of the live streaming video call and the additional integration of it into our app was complex since we worked on this neat component as an individual piece to host and then made it a functioning part of our application. We designed the search queries to follow the structure of our external API and return a matching recipe to the search query. We wanted to stay authentic to the API. A complex part was understanding what had to be stored in the database in order to make searches and saves reasonable. Our implementation stores the data we need to make an API call, not its results. We designed the livestreaming to open up a chat room page with the videos of all the participants. Other users can join if they have the link to the room which can be copied and shared once in the room. Another random room can be generated as well if you want to go to a new video chat room. We designed it this way to maximize the involvement and community between users.


Most significant challenge:

The most significant challenge was connecting the API. We solved this issue by thoroughly reading the documentation for the API and playing around with the different ways we could make it. We definitely struggled to start, but found that with the help of the external API documentation and that of Elixir, we were able to pass recipe data we wanted to the front end.

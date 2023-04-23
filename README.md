
# Planner

A simple application built using ReactJs and Local Api.
Planner app provides features like calender, widgets and we can add our questions and answers in the form of card in mywork section.



##  Secitons In App
- Home
- Calender
- My Work
- Widget

### Home
When we start application it will open the home page. It is just the starting page of application from where we can navigate to different routes.

### Calender
It displays the calender. The present date is highlighted at th side and we can browse to different year, months.

### My Work
At the right bottom there is button where we can add the cards.
Up on clicking on add card a modal will be displayed which consists of a form and after submiting the form the obtained object will be stored in local api with the help of axios.

Cards added will be displayed in the my work page. Using flag variable I am automatically rendering the newly added task,i.e, we need not reload the application to view the newly added card

### Widgets
Widgets make our life eaiser.
I have added a weather related widget in widgets section 
We can enter a valid city name or a valid place name and get information about weather in that region

## How to run Application
Planner is a React.JS app. 
To store data in this app I have used Local api.
As this application contains a local api which requires to be started. We need two terminals to run this app

- In one terminal start react application
- In another terminal start local api

To start react application
```
npm start
```
To start local api
```
json-server --watch db.json --port=4000
```

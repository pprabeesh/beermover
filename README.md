# Beer Mover

This is a vanila single page application for monitoring a truckload of beer containers

## How to run

npm i  
npm run dev

## Notes

Created using simple webpack dev server and express server  
Socket.io is used for real time data fectching from server  
Polling in server is done at 1 sec intervals and temperature data for all containers is sent in one push  
If temperature goes outside recommended range then color of container changes to notify user

## Tests

npm run test  
npm run test.watch

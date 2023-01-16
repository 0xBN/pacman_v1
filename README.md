# Pacman (WIP)

Pacman clone using React and Tailwind CSS. I'm also using Context API to store the many states involved in this game. The game is currently working but the Ghost chasing algorithm is trained to get to Pacman's spot to "eat him". The Ghost can also be programmed to chase 1 or more squares away so the movement is more erratic.

### Ghost Algorithm 
 The ghost is chasing using a hueristic function, meaning it calculates the shortest path to pacman, not accounting for walls, and goes in that direction. I am currently working on another project for A* pathfinding which can improve the Ghost's chasing algorithm as it currently can get stuck behind obstacles because it will not go further away from pacman to get around obstacles.

The ghost's movement passing over objects (dots, pills) is also tricky. It involves a queue for items it passes. This allows the yellow dots to not be "eaten" by the ghost.


### Work in Progress
This game can be improved by using Canvas API (HTML5) to make the animations more smooth. I am working on some projects to learn Canvas API to be able to use it here.
The ghost chasing algorithm can be improved with A* pathfinding.

## Deployed At: 


## Demonstration

<img src="https://github.com/0xBN/gif_pub/blob/main/pacman/desktop.gif?raw=true" width="500px"/>


## Purpose
Practice React custom hooks, using Context API.

## Skills Demonstrated
- HTML5 Canvas
- ReactJS
- Tailwind CSS


## Tech Stack
- [ React ](https://github.com/facebook/create-react-app): Frontend
- [ Tailwind CSS](https://tailwindcss.com/): Styling
- [Render](https://render.com/): Deployment
  



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



### Deployment

How to deploy documentation: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


This document describes the current design specification for Shannon's Mouse and will be evolving quickly as the project gets under development.

Shannon’s Mouse

The mouse would have a few parts:
•	The front-end interface. Page viewers can see the mouse, cheese, and the maze; as well as select and move around different parts of the maze.
o	View
•	The mouse searching engine. Class or a collection of classes that enable the “mouse” to navigate through the maze, testing each of 4 possible directions (up, down, left, and right), and storing the information learned.
o	Controller
•	The information storage. A “mental map” (probably a graph) of what the maze looks like to the mouse, based on where it has investigated already.
o	Model

Note: this is basically an MVC pattern.

Design
Front-end: HTML canvas (or similar to http://flukeout.github.io/)

Mouse searching engine:
•	Mouse class:
o	navigate() – uses existing knowledge to find a square to move to. Returns a direction
o	investigate() – “sniffs” 4 available directions, discovers information, and returns the information
o	storeInfo() – stores the new information into the mouse’s Brain
•	Brain:
o	.map – the 2D array representing known and unknown information about the map

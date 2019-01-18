# Physteroids #
A game called physteroids. *steroids Game which simulates more realistic space combat. The main reason-d'etre of this game is to learn javascript and node.js and to help an IT friend learn programming.

Relies heavily on the physics / resolution engine matter.js

> *Matter.js* is a JavaScript 2D rigid body physics engine for the web
[brm.io/matter-js](http://brm.io/matter-js)

## Requirements / Specification ##

Physteroids is asteroids like. It features combat which is feasible for future space combat in zero atmosphere and zero gravity. 

The game shall support 1-6 players. 

The game shall run on, at minimum, pc linux

The game shall be open source. 

The game shall use a physics resolver. 

The game shall track the inertial state and position of all objects. 

Gameplay shall be confined to a plane on a torus. 

Explosions don't work well in space. No air fluid, no shock wave. So no kinetic explosive weapons. 

Fuel shall be very limited eg 3 seconds per spawn. Time your thrusts conservatively. 

Momentum shall always conserved. Collisions shall be perfectly elastic. Collisions shall always be detected and reacted. 

Scoring shall be based on spawns and a time clock. 

Ships are able to sustain a certain amount of kinetic impulse. If this is overcome, the ship shall be destroyed and respawn in a random location. 

Ships shall be distinguished by color but are identical  in abilities.

There shall be at least three weapons systems in the game: nets, lasers, and nukes.  Additionally kinetic energy (fuel) can be used to influence other objects. 

There shall be rocks. Rocks may be broken using the laser or on impact.  Power ups shall randomly spawn when rocks break. Power ups are extra kills (multiplayer), extra ships (single player), nukes, nets, and fuel. Rocks shall be mass and size power of two multiples of the ship mass and size. When they break, rocks shall split into two half sized rocks conserving momentum. 

The laser shall be indefinite use. It fires in pulse and has a refresh time. The laser can break rocks and punch holes in ships. When a ship has a hole it will receive a constant force on the axis from the hole to its center of mass representing a leak. Lasers alone cannot destroy a ship. 

Nukes shall destroy a ship when they go off, due to radiation. The blast radius of a nuke is the length of of a ship. Nukes shall be magnetic. They shall be attracted to rocks and ships based on an inverse square law. 

Nets shall have a radius of two ship lengths. When a net is fired, it floats in space until colliding with another object. That object is wrapped in the net and a tether point appears on a flexible line. The object can now be moved via pull forces. The tether point may attach magnetically to a passing object including a rock. 

## License info ##

Released under the MPL 2.0 license.


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        console.log('w was pressed');
    }
    if(event.keyCode == 65) {
        console.log('a was pressed');
    }
	if(event.keyCode == 83) {
        console.log('s was pressed');
    }
	if(event.keyCode == 68) {
        console.log('d was pressed');
    }
});

(function() {

    var World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
		Composites = Matter.Composites,
		Events = Matter.Events,
		Common = Matter.Common;

		
    Example.physteroids = function(demo) {
		
        var engine = demo.engine,
            world = engine.world;

			world.gravity.x = 0;
			world.gravity.y = 0;

            sceneEvents = demo.sceneEvents;
			keyConstraint = demo.keyConstraint;
			mouseConstraint = demo.mouseConstraint;

			
		var bodyOpts = { friction: 0.00,
			frictionAir: 0.00,
			frictionStatic: 0.0001, restitution: 1.0 };
			
			
        var stack = Composites.stack(0, 100, 5, 1, 20, 0, function(x, y) {
            return Bodies.circle(x, y, Math.pow(2, Common.random(0,7)), bodyOpts );
        });
		
        World.add(world, stack);

		for (var i = 0; i < stack.bodies.length; i++) {
		  Body.setVelocity(stack.bodies[i], { x: Common.random(0, 4)/10.0, y: Common.random(0, 4)/10 })
		  Body.setAngularVelocity(stack.bodies[i], Common.random(0, 2)/10.0 );
		}
		
		var ship = Bodies.polygon(Common.random(0, 780), Common.random(0, 580), 3, 8, bodyOpts);
		
		World.add(world, ship);
		Body.setVelocity(ship, { x: Common.random(0, 4), y: Common.random(0, 4) })
		Body.setAngularVelocity(ship, Common.random(0, 2)/10 )
		
		sceneEvents.push(

            // an example of using mouse events on a mouse
            Events.on(mouseConstraint, 'mousedown', function(event) {
                var mousePosition = event.mouse.position;
                console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
                demo.render.options.background = 'cornsilk';
            })

        );
		
        sceneEvents.push(

            // an example of using collisionStart event on an engine
            Events.on(engine, 'collisionStart', function(event) {
                var pairs = event.pairs;

                // change object colours to show those starting a collision
                for (var i = 0; i < pairs.length; i++) {
                    var pair = pairs[i];
                    if (pair.bodyA == ship || pair.bodyB == ship)
					{
						console.log('collision with the SHIP!' );
						World.remove(world, ship);
						//World.remove(world, bodyB);
						ship = Bodies.polygon(Common.random(0, 780), Common.random(0, 580), 3, 8, bodyOpts);
		
						World.add(world, ship);
						Body.setVelocity(ship, { x: Common.random(0, 4), y: Common.random(0, 4) })
						Body.setAngularVelocity(ship, Common.random(0, 2)/10 )
					}
					
                }
            })

        );
		
	};
})();
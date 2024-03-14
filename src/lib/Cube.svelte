<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';

    let color1Hex = '#cf9259';
    let color2Hex = '#fdf1bc';

    /** @type {THREE.Scene} **/
    let scene;
    /** @type {THREE.PerspectiveCamera} **/
    let camera; 
    /** @type {THREE.WebGLRenderer} **/
    let renderer;
    let geometry;
    let material;
    /** @type {THREE.Object3D<THREE.Object3DEventMap>} **/
    let group;
    let light;
    let clock = new THREE.Clock(); // Added a clock
    let color1 = new THREE.Color(color1Hex);
    let color2 = new THREE.Color(color2Hex);

    onMount(() => {
        if (typeof window !== 'undefined') {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
            renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0xffffff);
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
    
            group = new THREE.Group(); // Create a group
    
            // Create 8 smaller cubes and add them to the group
            for (let x = -0.5; x <= 0.5; x += 1) {
                for (let y = -0.5; y <= 0.5; y += .2) {
                    for (let z = -0.1; z <= 0.1; z += .8) {
                        geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
                        material = new THREE.MeshStandardMaterial( { color: 0x00fff0 } );
                        let cube = new THREE.Mesh( geometry, material );
                        cube.position.set(x, y, z);
                        group.add( cube );
                    }
                }
            }
            scene.add( group );
            light = new THREE.PointLight(0xffffff, 50, 100);
            light.position.set(0, 0, 10);
            scene.add(light);
            camera.position.z = 4;
            window.addEventListener('resize', onWindowResize);
            animate();
        }
    });

    function animate() {
        requestAnimationFrame( animate );
        let elapsedTime = clock.getElapsedTime();
        let delta = (Math.sin(elapsedTime * 0.1) + 1) / 2;
        // Rotate each cube in the group at a different rate
        group.children.forEach((cube, i) => {
            cube.material.color.lerpColors(color1, color2, delta);
            cube.rotation.x += 0.003 * (i + .1);
            cube.rotation.y += 0.003 * (i + .1);
        });
        // Rotate the entire group
        group.rotation.x += 0.01;
        group.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    function onWindowResize() {
        camera.aspect = (window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', onWindowResize);
        }
    });

    function updateColors() {
        color1 = new THREE.Color(color1Hex);
        color2 = new THREE.Color(color2Hex);
    }
</script>

<label for="color1Hex">Color 1:</label>
<input 
    type="color"
    id="color1Hex"
    bind:value={color1Hex} 
    on:change={updateColors}>

<label for="color2Hex">Color 2:</label>
<input 
    type="color"
    id="color2Hex"
    bind:value={color2Hex}
    on:change={updateColors}>


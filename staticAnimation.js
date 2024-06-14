// 3d.js

    let scene, camera, renderer, staticMaterial;

    async function loadShaderFile(url) {
        return fetch(url)
            .then(response => response.text());
    }

    function createStaticMaterial(vertexShader, fragmentShader) {
        return new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
    }

    async function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0x1d1628); // Set background color to #1d1628
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Load shaders
        const vertexShader = await loadShaderFile('assets/shaders/vertexShader.glsl');
        const fragmentShader = await loadShaderFile('assets/shaders/fragmentShader.glsl');

        // Create static material
        staticMaterial = createStaticMaterial(vertexShader, fragmentShader);

        // Create a plane that covers the whole screen with the shader material
        const shaderPlaneGeometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
        const shaderPlane = new THREE.Mesh(shaderPlaneGeometry, staticMaterial);
        scene.add(shaderPlane);

        animate();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        // Update time uniform in the shader
        if (staticMaterial) {
            staticMaterial.uniforms.time.value += 0.01;
        }

        renderer.render(scene, camera);
    }

    init();
<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    export let badges = [];

    let container;

    onMount(async () => {
        if (!browser) return;
        
        // Dynamic import to avoid SSR issues
        const { Renderer, Camera, Transform, Plane, Mesh, Program, Texture } = await import('ogl');

        const renderer = new Renderer({ alpha: true, antialias: true });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);

        const camera = new Camera(gl, { fov: 45 });
        camera.position.z = 5;

        const scene = new Transform();

        const resize = () => {
            if (!container) return;
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };

        const vertex = `
            attribute vec3 position;
            attribute vec2 uv;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragment = `
            precision highp float;
            uniform sampler2D tMap;
            varying vec2 vUv;
            void main() {
                gl_FragColor = texture2D(tMap, vUv);
                if (gl_FragColor.a < 0.1) discard;
            }
        `;

        const geometry = new Plane(gl, { width: 0.8, height: 0.3 });

        badges.forEach((src, i) => {
            const texture = new Texture(gl);
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = src;
            img.onload = () => (texture.image = img);

            const program = new Program(gl, {
                vertex,
                fragment,
                uniforms: {
                    tMap: { value: texture },
                },
                transparent: true,
            });

            const mesh = new Mesh(gl, { geometry, program });
            
            const phi = Math.acos(-1 + (2 * i) / badges.length);
            const theta = Math.sqrt(badges.length * Math.PI) * phi;
            
            mesh.position.set(
                Math.sin(phi) * Math.cos(theta) * 2,
                Math.sin(phi) * Math.sin(theta) * 2,
                Math.cos(phi) * 2
            );
            
            mesh.setParent(scene);
            
            mesh.onBeforeRender = () => {
                mesh.quaternion.copy(camera.quaternion);
            };
        });

        let request;
        const update = () => {
            request = requestAnimationFrame(update);
            scene.rotation.y += 0.005;
            scene.rotation.x += 0.003;
            renderer.render({ scene, camera });
        };

        window.addEventListener('resize', resize);
        resize();
        update();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(request);
            if (gl.canvas.parentElement) {
                container.removeChild(gl.canvas);
            }
        };
    });
</script>

<div bind:this={container} class="orb-container"></div>

<style>
    .orb-container {
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: grab;
    }
    .orb-container:active {
        cursor: grabbing;
    }
</style>

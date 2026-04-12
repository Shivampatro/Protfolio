<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    export let certifications = [
        { name: "Hacknovathon 2.0", date: "2024", color: "#FF4D4D" },
        { name: "Trailblazer Mountaineer", date: "2024", color: "#00A1E0" },
        { name: "Agentblazer Innovator 2026", date: "2024", color: "#FFD700" },
        { name: "NPTEL-Privacy and Security in Online Social Media", date: "2024", color: "#8E44AD" },
        { name: "Tata GenAI Powered Data Analytics", date: "2024", color: "#16A085" },
        { name: "AWS Solutions Architecture Job Simulation", date: "2024", color: "#FF9900" },
        { name: "Oracle Race to Certification - Level 2", date: "2025", color: "#F39C12" },
        { name: "Oracle Data Science Professional", date: "2025", color: "#E67E22" },
        { name: "Agentic AI Hackathon 2025", date: "2025", color: "#E74C3C" },
        { name: "Oracle Certified GenAI Professional", date: "2025", color: "#C0392B" },
        { name: "Oracle Certified Foundation Associate", date: "2024", color: "#D35400" },
        { name: "IEP – Python & AWS", date: "2024", color: "#2980B9" },
        { name: "The Joy of Computing Using Python (NPTEL)", date: "2024", color: "#3498DB" },
        { name: "Python Programming with MySQL", date: "2024", color: "#27AE60" },
        { name: "AI/ML for Geodata Analysis (ISRO)", date: "2024", color: "#2ECC71" },
        { name: "3-day Android Workshop", date: "2023", color: "#BDC3C7" },
        { name: "SIH 2024", date: "2024", color: "#9B59B6" },
        { name: "Machine Learning Workshop", date: "2023", color: "#34495E" },
        { name: "Artificial Intelligence Internship (yhills)", date: "2024", color: "#1ABC9C" },
        { name: "3-day Cyber Security Workshop", date: "2023", color: "#7F8C8D" }
    ];

    let container;

    onMount(async () => {
        if (!browser) return;

        const { Renderer, Camera, Transform, Geometry, Program, Mesh, Color } = await import('ogl');

        const renderer = new Renderer({ alpha: true, antialias: true });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);

        const camera = new Camera(gl, { fov: 45 });
        camera.position.z = 8;

        const scene = new Transform();

        const vertex = `
            attribute vec3 position;
            attribute vec3 color;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform float uTime;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec3 pos = position;
                pos.x += sin(uTime * 0.5 + position.y) * 0.1;
                pos.y += cos(uTime * 0.5 + position.x) * 0.1;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = 15.0;
            }
        `;

        const fragment = `
            precision highp float;
            varying vec3 vColor;
            void main() {
                float dist = distance(gl_PointCoord, vec2(0.5));
                if (dist > 0.5) discard;
                gl_FragColor = vec4(vColor, 1.0 - dist * 2.0);
            }
        `;

        const certCount = certifications.length;
        const starCount = 200; // Additional background stars
        const totalCount = certCount + starCount;
        
        const positions = new Float32Array(totalCount * 3);
        const colors = new Float32Array(totalCount * 3);

        // Certification points (brighter, larger)
        certifications.forEach((cert, i) => {
            const angle = (i / certCount) * Math.PI * 2;
            const radius = 2.5 + Math.random() * 0.5;
            positions.set([
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                (Math.random() - 0.5) * 2
            ], i * 3);

            const c = new Color(cert.color);
            colors.set([c.r, c.g, c.b], i * 3);
        });

        // Background stars (dimmer, smaller)
        for (let i = certCount; i < totalCount; i++) {
            const radius = 3 + Math.random() * 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions.set([
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            ], i * 3);

            const gray = 0.2 + Math.random() * 0.3;
            colors.set([gray, gray, gray + Math.random() * 0.2], i * 3);
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: positions },
            color: { size: 3, data: colors },
        });

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
            },
            transparent: true,
        });

        const points = new Mesh(gl, { geometry, program, mode: gl.POINTS });
        points.setParent(scene);

        const resize = () => {
            if (!container) return;
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };

        let request;
        const update = (t) => {
            request = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            scene.rotation.y += 0.002;
            renderer.render({ scene, camera });
        };

        window.addEventListener('resize', resize);
        resize();
        update(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(request);
            if (gl.canvas.parentElement) {
                container.removeChild(gl.canvas);
            }
        };
    });
</script>

<section id="certifications">
    <div class="nebula-wrapper animate-fade-up">
        <h2>Certifications Star Map</h2>
        <div bind:this={container} class="nebula-container"></div>
        <div class="cert-list">
            {#each certifications as cert}
                <div class="cert-item" style="--color: {cert.color}; --color-rgb: {cert.color.match(/\w\w/g).map(x=>parseInt(x,16)).join(',')};">
                    <div class="header-row">
                        <span class="dot"></span>
                        <span class="name">{cert.name}</span>
                    </div>
                    <span class="date">{cert.date}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section#certifications {
        width: 100vw;
        background-color: $pri;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0 4rem 0;
        position: relative;
        z-index: 2;
    }

    .nebula-wrapper {
        padding: 1.5rem;
        margin: 0 auto; // Removed huge margins since we have padding on section now
        max-width: 1000px;
        width: 90vw;
        text-align: center;
        border-radius: 40px;
        background: rgba($pri, 0.95);
        border: 1px solid rgba($hl, 0.2);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        position: relative;
        z-index: 10;

        h2 { @include text-gradient; margin-bottom: 0.5rem; font-size: 2rem; }
    }

    .nebula-container {
        width: 100%;
        height: 120px;
        margin-bottom: 0;
    }

    .cert-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
    }

    .cert-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        min-width: 250px;
        flex: 1 1 250px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--color);
            opacity: 0.8;
            box-shadow: 0 0 15px var(--color);
            transition: height 0.3s ease;
        }

        &:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(var(--color-rgb, 255, 255, 255), 0.15);

            &::before {
                height: 6px;
            }

            .dot {
                box-shadow: 0 0 15px var(--color), 0 0 30px var(--color);
            }
        }

        .header-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.8rem;
            width: 100%;
            justify-content: center;
        }

        .dot {
            width: 8px;
            height: 8px;
            background: var(--color);
            border-radius: 50%;
            box-shadow: 0 0 8px var(--color);
            transition: all 0.3s ease;
            flex-shrink: 0;
        }

        .name { 
            color: $light;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            line-height: 1.4;
        }

        .date { 
            color: $dim; 
            font-size: 0.85rem; 
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            width: 100%;
            text-align: center;
        }
    }
</style>

<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let experience = [
        { role: "Full Stack Developer", company: "Freelance", period: "2023 - Present", desc: "Building responsive web apps with Svelte, React, and Node.js." },
        { role: "Data Analyst Trainee", company: "EduTech", period: "2024", desc: "Analyzing datasets using Python (Pandas/NumPy) and SQL." }
    ];

    export let education = [
        { degree: "B.Tech in Computer Science", school: "University of Technology", year: "2026 (Expected)" }
    ];

    export let skills = ["Java", "Salesforce", "Python", "Svelte", "React", "SQL", "AWS"];

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            dispatch('close');
        }
    }
</script>

<div 
    class="resume-modal glass" 
    on:click|self={() => dispatch('close')}
    on:keydown={handleKeydown}
    role="button"
    tabindex="0"
    aria-label="Close resume modal"
>
    <div class="resume-content glass animate-fade-up">
        <button class="close-btn" on:click={() => dispatch('close')} aria-label="Close modal">×</button>
        
        <header>
            <h1>Shivam Patro</h1>
            <p>Full Stack Developer | Data Analyst</p>
        </header>

        <section>
            <h3>Experience</h3>
            {#each experience as exp}
                <div class="item">
                    <div class="header">
                        <strong>{exp.role}</strong>
                        <span>{exp.period}</span>
                    </div>
                    <p class="company">{exp.company}</p>
                    <p class="desc">{exp.desc}</p>
                </div>
            {/each}
        </section>

        <section>
            <h3>Education</h3>
            {#each education as edu}
                <div class="item">
                    <div class="header">
                        <strong>{edu.degree}</strong>
                        <span>{edu.year}</span>
                    </div>
                    <p class="school">{edu.school}</p>
                </div>
            {/each}
        </section>

        <section>
            <h3>Top Skills</h3>
            <div class="skill-tags">
                {#each skills as skill}
                    <span class="tag">{skill}</span>
                {/each}
            </div>
        </section>

        <div class="actions">
            <a href="/resume.pdf" download="Shivam_Patro_Resume.pdf" class="download-btn">Download PDF</a>
        </div>
    </div>
</div>

<style lang="scss">
    .resume-modal {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(8px);
    }

    .resume-content {
        max-width: 600px;
        width: 90vw;
        max-height: 85vh;
        overflow-y: auto;
        padding: 3rem;
        position: relative;
        border-radius: 30px;
        background: rgba($pri, 0.8);

        &::-webkit-scrollbar { width: 5px; }
        &::-webkit-scrollbar-thumb { background: $hl; border-radius: 10px; }
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: $light;
        font-size: 2rem;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.3s;
        &:hover { opacity: 1; }
    }

    header {
        text-align: center;
        margin-bottom: 3rem;
        h1 { margin: 0; @include text-gradient; }
        p { color: $dim; margin-top: 0.5rem; }
    }

    section {
        margin-bottom: 2.5rem;
        h3 { border-bottom: 1px solid rgba($hl, 0.3); padding-bottom: 0.5rem; margin-bottom: 1.5rem; color: $hl; }
    }

    .item {
        margin-bottom: 1.5rem;
        .header {
            display: flex;
            justify-content: space-between;
            font-size: 1.1rem;
            span { color: $hl; font-size: 0.9rem; font-family: monospace; }
        }
        .company, .school { color: $light; margin: 0.2rem 0; font-weight: 500; }
        .desc { color: $dim; font-size: 0.95rem; line-height: 1.5; }
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    }

    .tag {
        background: rgba($hl, 0.1);
        border: 1px solid rgba($hl, 0.2);
        color: $light;
        padding: 0.4rem 1rem;
        border-radius: 100px;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .actions {
        margin-top: 3rem;
        text-align: center;
    }

    .download-btn {
        display: inline-block;
        background: $hl-gradient;
        color: white;
        padding: 1rem 2rem;
        border-radius: 100px;
        text-decoration: none;
        font-weight: bold;
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba($hl, 0.3);
        }
    }
</style>

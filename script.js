gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, ease: "power4.out" });
gsap.from(".hero-content h2", { opacity: 0, y: 50, delay: 0.5, duration: 1, ease: "power4.out" });
gsap.from(".portfolio-item", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", stagger: 0.2 });

VanillaTilt.init(document.querySelectorAll(".portfolio-item"), {
    max: 25, speed: 400, glare: true, "max-glare": 0.5
});

const controller = new ScrollMagic.Controller();
document.querySelectorAll('.reveal-text').forEach((element) => {
    new ScrollMagic.Scene({ triggerElement: element, triggerHook: 0.9, reverse: false })
    .setClassToggle(element, 'visible')
    .addTo(controller);
});

barba.init({
    transitions: [{
        leave({ current }) {
            return gsap.to(current.container, { opacity: 0 });
        },
        enter({ next }) {
            return gsap.from(next.container, { opacity: 0 });
        }
    }]
});

const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

const buttons = document.querySelectorAll('.portfolio-filter button');
const items = document.querySelectorAll('.portfolio-item');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('particles-js').appendChild(renderer.domElement);

const particleGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: 0x00bfff
});

const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleMesh);

camera.position.z = 5;

function animateParticles() {
    requestAnimationFrame(animateParticles);
    particleMesh.rotation.y += 0.001;  // Slowly rotate the particle system
    renderer.render(scene, camera);
}

animateParticles();

// Handle window resize for Three.js
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

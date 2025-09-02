import { useEffect, useRef, useState } from "react";

export default function Landing() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showMessage, setShowMessage] = useState(true);

    const message = "Welcome to AI Landing";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
        }

        const particles: Particle[] = [];
        const numParticles = 250;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
            });
        }

        function animate() {
            // @ts-ignore
            ctx.fillStyle = "#0a0a0a";
            // @ts-ignore
            ctx.fillRect(0, 0, width, height);

            // @ts-ignore
            ctx.fillStyle = "#00ffff";
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // @ts-ignore
                ctx.beginPath();
                // @ts-ignore
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                // @ts-ignore
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        // @ts-ignore
                        ctx.strokeStyle = `rgba(0,255,255,${1 - dist / 120})`;
                        // @ts-ignore
                        ctx.beginPath();
                        // @ts-ignore
                        ctx.moveTo(particles[i].x, particles[i].y);
                        // @ts-ignore
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // @ts-ignore
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        const timer = setTimeout(() => setShowMessage(false), 3500);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="h-screen w-screen relative overflow-hidden bg-black">
            <canvas ref={canvasRef} className="absolute top-0 left-0" />

            {/* Disintegrating message */}
            {showMessage ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl font-bold">
                    {message.split("").map((char, index) => (
                        <span
                            key={index}
                            className="inline-block"
                            style={{
                                display: "inline-block",
                                animation: `disintegrate 2s forwards`,
                                animationDelay: `${index * 0.05}s`,
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            ) : (
                // Robot logo after message disappears
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <svg
                        className="w-32 h-32 animate-fadeIn"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="20" y="10" width="24" height="24" rx="4" fill="#00ffff"/>
                        <circle cx="26" cy="20" r="3" fill="#000"/>
                        <circle cx="38" cy="20" r="3" fill="#000"/>
                        <rect x="26" y="30" width="12" height="6" rx="3" fill="#000"/>
                        <rect x="18" y="40" width="28" height="12" rx="2" fill="#00ffff"/>
                    </svg>
                </div>
            )}

            <style>{`
                @keyframes disintegrate {
                    0% { opacity: 1; transform: translate(0,0) rotate(0deg); }
                    100% { 
                        opacity: 0; 
                        transform: translate(${Math.random()*400-200}px, ${Math.random()*400-200}px) rotate(${Math.random()*720-360}deg); 
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s forwards;
                }
            `}</style>
        </section>
    );
}

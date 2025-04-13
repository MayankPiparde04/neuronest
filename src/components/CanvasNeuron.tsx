// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function NeuronCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const resize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', resize);

//     class Neuron {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.vx = Math.random() * 2 - 1;
//         this.vy = Math.random() * 2 - 1;
//         this.radius = 2 + Math.random() * 2;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > width) this.vx *= -1;
//         if (this.y < 0 || this.y > height) this.vy *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = '#61dafb';
//         ctx.fill();
//       }
//     }

//     const neurons = Array.from({ length: 100 }, () => new Neuron(Math.random() * width, Math.random() * height));

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);
//       for (let i = 0; i < neurons.length; i++) {
//         const a = neurons[i];
//         a.update();
//         a.draw();
//         for (let j = i + 1; j < neurons.length; j++) {
//           const b = neurons[j];
//           const dist = Math.hypot(a.x - b.x, a.y - b.y);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.strokeStyle = `rgba(97, 218, 251, ${1 - dist / 100})`;
//             ctx.lineWidth = 1;
//             ctx.stroke();
//           }
//         }
//       }
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => window.removeEventListener('resize', resize);
//   }, []);

//   return (
//     <motion.canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full -z-50 bg-black"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     />
//   );
// }

// "use client";
// import React, { useRef, useEffect } from "react";

// export default function NeuronCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const NEURON_COUNT = 20;
//     const SIGNAL_SPEED = 0.000005;
//     const MAX_CONNECTIONS = 3;

//     let neurons = [];

//     for (let i = 0; i < NEURON_COUNT; i++) {
//       neurons.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         connections: [],
//         pulse: 2
//       });
//     }

//     // Connect each neuron to others
//     neurons.forEach((n1, i) => {
//       let distances = neurons.map((n2, j) => ({
//         index: j,
//         dist:
//           i === j
//             ? Infinity
//             : Math.hypot(n1.x - n2.x, n1.y - n2.y)
//       }));
//       distances.sort((a, b) => a.dist - b.dist);
//       n1.connections = distances.slice(0, MAX_CONNECTIONS).map((d) => d.index);
//     });

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       neurons.forEach((neuron, i) => {
//         // Movement
//         neuron.x += neuron.vx;
//         neuron.y += neuron.vy;

//         if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
//         if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

//         // Neuron circle
//         ctx.beginPath();
//         ctx.arc(neuron.x, neuron.y, 3, 0, Math.PI * 2);
//         ctx.fillStyle = "#0ff";
//         ctx.fill();

//         // Signal pulse
//         neuron.pulse += SIGNAL_SPEED;
//         if (neuron.pulse > 1) neuron.pulse = 0;

//         // Connections
//         for (let j of neuron.connections) {
//           let target = neurons[j];
//           let signalProgress = (neuron.pulse + Math.random() * 0.3) % 1;
//           let sx = neuron.x + (target.x - neuron.x) * signalProgress;
//           let sy = neuron.y + (target.y - neuron.y) * signalProgress;

//           ctx.strokeStyle = "rgba(0, 255, 255, 0.15)";
//           ctx.lineWidth = 1;
//           ctx.beginPath();
//           ctx.moveTo(neuron.x, neuron.y);
//           ctx.lineTo(target.x, target.y);
//           ctx.stroke();

//           ctx.beginPath();
//           ctx.arc(sx, sy, 2, 0, Math.PI * 2);
//           ctx.fillStyle = "#0ff";
//           ctx.fill();
//         }
//       });

//       requestAnimationFrame(draw);
//     };

//     draw();

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 -z-50 w-full h-full bg-black"
//     />
//   );
// }



"use client";

import React, { useRef, useEffect } from "react";

export default function NeuronNetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const neurons = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      connections: []
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0e0e1a";
      ctx.fillRect(0, 0, width, height);

      // Clear old connections
      neurons.forEach((neuron) => (neuron.connections = []));

      // Update positions and create connections
      for (let i = 0; i < neurons.length; i++) {
        const neuronA = neurons[i];
        neuronA.x += neuronA.vx;
        neuronA.y += neuronA.vy;

        if (neuronA.x < 0 || neuronA.x > width) neuronA.vx *= -1;
        if (neuronA.y < 0 || neuronA.y > height) neuronA.vy *= -1;

        for (let j = i + 1; j < neurons.length; j++) {
          const neuronB = neurons[j];
          const dx = neuronA.x - neuronB.x;
          const dy = neuronA.y - neuronB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            neuronA.connections.push(j);
            neuronB.connections.push(i);
          }
        }
      }

      // Draw neurons and connections
      neurons.forEach((neuron, index) => {
        // Draw neuron
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#82cfff";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#82cfff";
        ctx.fill();

        // Draw connections
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgba(130, 207, 255, 0.3)";
        ctx.beginPath();
        neuron.connections.forEach((connIndex) => {
          const target = neurons[connIndex];
          const dx = neuron.x - target.x;
          const dy = neuron.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 700) return; // disconnect far neurons

          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
        });
        ctx.stroke();

        // Animate signal pulse
        ctx.beginPath();
        ctx.arc(
          neuron.x + Math.sin(Date.now() / 1000 + index) * 1.5,
          neuron.y + Math.cos(Date.now() / 1000 + index) * 1.5,
          1,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "#ffd966";
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#ffd966";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
    />
  );
}
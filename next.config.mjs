/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define a raiz do projeto pro Turbopack — silencia o warning de
  // "inferred workspace root" (há outros projetos Next em C:\GAS).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;

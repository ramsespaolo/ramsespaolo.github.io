/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- OBLIGATORIO: Crea una web estática
  images: {
    unoptimized: true, // <--- OBLIGATORIO: Para que las imágenes se vean en GitHub
  },
};

export default nextConfig;
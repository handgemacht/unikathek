/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@repo/types', '@repo/lib', '@repo/ui']
};

export default nextConfig;

import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {

        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "", // Leave empty unless using a custom port
                pathname: "/**", // Allows all paths under this domain
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**", // Allows all Sanity CDN images
            },
        ],
    },
};

export default nextConfig;

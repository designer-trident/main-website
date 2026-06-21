export const getAssetUrl = (path: string) => {
  // Check if we are in production
  const isProd = process.env.NODE_ENV === "production";
  
  // The basePath set in next.config.ts
  const basePath = isProd ? "/main-website" : "";
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
};

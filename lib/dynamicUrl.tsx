export const getApiEndpoint = (endpoint: string) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname; // Get the hostname (e.g., localhost or 192.168.0.5)
    const port = window.location.port; // Get the port (e.g., 3000)
    console.log(`http://${hostname}:${port}/api/${endpoint}`);
    return `http://${hostname}:${port}/api/${endpoint}`; // Construct the API endpoint URL
  }
};

export const getApiEndpointWithParams = (endpoint: string, params: number) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname; // Get the hostname (e.g., localhost or 192.168.0.5)
    const port = window.location.port; // Get the port (e.g., 3000)
    console.log(`http://${hostname}:${port}/api/${endpoint}`);
    return `http://${hostname}:${port}/api/${endpoint}/${params}`; // Construct the API endpoint URL
  }
};

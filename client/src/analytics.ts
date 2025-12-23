// Analytics initialization
export const initAnalytics = () => {
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  // Only load analytics if both environment variables are set
  if (analyticsEndpoint && websiteId) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${analyticsEndpoint}/umami`;
    script.setAttribute('data-website-id', websiteId);
    document.head.appendChild(script);
  }
};

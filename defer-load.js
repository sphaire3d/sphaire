// This script handles deferred loading of non-critical resources
// It helps improve initial page load performance

// Function to load scripts after page has loaded
function loadDeferredResources() {
  // Add any analytics scripts here
  // Example: Google Analytics
  loadScript('https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID', function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID'); // Replace with your actual GA ID when ready
  });
}

// Helper function to load scripts dynamically
function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  
  if (callback) {
    script.onload = callback;
  }
  
  document.body.appendChild(script);
}

// Listen for when the page has finished loading
if (document.readyState === 'complete') {
  loadDeferredResources();
} else {
  window.addEventListener('load', loadDeferredResources);
}

// Add schema.org breadcrumbs based on current page
function addBreadcrumbSchema() {
  const path = window.location.pathname;
  let breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sphaire3d.com"
      }
    ]
  };
  
  if (path !== '/') {
    // Remove leading slash and split by remaining slashes
    const segments = path.substring(1).split('/');
    
    // Add each segment to the breadcrumb
    segments.forEach((segment, index) => {
      // Format the segment for display (capitalize, replace hyphens, etc.)
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbJSON.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2, // +2 because Home is position 1
        "name": formattedName,
        "item": `https://sphaire3d.com/${segments.slice(0, index + 1).join('/')}`
      });
    });
  }
  
  // Add the breadcrumb schema to the page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbJSON);
  document.head.appendChild(script);
}

// Add breadcrumbs on page load
window.addEventListener('DOMContentLoaded', addBreadcrumbSchema);

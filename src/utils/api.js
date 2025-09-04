// src/utils/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost/backend/api';

export const api = {
  // Contact form submission
  async submitContact(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is HTML (error page)
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('text/html') !== -1) {
        throw new Error('Server returned HTML instead of JSON. Check your PHP backend.');
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Fetch projects from backend
  // async getProjects() {
  //   try {
  //     const response = await fetch(`${API_BASE_URL}/projects.php`);
      
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
      
  //     // Check if API returned success
  //     if (data.success && data.data) {
  //       console.log(`✅ API returned ${data.count} projects`);
  //       return data;
  //     } else {
  //       throw new Error(data.error || 'API returned unsuccessful response');
  //     }
      
  //   } catch (error) {
  //     console.error('Error fetching projects:', error);
  //     // Return fallback data
  //     return { 
  //       success: false,
  //       data: projectsData, // Your local fallback data
  //       error: error.message
  //     };
  //   }
  // }
};
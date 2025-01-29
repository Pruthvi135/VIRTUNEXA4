document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postContent = document.getElementById("postContent");
    const platform = document.getElementById("platform");
    const postDate = document.getElementById("postDate");
    const scheduledPosts = document.getElementById("progressList");
    const totalPosts = document.getElementById("totalPosts");
    const platformDistribution = document.getElementById("platformDistribution");
  
    let posts = [];
  
    // Handle Form Submission
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const post = {
        content: postContent.value,
        platform: platform.value,
        date: postDate.value,
      };
  
      // Add post to the list
      posts.push(post);
      renderPosts();
  
      // Reset form
      postForm.reset();
    });
  
    // Render Scheduled Posts
    function renderPosts() {
      scheduledPosts.innerHTML = "";
      posts.forEach((post, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${post.platform.toUpperCase()} - ${new Date(
          post.date
        ).toLocaleString()}`;
        scheduledPosts.appendChild(listItem);
      });
  
      updateAnalytics();
    }
  
    // Update Analytics
    function updateAnalytics() {
      totalPosts.textContent = posts.length;
  
      const platformCounts = posts.reduce((acc, post) => {
        acc[post.platform] = (acc[post.platform] || 0) + 1;
        return acc;
      }, {});
  
      platformDistribution.textContent = Object.entries(platformCounts)
        .map(([platform, count]) => `${platform}: ${count}`)
        .join(", ");
    }
  });
  
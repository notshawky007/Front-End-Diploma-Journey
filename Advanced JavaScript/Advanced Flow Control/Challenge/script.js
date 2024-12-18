document.getElementById("search-btn").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  const userInfoDiv = document.getElementById("user-info");
  const errorDiv = document.getElementById("error-message");

  // Clear previous data
  userInfoDiv.innerHTML = "";
  errorDiv.textContent = "";

  if (!username) {
    errorDiv.textContent = "Please enter a GitHub username.";
    return;
  }

  try {
    // Fetch data from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found or API error");
    }

    const data = await response.json();

    // Extract and display user data
    userInfoDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}'s avatar">
      <h2>${data.name || "No name available"}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>Followers: ${data.followers}</p>
      <p>Twitter Username: ${
        data.twitter_username
          ? `<a href="https://twitter.com/${data.twitter_username}" target="_blank">${data.twitter_username}</a>`
          : "No Twitter username available"
      }</p>
    `;
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});

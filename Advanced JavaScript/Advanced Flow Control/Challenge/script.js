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
      <h2>${data.name || data.login}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p>Followers: ${data.followers}</p>
      <p>Social Media: ${extractSocialLinks(data.bio)}</p>
    `;
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});

function extractSocialLinks(bio) {
  if (!bio) return "No social media links found.";

  // Match Twitter usernames
  const twitterRegex =
    /(?:https?:\/\/)?(?:www\.)?twitter\.com\/([A-Za-z0-9_]+)/i;
  const twitterMatch = bio.match(twitterRegex);
  const twitterLink = twitterMatch
    ? `<a href="https://twitter.com/${twitterMatch[1]}" target="_blank">@${twitterMatch[1]}</a>`
    : null;

  return twitterLink
    ? `Twitter: ${twitterLink}`
    : "No social media links found.";
}

document.addEventListener("DOMContentLoaded", function () {
    const urlInput = document.getElementById("urlInput");
    const shortenButton = document.getElementById("shortenButton");
    const resultContainer = document.getElementById("result");
    const shortenedUrlInput = document.getElementById("shortenedUrl");
    const copyButton = document.getElementById("copyButton");
  
    shortenButton.addEventListener("click", async () => {
      const longUrl = urlInput.value;
      const shortenedUrl = await shortenUrl(longUrl);
      shortenedUrlInput.value = shortenedUrl;
      resultContainer.classList.remove("hidden");
    });
  
    copyButton.addEventListener("click", () => {
      shortenedUrlInput.select();
      document.execCommand("copy");
    });
  
    async function shortenUrl(longUrl) {
      // Replace with your Bitly API key and endpoint
      const apiKey = "d657e39bf4c80f82a42e28572b9cf72668ef056b";
      const endpoint = "https://api-ssl.bitly.com/v4/shorten";
  
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: longUrl,
        }),
      });
  
      const data = await response.json();
      return data.link;
    }
  });
  
  
// d657e39bf4c80f82a42e28572b9cf72668ef056b
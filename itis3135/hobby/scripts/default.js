document.getElementById("sitename").addEventListener("click", updateTitle)

function updateTitle() {
    const siteName = "Killing Myself Simulator"

    const siteNameElement = document.getElementById("sitename");
    siteNameElement.textContent = siteName;
}
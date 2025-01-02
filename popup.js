// Listen for the summarize button click
document.getElementById('summarizeButton').addEventListener('click', function() {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        // Send a message to the content script to get the page content
        chrome.tabs.sendMessage(activeTab.id, { action: "getContent" }, function(response) {
            // Display the summary in the output div
            document.getElementById('summaryOutput').innerText = response.content;

            // Display the full content in a separate div
            document.getElementById('fullContentOutput').innerText = response.fullContent;
        });
    });
}); 
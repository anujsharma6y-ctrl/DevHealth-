document.getElementById('analyze-btn').onclick = function() {
    let btn = this;
    btn.innerHTML = "🧠 Analyzing Patterns...";
    btn.disabled = true;

    setTimeout(() => {
        // Simulated Wellness Data
        const burnoutRisk = Math.floor(Math.random() * 80) + 10;
        const nightCommits = Math.floor(Math.random() * 5);
        
        // Update Stats UI
        const burnoutElem = document.getElementById('burnout-value');
        burnoutElem.innerText = burnoutRisk + "%";
        burnoutElem.style.color = burnoutRisk > 60 ? "#ef4444" : "#10b981";
        
        document.getElementById('late-commits').innerText = nightCommits;
        document.getElementById('risk-text').innerText = burnoutRisk > 60 ? "High Fatigue Detected" : "Balance looks good";
        
        // Recommendation Logic
        const recBox = document.getElementById('recommendation-box');
        const card = document.getElementById('insight-card');
        card.style.display = 'block';
        
        if(burnoutRisk > 60) {
            recBox.innerHTML = "<strong>Action Required:</strong> High midnight activity detected. We suggest a 4-hour 'Deep Rest' block today.";
            recBox.style.color = "#b91c1c";
        } else {
            recBox.innerHTML = "<strong>Great Job:</strong> Your commit patterns are consistent. Consider a 15-minute coffee break to maintain this flow!";
            recBox.style.color = "#047857";
        }

        btn.innerHTML = "Analyze GitHub Activity";
        btn.disabled = false;
    }, 2000);
};

document.getElementById('analyze-btn').onclick = function() {
    this.innerHTML = "🧠 Analyzing Patterns...";
    
    setTimeout(() => {
        const burnout = Math.floor(Math.random() * 40) + 10; // Simulated risk
        document.getElementById('burnout-score').innerText = burnout + "%";
        
        const results = document.getElementById('results');
        const insight = document.getElementById('insight-text');
        results.style.display = 'block';
        
        if(burnout > 30) {
            insight.innerText = "High late-night activity detected. Recommend a break! ☕";
            insight.style.color = "#ff4757";
        } else {
            insight.innerText = "Healthy work-life balance maintained. Keep it up! ✨";
            insight.style.color = "#2ed573";
        }
        this.innerHTML = "Analyze My Repo";
    }, 1500);
};


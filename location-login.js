
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "admin" && password === "admin") {

        fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const region = data.region; // Example: "Tamil Nadu"
console.log("User's region:", region);
            if (region === "Tamil Nadu") {
                alert("✅ Login successful from Tamil Nadu!");
                window.location.href = "dashboard.html";
            } else {
                alert("❌ Login restricted to Tamil Nadu only.");
            }
        })
        .catch(error => {
            console.error("Location fetch error:", error);
            alert("⚠ Unable to verify your location.");
        });

    } else {
        alert("❌ Invalid username or password.");
    }
});


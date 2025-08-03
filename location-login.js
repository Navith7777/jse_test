document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "admin" && password === "admin") {
        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("Geolocation is not supported by this browser.");
        }

        function success(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Your company location (example: Tirunelveli)
            const companyLat = 8.7136;
            const companyLng = 77.7567;

            const distance = getDistanceFromLatLonInKm(userLat, userLng, companyLat, companyLng) * 1000;

            if (distance <= 100) {
                // Location is valid → redirect
                alert("✅ Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("⚠ Please login from the company location.");
            }
        }

        function error() {
            alert("❌ Location access denied. Please enable location.");
        }

        // Haversine Formula
        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

    } else {
        alert("❌ Invalid username or password.");
    }
});

document.getElementById("childsafell").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        email: document.getElementById("email").value,
        passs: document.getElementById("pass").value
    };

    fetch("https://childsafety-backend-6.onrender.com/child/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Invalid email or password");
        }
        return res.json();
    })
    .then(res => {
        alert("Login successful");
        window.location.href="home.html"
        console.log(res);
        
    })
    .catch(err => {
        alert(err.message);
        console.error(err);
    });
});

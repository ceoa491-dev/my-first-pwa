document.getElementById("childsafell").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        email: document.getElementById("email").value,
        passs: document.getElementById("pass").value,
        who: document.getElementById("who").value   // Parent / Children
    };

    fetch("http://localhost:8080/child/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) throw new Error("Invalid login");
        return res.json();
    })
    .then(res => {
        alert("Login successful");

        // save login info
        localStorage.setItem("email", res.email);
        localStorage.setItem("role", res.who);

        // ONE PAGE FOR BOTH
        window.location.href = "home.html";
    })
    .catch(err => {
        alert(err.message);
        console.error(err);
    });
});

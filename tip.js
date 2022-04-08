const form = document.querySelector("form");

const send = async function(amount) {    
    const accounts = await window.ethereum.request( { method: "eth_requestAccounts" });

    if (accounts.length > 0) {
        window.ethereum.request( { 
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: "0x1314f994b2506E91609ca4EEa2a77364Dfd8fdFB",
                value: "10"
            }]
        });
    }
};

if (window.ethereum) {
    form.classList.add("has-eth");
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (window.ethereum) {
        const input = form.querySelector("input")
        send(input.value);
    } else {
        alert("Please install a digital wallet!")
    }
});
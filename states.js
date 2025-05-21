const statesData = [
    { name: "Andhra Pradesh", capital: "Amaravati", dressing: "Dhoti and Saree", dressingImg: "https://via.placeholder.com/300?text=Andhra+Dressing", food: "Pulihora", touristSpot: "Tirupati Temple", touristImg: "https://via.placeholder.com/300?text=Tirupati+Temple", festival: "Ugadi", river: "Godavari", dance: "Kuchipudi", language: "Telugu" },
    { name: "Arunachal Pradesh", capital: "Itanagar", dressing: "Traditional Shawls", dressingImg: "https://via.placeholder.com/300?text=Arunachal+Dressing", food: "Thukpa", touristSpot: "Tawang Monastery", touristImg: "https://via.placeholder.com/300?text=Tawang+Monastery", festival: "Losar", river: "Brahmaputra", dance: "Bardo Chham", language: "English" },
    { name: "Assam", capital: "Dispur", dressing: "Mekhela Chador", dressingImg: "https://via.placeholder.com/300?text=Assam+Dressing", food: "Pithas", touristSpot: "Kaziranga National Park", touristImg: "https://via.placeholder.com/300?text=Kaziranga", festival: "Bihu", river: "Brahmaputra", dance: "Bihu Dance", language: "Assamese" },
    // Add more states...
];

const stateList = document.getElementById("state-list");

statesData.forEach((state, index) => {
    const stateItem = document.createElement("div");
    stateItem.classList.add("state-item");
    stateItem.innerHTML = state.name;

    // Link to the state details page
    stateItem.addEventListener("click", () => {
        localStorage.setItem("selectedState", JSON.stringify(state)); // Store selected state data
        window.location.href = "state.html"; // Navigate to the state page
    });

    stateList.appendChild(stateItem);
});

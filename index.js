const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ];
  
  // Function to calculate and update the average starting price
  function updateAveragePrice() {
      const averagePriceElement = document.getElementById("average-price");
      const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
      const averagePrice = totalPrices / freelancers.length;
      averagePriceElement.textContent = averagePrice.toFixed(2);
  }
  
  // Function to display freelancers
  function displayFreelancers() {
      const freelancersList = document.getElementById("freelancers-list");
  
      freelancersList.innerHTML = ''; // Clear the list
  
      freelancers.forEach((freelancer) => {
          const freelancerDiv = document.createElement("div");
          freelancerDiv.classList.add("freelancer");
  
          const name = document.createElement("p");
          name.textContent = `Name: ${freelancer.name}`;
  
          const occupation = document.createElement("p");
          occupation.textContent = `Occupation: ${freelancer.occupation}`;
  
          const price = document.createElement("p");
          price.textContent = `Starting Price: $${freelancer.price}`;
  
          freelancerDiv.appendChild(name);
          freelancerDiv.appendChild(occupation);
          freelancerDiv.appendChild(price);
  
          freelancersList.appendChild(freelancerDiv);
      });
  
      updateAveragePrice();
  }
  
  // Periodically add new freelancers (for simulation)
  let newFreelancerIndex = 0;
  setInterval(() => {
      if (newFreelancerIndex < freelancers.length) {
          const newFreelancer = freelancers[newFreelancerIndex];
          newFreelancerIndex++;
          freelancers.push(newFreelancer);
          displayFreelancers();
      }
  }, 5000);
  
  // Initial display of freelancers
  displayFreelancers();
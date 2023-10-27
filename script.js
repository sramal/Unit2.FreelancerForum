const freelancer = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    { name: "Dan", occupation: "Designer", startingPrice: 100 },
    { name: "John", occupation: "Writer", startingPrice: 30 },
    { name: "Sean", occupation: "Programmer", startingPrice: 50 },
    { name: "Ryan", occupation: "Teacher", startingPrice: 70 },
    { name: "Larry", occupation: "Writer", startingPrice: 100 },
    { name: "Curly", occupation: "Designer", startingPrice: 200 },
    { name: "Moe", occupation: "Teacher", startingPrice: 50 },
    { name: "Sue", occupation: "Programmer", startingPrice: 70 },
    { name: "Amy", occupation: "Designer", startingPrice: 100 },
];

const freelancerList = document.getElementById("list");

let averagePrice = 0;
let numOfFreelancers = 0;

const addFreelancer = (index) => {
    console.log("Index " + index);
    if (index < freelancer.length) {
        numOfFreelancers++;

        let node = document.createElement("p");
        let textNode = document.createTextNode(`${freelancer[index].name}`);
        node.appendChild(textNode);
        freelancerList.appendChild(node);

        node = document.createElement("p");
        textNode = document.createTextNode(`${freelancer[index].occupation}`);
        node.appendChild(textNode);
        freelancerList.appendChild(node);

        node = document.createElement("p");
        textNode = document.createTextNode(
            "$" + `${freelancer[index].startingPrice}`
        );
        node.appendChild(textNode);
        freelancerList.appendChild(node);

        if (numOfFreelancers > 1) {
            averagePrice = (
                (averagePrice * (numOfFreelancers - 1) +
                    freelancer[index].startingPrice) /
                numOfFreelancers
            ).toFixed(2);
        } else {
            averagePrice = freelancer[index].startingPrice.toFixed(2);
        }
        const pNode = (document.querySelector("#main p").innerHTML =
            "The average starting price is $" + `${averagePrice}`);

        setTimeout(addFreelancer, 5000, numOfFreelancers);
    }
};

addFreelancer(numOfFreelancers);

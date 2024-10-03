document.getElementById("jobButton").addEventListener("click", function() {
    document.getElementById("jobListings").style.display = "block";
    loadJobs();
    loadTestimonials();
    displayPaymentMessage();
});

function loadJobs() {
    const jobs = [
        "Hotel Manager at Sarova Hotels, Nairobi",
        "Barista at Java House, Nairobi",
        "Waitstaff at KFC TRM, Nairobi",
        "Receptionist at Hilton Nairobi",
        "Cook at The Boma Nairobi",
        "Bartender at The Panari Hotel, Nairobi"
    ];

    const jobsList = document.getElementById("jobsList");
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = job;
        jobsList.appendChild(li);
    });
}

function loadTestimonials() {
    const testimonials = [
        { name: "Kranja", feedback: "I found my dream job in hospitality thanks to this site!" },
        { name: "Kyalo", feedback: "The job listings are accurate and up to date." },
        { name: "Wambui", feedback: "I love the easy access to great opportunities!" },
        { name: "Amani", feedback: "This platform helped me land a barista job at my favorite café!" },
        { name: "Muthoni", feedback: "Highly recommend! Fast and reliable job listings." }
    ];

    const testimonialList = document.getElementById("testimonialList");
    testimonials.forEach(testimonial => {
        const li = document.createElement("li");
        li.textContent = `${testimonial.name}: "${testimonial.feedback}"`;
        testimonialList.appendChild(li);
    });
}

function displayPaymentMessage() {
    document.getElementById("paymentMessage").style.display = "block";
}

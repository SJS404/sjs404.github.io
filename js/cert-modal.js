
const modalData = {
    L2: {
        imgSrc: "/assets/badges/Certs/L2.jpg" ,
        description: "BTEC Level 2 Technical Certificate in IT Support."
    },
    L3: {
        imgSrc: "/assets/badges/Certs/L3Cert.jpg",
        description: "Level 3 Diploma for ICT Systems and Principles for IT Professionals."
    },
    CS: {
        imgSrc: "/assets/badges/Certs/CustomerService.jpg",
        description: "Introductory Certificate in Customer Service."
    },
    CCNAv7: {
        imgSrc: "/assets/badges/Certs/CiscoMerit.png" ,
        description: "CCNAv7 Introduction To Networks"
    },
    Bash: {
        imgSrc: "/assets/badges/Certs/Bash.png" ,
        description: "Learn Bash Shell Scripting"
    },
    CLI: {
        imgSrc: "/assets/badges/Certs/CLI.png" ,
        description: "Learn The Command Line"
    },
    Code: {
        imgSrc: "/assets/badges/Certs/Code.png" ,
        description: "Learn How To Code"
    },
    Cyber: {
        imgSrc: "/assets/badges/Certs/CyberIntro.png" ,
        description: "Introduction To Cybersecurity"
    },
    ComputerSystems: {
        imgSrc: "/assets/badges/Certs/CompSystemsOUCert.jpg" ,
        description: "Computers & Computer Systems"
    },
    ICT: {
        imgSrc: "/assets/badges/Certs/ICTOUCert.jpg" ,
        description: "Introducing ICT Systems"
    },
    Electronics: {
        imgSrc: "/assets/badges/Certs/Electronics.jpg" ,
        description: "Introduction To Electronics"
    },

};


const modal = document.getElementById('cert-modal');
const modalImage = document.getElementById('cert-modal-image');
const modalDescription = document.getElementById('cert-modal-description');
const closeBtn = document.querySelector('.close-btn');


function openModal(modalId) {
    const { imgSrc, description } = modalData[modalId];
    modalImage.src = imgSrc;
    modalDescription.textContent = description;
    
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}


function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}


document.querySelectorAll('.cert-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = event.target.getAttribute('data-modal');
        openModal(modalId);
    });
});


closeBtn.addEventListener('click', closeModal);


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

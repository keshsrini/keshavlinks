// Add your profile links here
const profileLinks = {
    linkedin: "https://www.linkedin.com/in/keshavsrini1525/",
    github: "https://github.com/keshsrini",
    email: "mailto:keshavsrinivasm@gmail.com",
    //portfolio: "https://your-portfolio-website.com",
    instagram: "https://www.instagram.com/keshavsrini",
    hackerrank: "https://www.hackerrank.com/profile/keshavsrinivasm",
    leetcode: "https://leetcode.com/u/keshavsrini/",
    credly: "https://www.credly.com/users/keshav-srinivas-m"
};

// Add links to all social buttons
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-link');
    
    links.forEach(link => {
        const className = Array.from(link.classList)
            .find(cls => profileLinks[cls])
            || link.classList[1];
            
        if (profileLinks[className]) {
            link.href = profileLinks[className];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });

    // Add hover animation
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
});
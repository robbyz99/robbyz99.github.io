// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const phoneInput = document.getElementById('phone');
    const faqItems = document.querySelectorAll('.faq-item');

    // Phone number formatting
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }

    // FAQ accordion functionality
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});

function handleContactForm(form) {
    const formData = new FormData(form);
    const contactData = {
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on'
    };

    // Validate form
    if (!validateContactForm(contactData)) {
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        showSuccessMessage('Thank you for your message! We will get back to you within 24 hours.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateContactForm(data) {
    // Check required fields
    if (!data.firstName.trim()) {
        showErrorMessage('Please enter your first name');
        return false;
    }

    if (!data.lastName.trim()) {
        showErrorMessage('Please enter your last name');
        return false;
    }

    if (!data.email.trim()) {
        showErrorMessage('Please enter your email address');
        return false;
    }

    if (!validateEmail(data.email)) {
        showErrorMessage('Please enter a valid email address');
        return false;
    }

    if (!data.subject) {
        showErrorMessage('Please select a subject');
        return false;
    }

    if (!data.message.trim()) {
        showErrorMessage('Please enter your message');
        return false;
    }

    if (data.message.trim().length < 10) {
        showErrorMessage('Please provide a more detailed message (at least 10 characters)');
        return false;
    }

    return true;
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Add styles for contact page specific elements
const contactStyles = `
    .contact-section {
        padding: 6rem 0;
        background: var(--black);
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }

    .contact-info-section h2 {
        color: var(--primary-gold);
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
    }

    .contact-info-section > p {
        color: var(--light-gray);
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 3rem;
    }

    .contact-details {
        margin-bottom: 3rem;
    }

    .contact-item {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
        padding: 1.5rem;
        background: var(--dark-gray);
        border-radius: 8px;
        border: 1px solid var(--medium-gray);
    }

    .contact-icon {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        background: var(--primary-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        font-size: 1.2rem;
    }

    .contact-text h3 {
        color: var(--white);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .contact-text p {
        color: var(--light-gray);
        margin-bottom: 0.5rem;
    }

    .contact-text a {
        color: var(--primary-gold);
        text-decoration: none;
        font-weight: 600;
    }

    .contact-text a:hover {
        text-decoration: underline;
    }

    .contact-hours,
    .contact-note {
        font-size: 0.9rem;
        color: var(--light-gray);
    }

    .btn-small {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }

    .social-links h3 {
        color: var(--primary-gold);
        margin-bottom: 1rem;
    }

    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-icon {
        width: 40px;
        height: 40px;
        background: var(--medium-gray);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .social-icon:hover {
        background: var(--primary-gold);
        color: var(--black);
        transform: translateY(-2px);
    }

    .form-container {
        background: var(--dark-gray);
        padding: 2.5rem;
        border-radius: 12px;
        border: 1px solid var(--medium-gray);
    }

    .form-container h2 {
        color: var(--primary-gold);
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .contact-form .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--medium-gray);
        border-radius: 4px;
        background: var(--black);
        color: var(--white);
        font-size: 1rem;
    }

    .contact-form .form-group select:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
    }

    .contact-form .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--medium-gray);
        border-radius: 4px;
        background: var(--black);
        color: var(--white);
        font-size: 1rem;
        resize: vertical;
        min-height: 120px;
        font-family: inherit;
    }

    .contact-form .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        color: var(--light-gray);
        font-size: 0.9rem;
    }

    .checkbox-label input[type="checkbox"] {
        width: auto;
        margin: 0;
    }

    .map-section {
        padding: 6rem 0;
        background: var(--dark-gray);
    }

    .map-container {
        margin-bottom: 2rem;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--medium-gray);
    }

    .map-info {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        align-items: center;
        background: var(--black);
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--medium-gray);
    }

    .map-details h3 {
        color: var(--primary-gold);
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    .map-details p {
        color: var(--light-gray);
        margin-bottom: 0.5rem;
    }

    .map-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .faq-section {
        padding: 6rem 0;
        background: var(--black);
    }

    .faq-grid {
        display: grid;
        gap: 1rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .faq-item {
        background: var(--dark-gray);
        border-radius: 8px;
        border: 1px solid var(--medium-gray);
        overflow: hidden;
    }

    .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background 0.3s ease;
    }

    .faq-question:hover {
        background: var(--medium-gray);
    }

    .faq-question h3 {
        color: var(--white);
        font-size: 1.1rem;
        margin: 0;
    }

    .faq-question i {
        color: var(--primary-gold);
        transition: transform 0.3s ease;
    }

    .faq-item.active .faq-question i {
        transform: rotate(180deg);
    }

    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        color: var(--light-gray);
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .form-container {
            padding: 1.5rem;
        }

        .map-info {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .map-actions {
            justify-content: center;
        }

        .contact-item {
            flex-direction: column;
            text-align: center;
        }

        .social-icons {
            justify-content: center;
        }
    }
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet);


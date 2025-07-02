// Vehicle data
const vehicles = {
    cullinan: {
        name: "Rolls Royce Cullinan",
        type: "Luxury SUV",
        image: "images/exotic_fleet.svg",
        dailyRate: 899,
        weeklyRate: 5500,
        monthlyRate: 20000,
        features: ["5 Seats", "Automatic Transmission", "Premium Sound System", "Massage Seats", "Champagne Cooler"],
        description: "Experience the pinnacle of luxury with the Rolls Royce Cullinan. This ultra-luxury SUV combines unparalleled comfort with commanding presence, perfect for special occasions or executive travel.",
        specs: {
            engine: "6.75L V12 Twin-Turbo",
            power: "563 HP",
            acceleration: "0-60 mph in 5.2s",
            topSpeed: "155 mph"
        }
    },
    huracan: {
        name: "Lamborghini Huracan",
        type: "Exotic Supercar",
        image: "images/exotic_fleet.svg",
        dailyRate: 1299,
        weeklyRate: 8500,
        monthlyRate: 32000,
        features: ["2 Seats", "7-Speed Automatic", "Carbon Fiber Interior", "Launch Control", "Track Mode"],
        description: "Feel the thrill of Italian engineering with the Lamborghini Huracan. This exotic supercar delivers breathtaking performance and head-turning style.",
        specs: {
            engine: "5.2L V10",
            power: "630 HP",
            acceleration: "0-60 mph in 2.9s",
            topSpeed: "202 mph"
        }
    },
    sclass: {
        name: "Mercedes S-Class",
        type: "Luxury Sedan",
        image: "images/luxury_showroom.svg",
        dailyRate: 399,
        weeklyRate: 2400,
        monthlyRate: 9000,
        features: ["5 Seats", "Automatic Transmission", "WiFi Hotspot", "Heated/Cooled Seats", "Panoramic Roof"],
        description: "The Mercedes S-Class sets the standard for luxury sedans. Enjoy cutting-edge technology, supreme comfort, and elegant styling.",
        specs: {
            engine: "3.0L I6 Turbo",
            power: "429 HP",
            acceleration: "0-60 mph in 4.9s",
            topSpeed: "130 mph"
        }
    },
    x7: {
        name: "BMW X7",
        type: "Luxury SUV",
        image: "images/luxury_showroom.svg",
        dailyRate: 299,
        weeklyRate: 1800,
        monthlyRate: 6800,
        features: ["7 Seats", "Automatic Transmission", "3-Zone Climate", "Gesture Control", "Wireless Charging"],
        description: "The BMW X7 offers spacious luxury for the whole family. Perfect for group travel with premium amenities and advanced technology.",
        specs: {
            engine: "3.0L I6 Turbo",
            power: "335 HP",
            acceleration: "0-60 mph in 6.1s",
            topSpeed: "130 mph"
        }
    },
    ferrari488: {
        name: "Ferrari 488 GTB",
        type: "Exotic Supercar",
        image: "images/exotic_fleet.svg",
        dailyRate: 1599,
        weeklyRate: 10500,
        monthlyRate: 40000,
        features: ["2 Seats", "7-Speed Dual-Clutch", "Carbon Fiber Body", "Launch Control", "Race Mode"],
        description: "Experience the legendary Ferrari performance with the 488 GTB. This masterpiece combines stunning design with incredible performance.",
        specs: {
            engine: "3.9L V8 Twin-Turbo",
            power: "661 HP",
            acceleration: "0-60 mph in 3.0s",
            topSpeed: "205 mph"
        }
    },
    panamera: {
        name: "Porsche Panamera",
        type: "Luxury Sport Sedan",
        image: "images/luxury_showroom.svg",
        dailyRate: 499,
        weeklyRate: 3200,
        monthlyRate: 12000,
        features: ["4 Seats", "8-Speed PDK", "Sport Chrono", "Air Suspension", "Bose Sound"],
        description: "The Porsche Panamera perfectly blends luxury and performance. Enjoy sports car dynamics with sedan practicality.",
        specs: {
            engine: "4.0L V8 Twin-Turbo",
            power: "473 HP",
            acceleration: "0-60 mph in 4.2s",
            topSpeed: "179 mph"
        }
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    const modal = document.getElementById('vehicle-modal');
    const closeBtn = document.querySelector('.close');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            vehicleCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const categories = card.getAttribute('data-category');
                    if (categories.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Modal functionality
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const vehicleId = this.getAttribute('data-vehicle');
            const vehicle = vehicles[vehicleId];
            
            if (vehicle) {
                showVehicleModal(vehicle);
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function showVehicleModal(vehicle) {
    const modal = document.getElementById('vehicle-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="vehicle-detail">
            <div class="vehicle-detail-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
            </div>
            <div class="vehicle-detail-info">
                <h2>${vehicle.name}</h2>
                <p class="vehicle-detail-type">${vehicle.type}</p>
                <p class="vehicle-description">${vehicle.description}</p>
                
                <div class="vehicle-specs">
                    <h3>Specifications</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <strong>Engine:</strong> ${vehicle.specs.engine}
                        </div>
                        <div class="spec-item">
                            <strong>Power:</strong> ${vehicle.specs.power}
                        </div>
                        <div class="spec-item">
                            <strong>0-60 mph:</strong> ${vehicle.specs.acceleration}
                        </div>
                        <div class="spec-item">
                            <strong>Top Speed:</strong> ${vehicle.specs.topSpeed}
                        </div>
                    </div>
                </div>

                <div class="vehicle-features-detail">
                    <h3>Features</h3>
                    <ul>
                        ${vehicle.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="vehicle-pricing-detail">
                    <h3>Pricing</h3>
                    <div class="pricing-options">
                        <div class="pricing-option">
                            <span class="pricing-label">Daily Rate</span>
                            <span class="pricing-value">$${vehicle.dailyRate}</span>
                        </div>
                        <div class="pricing-option">
                            <span class="pricing-label">Weekly Rate</span>
                            <span class="pricing-value">$${vehicle.weeklyRate}</span>
                        </div>
                        <div class="pricing-option">
                            <span class="pricing-label">Monthly Rate</span>
                            <span class="pricing-value">$${vehicle.monthlyRate}</span>
                        </div>
                    </div>
                </div>

                <div class="booking-form-container">
                    <h3>Reserve Now</h3>
                    <form class="booking-form" onsubmit="handleBooking(event, '${vehicle.name}')">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="pickup-date">Pickup Date</label>
                                <input type="date" id="pickup-date" name="pickup-date" required>
                            </div>
                            <div class="form-group">
                                <label for="return-date">Return Date</label>
                                <input type="date" id="return-date" name="return-date" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="customer-name">Full Name</label>
                                <input type="text" id="customer-name" name="customer-name" required>
                            </div>
                            <div class="form-group">
                                <label for="customer-phone">Phone Number</label>
                                <input type="tel" id="customer-phone" name="customer-phone" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="customer-email">Email Address</label>
                            <input type="email" id="customer-email" name="customer-email" required>
                        </div>
                        <div class="form-group">
                            <label for="license-upload">Driver's License (Front & Back)</label>
                            <input type="file" id="license-upload" name="license-upload" accept="image/*" multiple required>
                            <small>Please upload both front and back of your driver's license</small>
                        </div>
                        <div class="form-group">
                            <label for="insurance-upload">Insurance Card</label>
                            <input type="file" id="insurance-upload" name="insurance-upload" accept="image/*" required>
                        </div>
                        <div class="deposit-info">
                            <p><i class="fas fa-info-circle"></i> A $1 deposit is required to reserve this vehicle. Full payment will be processed upon approval.</p>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">Reserve for $1 Deposit</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickup-date').min = today;
    document.getElementById('return-date').min = today;

    // Update return date minimum when pickup date changes
    document.getElementById('pickup-date').addEventListener('change', function() {
        document.getElementById('return-date').min = this.value;
    });
}

function handleBooking(event, vehicleName) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const bookingData = {
        vehicle: vehicleName,
        pickupDate: formData.get('pickup-date'),
        returnDate: formData.get('return-date'),
        customerName: formData.get('customer-name'),
        customerPhone: formData.get('customer-phone'),
        customerEmail: formData.get('customer-email'),
        licenseFiles: formData.getAll('license-upload'),
        insuranceFile: formData.get('insurance-upload')
    };

    // Validate form
    if (!validateBookingForm(bookingData)) {
        return;
    }

    // Simulate booking process
    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        showSuccessMessage('Booking request submitted! We will contact you within 24 hours to confirm your reservation.');
        document.getElementById('vehicle-modal').style.display = 'none';
        submitBtn.textContent = 'Reserve for $1 Deposit';
        submitBtn.disabled = false;
    }, 2000);
}

function validateBookingForm(data) {
    // Check if pickup date is before return date
    const pickupDate = new Date(data.pickupDate);
    const returnDate = new Date(data.returnDate);
    
    if (pickupDate >= returnDate) {
        alert('Return date must be after pickup date');
        return false;
    }

    // Check if license files are uploaded (should be 2 files)
    if (data.licenseFiles.length < 2) {
        alert('Please upload both front and back of your driver\'s license');
        return false;
    }

    // Check if insurance file is uploaded
    if (!data.insuranceFile || data.insuranceFile.size === 0) {
        alert('Please upload your insurance card');
        return false;
    }

    return true;
}

// Add styles for the modal and vehicle details
const modalStyles = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1001;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        overflow-y: auto;
    }

    .modal-content {
        background-color: var(--dark-gray);
        margin: 2% auto;
        padding: 0;
        border-radius: 12px;
        width: 90%;
        max-width: 1000px;
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
    }

    .close {
        color: var(--light-gray);
        float: right;
        font-size: 28px;
        font-weight: bold;
        position: absolute;
        right: 20px;
        top: 15px;
        z-index: 1002;
        cursor: pointer;
    }

    .close:hover {
        color: var(--primary-gold);
    }

    .vehicle-detail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 2rem;
    }

    .vehicle-detail-image img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
    }

    .vehicle-detail-info h2 {
        color: var(--primary-gold);
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .vehicle-detail-type {
        color: var(--light-gray);
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .vehicle-description {
        color: var(--white);
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .vehicle-specs h3,
    .vehicle-features-detail h3,
    .vehicle-pricing-detail h3,
    .booking-form-container h3 {
        color: var(--primary-gold);
        font-size: 1.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--medium-gray);
        padding-bottom: 0.5rem;
    }

    .specs-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .spec-item {
        color: var(--white);
        padding: 0.5rem;
        background: var(--medium-gray);
        border-radius: 4px;
    }

    .vehicle-features-detail ul {
        list-style: none;
        margin-bottom: 2rem;
    }

    .vehicle-features-detail li {
        color: var(--white);
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .vehicle-features-detail li i {
        color: var(--primary-gold);
    }

    .pricing-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .pricing-option {
        background: var(--medium-gray);
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
    }

    .pricing-label {
        display: block;
        color: var(--light-gray);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .pricing-value {
        display: block;
        color: var(--primary-gold);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .booking-form {
        background: var(--black);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--medium-gray);
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-group label {
        display: block;
        color: var(--white);
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--medium-gray);
        border-radius: 4px;
        background: var(--dark-gray);
        color: var(--white);
        font-size: 1rem;
    }

    .form-group input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 5px rgba(212, 175, 55, 0.3);
    }

    .form-group small {
        color: var(--light-gray);
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: block;
    }

    .deposit-info {
        background: var(--medium-gray);
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    .deposit-info p {
        color: var(--white);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .deposit-info i {
        color: var(--primary-gold);
    }

    .btn-full {
        width: 100%;
        justify-content: center;
        font-size: 1.1rem;
        padding: 1rem;
    }

    @media (max-width: 768px) {
        .vehicle-detail {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
        }

        .form-row {
            grid-template-columns: 1fr;
        }

        .pricing-options {
            grid-template-columns: 1fr;
        }

        .specs-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);


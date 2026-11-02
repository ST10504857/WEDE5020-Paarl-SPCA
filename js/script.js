// WEDE5020 Part 3 - Paarl SPCA - ST10504857
document.addEventListener('DOMContentLoaded', function() {
    // 1. Form Validation with SEO-friendly error handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'green';
                    if (input.type === 'email') {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailPattern.test(input.value)) {
                            isValid = false;
                            input.style.borderColor = 'red';
                        }
                    }
                }
            });
            if (isValid) {
                alert('Thank you! Paarl SPCA will contact you soon.');
                form.reset();
                inputs.forEach(i => i.style.borderColor = '#ccc');
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    });

    // 2. Live Search for Animals/Services
    const searchInput = document.getElementById('animalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            document.querySelectorAll('.animal-card, .pet-card, .service-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(filter) ? '' : 'none';
            });
        });
    }

    // 3. Interactive Map - Paarl SPCA Location
    const mapDiv = document.getElementById('map');
    if (mapDiv && typeof L !== 'undefined') {
        const map = L.map('map').setView([-33.7345, 18.9622], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker([-33.7345, 18.9622]).addTo(map)
            .bindPopup('<b>Paarl SPCA</b><br>Visit us to adopt!').openPopup();
    }

    // 4. Dynamic Year for SEO Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 5. Donation selector enhancement
    document.querySelectorAll('.donation-amount').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.donation-amount').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const custom = document.getElementById('customAmount');
            if (custom) custom.value = this.dataset.amount;
        });
    });

    console.log('WEDE5020 Part 3 - Paarl SPCA loaded successfully');
});

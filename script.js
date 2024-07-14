const form = document.getElementById('bookingForm');
const status = document.getElementById('bookingStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyS_KlTwiBLYv82MB0IniDczrV67HW6Ezgd_q0Kw7rpcDO2t8UdT7gZXsridTYuu6w91A/exec', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
            status.textContent = 'Забронировано!';
        } else {
            status.textContent = 'Не удалось забронировать. Попробуйте ещё раз.';
        }
    } catch (error) {
        status.textContent = 'Ошибка при отправке данных.';
        console.error('Ошибка:', error);
    }
});

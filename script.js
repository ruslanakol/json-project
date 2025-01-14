// Додаємо обробник подій до всіх кнопок
document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        // Ховаємо всі блоки контенту
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });

        // Показуємо потрібний блок контенту
        const target = button.getAttribute('data-target');
        document.getElementById(target).style.display = 'block';
    });
});

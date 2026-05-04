document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Load saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('ph-moon', 'ph-sun');
    }

    // Function to update chart colors for visibility
    const updateChartColors = () => {
        if (window.salesChart) {
            const isDark = document.body.classList.contains('dark-mode');
            const textColor = isDark ? '#a0a0a0' : '#747d8c';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

            window.salesChart.options.scales.x.ticks.color = textColor;
            window.salesChart.options.scales.y.ticks.color = textColor;
            window.salesChart.options.scales.y.grid.color = gridColor;
            window.salesChart.update();
        }
    };

    // Initial chart color update
    setTimeout(updateChartColors, 200);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        // Update UI
        if (isDark) {
            themeIcon.classList.replace('ph-moon', 'ph-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('ph-sun', 'ph-moon');
            localStorage.setItem('theme', 'light');
        }

        // Apply colors to chart
        updateChartColors();
    });
});
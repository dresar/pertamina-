// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // About Video Modal
    const aboutVideoBtn = document.getElementById('aboutVideoBtn');
    const videoModal = document.getElementById('videoModal');
    
    if (aboutVideoBtn && videoModal) {
        const videoFrame = videoModal.querySelector('iframe');
        const modalClose = videoModal.querySelector('.modal-close');
        
        aboutVideoBtn.addEventListener('click', function() {
            // Replace 'about:blank' with a real YouTube video URL for production
            videoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
            videoModal.style.display = 'block';
            setTimeout(() => {
                videoModal.classList.add('show');
            }, 10);
        });
        
        modalClose.addEventListener('click', function() {
            videoModal.classList.remove('show');
            setTimeout(() => {
                videoModal.style.display = 'none';
                videoFrame.src = 'about:blank';
            }, 300);
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                videoModal.classList.remove('show');
                setTimeout(() => {
                    videoModal.style.display = 'none';
                    videoFrame.src = 'about:blank';
                }, 300);
            }
        });
    }
    
    // Service Modals
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            const serviceLink = card.querySelector('.service-link');
            const serviceType = card.getAttribute('data-service');
            const modal = document.getElementById(`${serviceType}Modal`);
            
            if (serviceLink && modal) {
                const closeBtn = modal.querySelector('.service-modal-close');
                
                serviceLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    modal.style.display = 'block';
                    setTimeout(() => {
                        modal.classList.add('active');
                    }, 10);
                });
                
                closeBtn.addEventListener('click', function() {
                    modal.classList.remove('active');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 500);
                });
                
                window.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 500);
                    }
                });
            }
        });
        
        // Service Gallery Items
        const galleryItems = document.querySelectorAll('.service-gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                const imgAlt = this.querySelector('img').getAttribute('alt');
                
                // You could open a lightbox here
                const modal = document.getElementById('galleryModal');
                if (modal) {
                    const modalImg = modal.querySelector('#modalImage');
                    const modalCaption = modal.querySelector('#modalCaption');
                    
                    modalImg.src = imgSrc;
                    modalCaption.textContent = imgAlt;
                    
                    modal.style.display = 'block';
                    setTimeout(() => {
                        modal.classList.add('show');
                    }, 10);
                }
            });
        });
        
        // Service Contact Button
        const contactBtns = document.querySelectorAll('.service-contact-btn');
        contactBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Scroll to contact section
                const contactSection = document.getElementById('kontak');
                if (contactSection) {
                    window.scrollTo({
                        top: contactSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close the modal
                    const modal = this.closest('.service-modal');
                    if (modal) {
                        modal.classList.remove('active');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 500);
                    }
                }
            });
        });
    }
    
    
    // ======= INITIALIZATION & UTILITIES =======
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tabs
    initTabs();
    
    // Initialize charts
    initCharts();
    
    // Initialize table functionality
    initTables();
    
    // Initialize comparison tool
    initComparison();
    
    // Initialize event listeners
    initEventListeners();
});

// Utility function to format numbers
function formatNumber(number, decimals = 0) {
    return number.toLocaleString('id-ID', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Utility function to get random color with opacity
function getRandomColor(opacity = 1) {
    const colors = [
        `rgba(0, 94, 158, ${opacity})`,
        `rgba(0, 129, 213, ${opacity})`,
        `rgba(56, 176, 0, ${opacity})`,
        `rgba(245, 130, 31, ${opacity})`,
        `rgba(220, 53, 69, ${opacity})`,
        `rgba(255, 193, 7, ${opacity})`,
        `rgba(13, 110, 253, ${opacity})`,
        `rgba(108, 117, 125, ${opacity})`
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ======= TAB NAVIGATION =======
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// ======= CHART INITIALIZATION =======
function initCharts() {
    // Initialize Chart.js
    initMainRevenueChart();
    initRevenueCompositionChart();
    initOperatingMarginChart();
    initYearComparisonChart();
    initSegmentCharts();
    initOperationalCharts();
    initFinancialCharts();
    initTrendsCharts();
    initRatioCharts();
}

function initMainRevenueChart() {
    const ctx = document.getElementById('mainRevenueChart').getContext('2d');
    
    // Sample data
    const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const revenue = [22.3, 25.7, 23.1, 28.4, 38.9, 42.5, 45.2];
    const oilProduction = [165.4, 170.2, 167.8, 175.3, 185.6, 198.2, 203.5];
    const gasProduction = [810, 835, 820, 865, 910, 953, 987];
    
    const mainRevenueChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Pendapatan (Trilyun Rp)',
                    data: revenue,
                    backgroundColor: 'rgba(0, 94, 158, 0.7)',
                    borderColor: 'rgba(0, 94, 158, 1)',
                    borderWidth: 1,
                    order: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Produksi Minyak (MBOPD)',
                    data: oilProduction,
                    type: 'line',
                    borderColor: 'rgba(245, 130, 31, 1)',
                    backgroundColor: 'rgba(245, 130, 31, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(245, 130, 31, 1)',
                    tension: 0.4,
                    order: 0,
                    yAxisID: 'y1'
                },
                {
                    label: 'Produksi Gas (MMSCFD)',
                    data: gasProduction,
                    type: 'line',
                    borderColor: 'rgba(56, 176, 0, 1)',
                    backgroundColor: 'rgba(56, 176, 0, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                    tension: 0.4,
                    order: 0,
                    yAxisID: 'y2',
                    hidden: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Pendapatan (Trilyun Rp)'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Produksi Minyak (MBOPD)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                y2: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: false,
                        text: 'Produksi Gas (MMSCFD)'
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    display: false
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Add event listeners for chart type buttons
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartType = this.getAttribute('data-type');
            
            document.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            mainRevenueChart.config.type = chartType;
            
            if (chartType === 'line') {
                mainRevenueChart.data.datasets[0].type = 'line';
                mainRevenueChart.data.datasets[0].tension = 0.4;
            } else if (chartType === 'bar') {
                mainRevenueChart.data.datasets[0].type = 'bar';
            } else if (chartType === 'area') {
                mainRevenueChart.data.datasets[0].type = 'line';
                mainRevenueChart.data.datasets[0].fill = true;
                mainRevenueChart.data.datasets[0].tension = 0.4;
                mainRevenueChart.data.datasets[1].fill = true;
                mainRevenueChart.data.datasets[2].fill = true;
            }
            
            mainRevenueChart.update();
        });
    });
}

function initRevenueCompositionChart() {
    const ctx = document.getElementById('revenueCompositionChart').getContext('2d');
    
    // Sample data
    const revenueCompositionChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Penjualan Minyak Mentah', 'Penjualan Gas Bumi'],
            datasets: [{
                data: [32.8, 12.4],
                backgroundColor: [
                    'rgba(0, 94, 158, 0.8)',
                    'rgba(56, 176, 0, 0.8)'
                ],
                borderColor: [
                    'rgba(0, 94, 158, 1)',
                    'rgba(56, 176, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: Rp${value} T (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function initOperatingMarginChart() {
    const ctx = document.getElementById('operatingMarginChart').getContext('2d');
    
    // Sample data
    const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const operatingMargin = [33.6, 33.9, 31.2, 34.5, 33.7, 34.3, 33.8];
    const netMargin = [21.5, 20.2, 18.6, 21.8, 21.1, 21.9, 21.7];
    
    const operatingMarginChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Margin Operasi (%)',
                    data: operatingMargin,
                    backgroundColor: 'rgba(0, 94, 158, 0.1)',
                    borderColor: 'rgba(0, 94, 158, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Margin Bersih (%)',
                    data: netMargin,
                    backgroundColor: 'rgba(56, 176, 0, 0.1)',
                    borderColor: 'rgba(56, 176, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Margin (%)'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

function initYearComparisonChart() {
    const ctx = document.getElementById('yearComparisonChart').getContext('2d');
    
    // Sample data
    const categories = ['Pendapatan', 'Laba Operasi', 'Laba Bersih', 'EBITDA', 'Investasi', 'ROI'];
    const baseYearData = [45.2, 15.3, 9.8, 21.7, 6.4, 28.5];
    const compareYearData = [42.5, 14.6, 9.3, 20.8, 6.1, 27.3];
    
    const yearComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [
                {
                    label: '2024',
                    data: baseYearData,
                    backgroundColor: 'rgba(0, 94, 158, 0.7)',
                    borderColor: 'rgba(0, 94, 158, 1)',
                    borderWidth: 1
                },
                {
                    label: '2023',
                    data: compareYearData,
                    backgroundColor: 'rgba(108, 117, 125, 0.7)',
                    borderColor: 'rgba(108, 117, 125, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Nilai'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Year comparison functionality
    document.getElementById('compareYearsBtn').addEventListener('click', function() {
        const baseYear = document.getElementById('baseYearSelect').value;
        const compareYear = document.getElementById('compareYearSelect').value;
        
        // Update chart labels
        yearComparisonChart.data.datasets[0].label = baseYear;
        yearComparisonChart.data.datasets[1].label = compareYear;
        
        // Here you would normally fetch data for the selected years
        // For this example, we'll just use some random data
        
        // Update chart data based on selected years
        if (baseYear === '2024' && compareYear === '2023') {
            yearComparisonChart.data.datasets[0].data = baseYearData;
            yearComparisonChart.data.datasets[1].data = compareYearData;
        } else {
            // Generate some random data for other year combinations
            yearComparisonChart.data.datasets[0].data = baseYearData.map(val => val * (0.9 + Math.random() * 0.2));
            yearComparisonChart.data.datasets[1].data = compareYearData.map(val => val * (0.9 + Math.random() * 0.2));
        }
        
        yearComparisonChart.update();
        
        // Update growth indicators
        updateGrowthIndicators(baseYear, compareYear);
    });
}

function updateGrowthIndicators(baseYear, compareYear) {
    const growthCards = document.querySelectorAll('.growth-card');
    
    growthCards.forEach((card, index) => {
        // Generate a random growth percentage between -5% and +10%
        let growthPercent;
        
        if (baseYear === '2024' && compareYear === '2023') {
            // Use predefined values for 2024 vs 2023
            const growthValues = [6.4, 4.8, 5.4, 4.3, 4.9, 1.2];
            growthPercent = growthValues[index];
        } else {
            growthPercent = (Math.random() * 15 - 5).toFixed(1);
        }
        
        const growthValue = card.querySelector('.growth-value');
        const growthBar = card.querySelector('.growth-progress');
        
        growthValue.textContent = growthPercent >= 0 ? `+${growthPercent}%` : `${growthPercent}%`;
        growthValue.className = 'growth-value';
        growthValue.classList.add(growthPercent >= 0 ? 'positive' : 'negative');
        
        const barWidth = Math.min(Math.abs(growthPercent) * 6, 100);
        growthBar.style.width = `${barWidth}%`;
        growthBar.style.backgroundColor = growthPercent >= 0 ? '#38b000' : '#d62828';
    });
}

function initSegmentCharts() {
    // Segment Pie Chart
    const pieCtx = document.getElementById('segmentPieChart')?.getContext('2d');
    if (pieCtx) {
        const segmentPieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Hulu Migas Rokan', 'Hulu Migas Rantau', 'Hulu Migas Aceh Tamiang', 'Jasa Penunjang', 'Lain-lain'],
                datasets: [{
                    data: [18.7, 12.4, 9.6, 3.8, 0.7],
                    backgroundColor: [
                        'rgba(249, 65, 68, 0.8)',
                        'rgba(243, 114, 44, 0.8)',
                        'rgba(248, 150, 30, 0.8)',
                        'rgba(144, 190, 109, 0.8)',
                        'rgba(67, 170, 139, 0.8)'
                    ],
                    borderColor: [
                        'rgba(249, 65, 68, 1)',
                        'rgba(243, 114, 44, 1)',
                        'rgba(248, 150, 30, 1)',
                        'rgba(144, 190, 109, 1)',
                        'rgba(67, 170, 139, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: Rp${value} T (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Segment Trend Chart
    const trendCtx = document.getElementById('segmentTrendChart')?.getContext('2d');
    if (trendCtx) {
        const years = ['2020', '2021', '2022', '2023', '2024'];
        
        const segmentTrendChart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Hulu Migas Rokan',
                        data: [9.5, 11.7, 16.1, 17.3, 18.7],
                        borderColor: 'rgba(249, 65, 68, 1)',
                        backgroundColor: 'rgba(249, 65, 68, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(249, 65, 68, 1)',
                        tension: 0.4
                    },
                    {
                        label: 'Hulu Migas Rantau',
                        data: [6.3, 7.7, 10.6, 11.8, 12.4],
                        borderColor: 'rgba(243, 114, 44, 1)',
                        backgroundColor: 'rgba(243, 114, 44, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(243, 114, 44, 1)',
                        tension: 0.4
                    },
                    {
                        label: 'Hulu Migas Aceh Tamiang',
                        data: [4.9, 6.0, 8.2, 9.0, 9.6],
                        borderColor: 'rgba(248, 150, 30, 1)',
                        backgroundColor: 'rgba(248, 150, 30, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(248, 150, 30, 1)',
                        tension: 0.4
                    },
                    {
                        label: 'Jasa Penunjang',
                        data: [1.9, 2.4, 3.2, 3.7, 3.8],
                        borderColor: 'rgba(144, 190, 109, 1)',
                        backgroundColor: 'rgba(144, 190, 109, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(144, 190, 109, 1)',
                        tension: 0.4
                    },
                    {
                        label: 'Lain-lain',
                        data: [0.5, 0.6, 0.8, 0.7, 0.7],
                        borderColor: 'rgba(67, 170, 139, 1)',
                        backgroundColor: 'rgba(67, 170, 139, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(67, 170, 139, 1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Pendapatan (Trilyun Rp)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
}

function initOperationalCharts() {
    // Check if charts exist before initializing
    if (!document.getElementById('monthlyOilProductionChart')) return;
    
    // Monthly Oil Production Chart
    const oilCtx = document.getElementById('monthlyOilProductionChart').getContext('2d');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Sample monthly data with slight variations
    const oilProductionData = [
        201.5, 202.3, 203.1, 202.7, 203.5, 204.2, 
        204.8, 205.1, 204.6, 203.9, 203.5, 202.9
    ];
    
    const monthlyOilProductionChart = new Chart(oilCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Produksi Minyak (MBOPD)',
                data: oilProductionData,
                backgroundColor: 'rgba(245, 130, 31, 0.7)',
                borderColor: 'rgba(245, 130, 31, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 195,
                    title: {
                        display: true,
                        text: 'MBOPD'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Monthly Gas Production Chart
    const gasCtx = document.getElementById('monthlyGasProductionChart').getContext('2d');
    
    // Sample monthly data with slight variations
    const gasProductionData = [
        980, 985, 990, 988, 992, 996, 
        1000, 998, 994, 990, 985, 978
    ];
    
    const monthlyGasProductionChart = new Chart(gasCtx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Produksi Gas (MMSCFD)',
                data: gasProductionData,
                backgroundColor: 'rgba(56, 176, 0, 0.7)',
                borderColor: 'rgba(56, 176, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 950,
                    title: {
                        display: true,
                        text: 'MMSCFD'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Production Trends Chart
    const trendsCtx = document.getElementById('productionTrendsChart').getContext('2d');
    const years = ['2020', '2021', '2022', '2023', '2024'];
    
    const oilTrend = [167.8, 175.3, 185.6, 198.2, 203.5];
    const gasTrend = [820, 865, 910, 953, 987];
    
    const productionTrendsChart = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Produksi Minyak (MBOPD)',
                    data: oilTrend,
                    backgroundColor: 'rgba(245, 130, 31, 0.1)',
                    borderColor: 'rgba(245, 130, 31, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(245, 130, 31, 1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                },
                {
                    label: 'Produksi Gas (MMSCFD)',
                    data: gasTrend,
                    backgroundColor: 'rgba(56, 176, 0, 0.1)',
                    borderColor: 'rgba(56, 176, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Produksi Minyak (MBOPD)'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                y1: {
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Produksi Gas (MMSCFD)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
    
    // Oil Distribution Chart
    const oilDistCtx = document.getElementById('oilDistributionChart').getContext('2d');
    
    const oilDistributionChart = new Chart(oilDistCtx, {
        type: 'pie',
        data: {
            labels: ['Rokan', 'Rantau', 'Aceh Tamiang'],
            datasets: [{
                data: [102.8, 62.7, 38.0],
                backgroundColor: [
                    'rgba(249, 65, 68, 0.8)',
                    'rgba(243, 114, 44, 0.8)',
                    'rgba(248, 150, 30, 0.8)'
                ],
                borderColor: [
                    'rgba(249, 65, 68, 1)',
                    'rgba(243, 114, 44, 1)',
                    'rgba(248, 150, 30, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} MBOPD (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Gas Distribution Chart
    const gasDistCtx = document.getElementById('gasDistributionChart').getContext('2d');
    
    const gasDistributionChart = new Chart(gasDistCtx, {
        type: 'pie',
        data: {
            labels: ['Rokan', 'Rantau', 'Aceh Tamiang'],
            datasets: [{
                data: [487, 312, 188],
                backgroundColor: [
                    'rgba(249, 65, 68, 0.8)',
                    'rgba(243, 114, 44, 0.8)',
                    'rgba(248, 150, 30, 0.8)'
                ],
                borderColor: [
                    'rgba(249, 65, 68, 1)',
                    'rgba(243, 114, 44, 1)',
                    'rgba(248, 150, 30, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} MMSCFD (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function initFinancialCharts() {
    // EBITDA Chart
    const ebitdaCtx = document.getElementById('ebitdaChart')?.getContext('2d');
    if (ebitdaCtx) {
        const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const ebitda = [12.1, 13.8, 12.6, 15.1, 18.9, 20.8, 21.7];
        const ebitdaMargin = [54.3, 53.7, 54.5, 53.2, 48.6, 49.0, 48.0];
        
        const ebitdaChart = new Chart(ebitdaCtx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'EBITDA (Trilyun Rp)',
                        data: ebitda,
                        backgroundColor: 'rgba(0, 94, 158, 0.7)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 1,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Margin EBITDA (%)',
                        data: ebitdaMargin,
                        type: 'line',
                        backgroundColor: 'rgba(245, 130, 31, 0.1)',
                        borderColor: 'rgba(245, 130, 31, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(245, 130, 31, 1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'EBITDA (Trilyun Rp)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        max: 70,
                        title: {
                            display: true,
                            text: 'Margin EBITDA (%)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
    
    // Costs Breakdown Chart
    const costsCtx = document.getElementById('costsBreakdownChart')?.getContext('2d');
    if (costsCtx) {
        const costsBreakdownChart = new Chart(costsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Biaya Produksi', 'Depresiasi & Amortisasi'],
                datasets: [{
                    data: [15.8, 6.8],
                    backgroundColor: [
                        'rgba(0, 94, 158, 0.8)',
                        'rgba(56, 176, 0, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 94, 158, 1)',
                        'rgba(56, 176, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: Rp${value} T (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Initialize mini-charts for ratios
    initMiniCharts();
}

function initMiniCharts() {
    // Function to create mini trend charts for ratios
    const createMiniTrendChart = (ctx, data, color) => {
        if (!ctx) return null;
        
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    data: data,
                    backgroundColor: `rgba(${color}, 0.1)`,
                    borderColor: `rgba(${color}, 1)`,
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    };
    
    // Gross Margin Chart
    const gmCtx = document.getElementById('grossMarginChart')?.getContext('2d');
    if (gmCtx) {
        createMiniTrendChart(gmCtx, [48.5, 49.2, 49.6, 49.9, 50.0], '0, 94, 158');
    }
    
    // Operating Margin Chart
    const omCtx = document.getElementById('operatingMarginMiniChart')?.getContext('2d');
    if (omCtx) {
        createMiniTrendChart(omCtx, [31.2, 34.5, 33.7, 34.3, 33.8], '245, 130, 31');
    }
    
    // Net Margin Chart
    const nmCtx = document.getElementById('netMarginChart')?.getContext('2d');
    if (nmCtx) {
        createMiniTrendChart(nmCtx, [18.6, 21.8, 21.1, 21.9, 21.7], '56, 176, 0');
    }
    
    // ROA Chart
    const roaCtx = document.getElementById('roaChart')?.getContext('2d');
    if (roaCtx) {
        createMiniTrendChart(roaCtx, [7.9, 8.5, 9.0, 9.3, 9.5], '13, 110, 253');
    }
    
    // ROE Chart
    const roeCtx = document.getElementById('roeChart')?.getContext('2d');
    if (roeCtx) {
        createMiniTrendChart(roeCtx, [14.1, 15.2, 15.8, 16.5, 16.8], '108, 117, 125');
    }
    
    // Debt to Equity Chart
    const deCtx = document.getElementById('debtEquityChart')?.getContext('2d');
    if (deCtx) {
        createMiniTrendChart(deCtx, [0.55, 0.51, 0.48, 0.45, 0.42], '220, 53, 69');
    }
}

function initTrendsCharts() {
    // Decade Trends Chart
    const decadeTrendsCtx = document.getElementById('decadeTrendsChart')?.getContext('2d');
    if (decadeTrendsCtx) {
        const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const revenue = [19.7, 20.5, 21.8, 22.3, 25.7, 23.1, 28.4, 38.9, 42.5, 45.2];
        const netProfit = [4.1, 4.3, 4.5, 4.8, 5.2, 4.3, 6.2, 8.2, 9.3, 9.8];
        
        const decadeTrendsChart = new Chart(decadeTrendsCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Pendapatan (Trilyun Rp)',
                        data: revenue,
                        backgroundColor: 'rgba(0, 94, 158, 0.1)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Laba Bersih (Trilyun Rp)',
                        data: netProfit,
                        backgroundColor: 'rgba(56, 176, 0, 0.1)',
                        borderColor: 'rgba(56, 176, 0, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Pendapatan (Trilyun Rp)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Laba Bersih (Trilyun Rp)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
    
    // Margins Analysis Chart
    const marginsCtx = document.getElementById('marginsAnalysisChart')?.getContext('2d');
    if (marginsCtx) {
        const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const grossMargin = [47.2, 47.5, 47.9, 48.4, 48.8, 48.5, 49.2, 49.6, 49.9, 50.0];
        const opMargin = [31.5, 32.0, 32.8, 33.6, 33.9, 31.2, 34.5, 33.7, 34.3, 33.8];
        const netMargin = [20.8, 21.0, 20.6, 21.5, 20.2, 18.6, 21.8, 21.1, 21.9, 21.7];
        
        const marginsAnalysisChart = new Chart(marginsCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Margin Laba Kotor (%)',
                        data: grossMargin,
                        backgroundColor: 'rgba(0, 94, 158, 0.1)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Margin Laba Operasi (%)',
                        data: opMargin,
                        backgroundColor: 'rgba(245, 130, 31, 0.1)',
                        borderColor: 'rgba(245, 130, 31, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(245, 130, 31, 1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Margin Laba Bersih (%)',
                        data: netMargin,
                        backgroundColor: 'rgba(56, 176, 0, 0.1)',
                        borderColor: 'rgba(56, 176, 0, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 60,
                        title: {
                            display: true,
                            text: 'Margin (%)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
    
    // Oil Price Correlation Chart
    const oilPriceCtx = document.getElementById('oilPriceCorrelationChart')?.getContext('2d');
    if (oilPriceCtx) {
        const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const revenue = [19.7, 20.5, 21.8, 22.3, 25.7, 23.1, 28.4, 38.9, 42.5, 45.2];
        const oilPrice = [49.5, 43.3, 50.8, 65.2, 57.0, 39.5, 68.2, 94.5, 82.3, 79.8];
        
        const oilPriceCorrelationChart = new Chart(oilPriceCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Pendapatan (Trilyun Rp)',
                        data: revenue,
                        backgroundColor: 'rgba(0, 94, 158, 0.1)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Harga Minyak (USD/bbl)',
                        data: oilPrice,
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        borderColor: 'rgba(220, 53, 69, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(220, 53, 69, 1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Pendapatan (Trilyun Rp)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Harga Minyak (USD/bbl)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
    
    // Forecast Chart
    const forecastCtx = document.getElementById('forecastChart')?.getContext('2d');
    if (forecastCtx) {
        const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'];
        const actualRevenue = [38.9, 42.5, 45.2, null, null, null, null, null];
        const forecastRevenue = [null, null, 45.2, 48.7, 52.6, 56.8, 61.3, 66.2];
        const actualProfit = [8.2, 9.3, 9.8, null, null, null, null, null];
        const forecastProfit = [null, null, 9.8, 10.6, 11.5, 12.5, 13.6, 14.7];
        
        const forecastChart = new Chart(forecastCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Pendapatan Aktual (Trilyun Rp)',
                        data: actualRevenue,
                        backgroundColor: 'rgba(0, 94, 158, 0.7)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                        tension: 0,
                        fill: false,
                        pointStyle: 'circle',
                        yAxisID: 'y'
                    },
                    {
                        label: 'Proyeksi Pendapatan (Trilyun Rp)',
                        data: forecastRevenue,
                        backgroundColor: 'rgba(0, 94, 158, 0.1)',
                        borderColor: 'rgba(0, 94, 158, 1)',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointBackgroundColor: 'rgba(0, 94, 158, 1)',
                        pointStyle: 'triangle',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Laba Bersih Aktual (Trilyun Rp)',
                        data: actualProfit,
                        backgroundColor: 'rgba(56, 176, 0, 0.7)',
                        borderColor: 'rgba(56, 176, 0, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                        tension: 0,
                        fill: false,
                        pointStyle: 'circle',
                        yAxisID: 'y1'
                    },
                    {
                        label: 'Proyeksi Laba Bersih (Trilyun Rp)',
                        data: forecastProfit,
                        backgroundColor: 'rgba(56, 176, 0, 0.1)',
                        borderColor: 'rgba(56, 176, 0, 1)',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointBackgroundColor: 'rgba(56, 176, 0, 1)',
                        pointStyle: 'triangle',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Pendapatan (Trilyun Rp)'
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Laba Bersih (Trilyun Rp)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }
}

// ======= TABLE FUNCTIONALITY =======
function initTables() {
    // Financial Table Functionality
    initFinancialTable();
    
    // Table Search Functionality
    initTableSearch();
    
    // Table Sorting
    initTableSorting();
    
    // Table Pagination
    initTablePagination();
}

function initFinancialTable() {
    const financialTable = document.getElementById('financialTable');
    if (!financialTable) return;
    
    // Add row hover effect
    const tableRows = financialTable.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        });
        
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
}

function initTableSearch() {
    const tableSearch = document.getElementById('tableSearch');
    if (!tableSearch) return;
    
    tableSearch.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const table = document.getElementById('financialTable');
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

function initTableSorting() {
    const sortButtons = document.querySelectorAll('.sort-btn');
    if (sortButtons.length === 0) return;
    
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sortDirection = this.getAttribute('data-sort');
            const table = document.getElementById('financialTable');
            const rows = Array.from(table.querySelectorAll('tbody tr'));
            
            // Sort by revenue (for example)
            rows.sort((a, b) => {
                const aVal = parseFloat(a.cells[1].textContent);
                const bVal = parseFloat(b.cells[1].textContent);
                
                if (sortDirection === 'asc') {
                    return aVal - bVal;
                } else {
                    return bVal - aVal;
                }
            });
            
            // Re-append rows in sorted order
            const tbody = table.querySelector('tbody');
            tbody.innerHTML = '';
            rows.forEach(row => tbody.appendChild(row));
        });
    });
}

function initTablePagination() {
    const prevBtn = document.querySelector('.page-btn[data-page="prev"]');
    const nextBtn = document.querySelector('.page-btn[data-page="next"]');
    const pageInfo = document.querySelector('.page-info');
    
    if (!prevBtn || !nextBtn || !pageInfo) return;
    
    // Disable prev button initially
    prevBtn.disabled = true;
    
    // For this demo, we have only one page of data
    // In a real application, you would implement actual pagination here
}

// ======= COMPARISON TOOL =======
function initComparison() {
    // Year comparison tool has event listener setup in the initYearComparisonChart function
    
    // Update growth indicators for default comparison (2024 vs 2023)
    updateGrowthIndicators('2024', '2023');
}

// ======= EVENT LISTENERS =======
function initEventListeners() {
    // Filter Period Buttons (Yearly, Quarterly, Monthly)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update charts based on selected period
            // (Not implemented in this demo)
        });
    });
    
    // Year Range Select
    const yearRange = document.getElementById('yearRange');
    if (yearRange) {
        yearRange.addEventListener('change', function() {
            // Update charts based on selected year range
            // (Not implemented in this demo)
        });
    }
    
    // Export Buttons
    document.querySelectorAll('.export-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const exportType = this.getAttribute('data-type');
            
            // In a real application, implement export functionality
            alert(`Exporting data as ${exportType}...`);
        });
    });
    
    // Report Type Select
    const reportTypeSelect = document.getElementById('reportTypeSelect');
    if (reportTypeSelect) {
        reportTypeSelect.addEventListener('change', function() {
            // Show selected report type
            // (Not implemented in this demo)
            
            // Just show the income report for now
            document.querySelectorAll('.financial-report').forEach(report => {
                report.classList.remove('active');
            });
            
            document.getElementById('income-report').classList.add('active');
        });
    }
    
    // Segment Year Select
    const segmentYearSelect = document.getElementById('segmentYearSelect');
    if (segmentYearSelect) {
        segmentYearSelect.addEventListener('change', function() {
            // Update segment charts and tables based on selected year
            // (Not implemented in this demo)
        });
    }
    
    // Operations Year and Field Selects
    const operationsYearSelect = document.getElementById('operationsYearSelect');
    const operationsFieldSelect = document.getElementById('operationsFieldSelect');
    
    if (operationsYearSelect) {
        operationsYearSelect.addEventListener('change', function() {
            // Update operations charts and tables based on selected year
            // (Not implemented in this demo)
        });
    }
    
    if (operationsFieldSelect) {
        operationsFieldSelect.addEventListener('change', function() {
            // Update operations charts and tables based on selected field
            // (Not implemented in this demo)
        });
    }
    
    // Trend Period and Metric Selects
    const trendPeriodSelect = document.getElementById('trendPeriodSelect');
    const trendMetricSelect = document.getElementById('trendMetricSelect');
    
    if (trendPeriodSelect) {
        trendPeriodSelect.addEventListener('change', function() {
            // Update trend charts based on selected period
            // (Not implemented in this demo)
        });
    }
    
    if (trendMetricSelect) {
        trendMetricSelect.addEventListener('change', function() {
            // Update trend charts based on selected metric
            // (Not implemented in this demo)
        });
    }
}
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.');
            contactForm.reset();
        });
    }
    
    // Animate stats numbers on scroll
    const stats = document.querySelector('.stats');
    let animated = false;
    
    function animateStats() {
        if (stats && !animated) {
            const statsPosition = stats.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (statsPosition < screenPosition) {
                animated = true;
                
                const statNumbers = document.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    let count = 0;
                    const duration = 2000; // ms
                    const increment = target / (duration / 16);
                    
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            clearInterval(timer);
                            stat.textContent = target.toString().includes('+') ? 
                                Math.floor(target) + '+' : 
                                Math.floor(target);
                        } else {
                            stat.textContent = Math.floor(count);
                            if (stat.id === 'stat-employees' || stat.id === 'stat-projects' || stat.id === 'stat-clients') {
                                stat.textContent += '+';
                            }
                        }
                    }, 16);
                });
            }
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on page load
    
    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Gallery Modal
    const galleryZooms = document.querySelectorAll('.gallery-zoom');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    
    galleryZooms.forEach(zoom => {
        zoom.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = zoom.parentElement.parentElement.querySelector('img').src;
            const caption = zoom.parentElement.querySelector('h3').innerText;
            
            modalImg.src = imgSrc;
            modalCaption.innerText = caption;
            
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
    
    // Scroll Animation for Elements
    const animateElements = document.querySelectorAll('.section-header, .about-card, .service-card, .value-item, .timeline-item, .org-card, .testimonial-card');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-in');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
    
    // Prevent form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submission simulation: Thank you for your submission!');
            form.reset();
        });
    });
    
    // Add fancy sticky header effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('sticky');
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add('hide-header');
            } else {
                // Scrolling up
                header.classList.remove('hide-header');
            }
        } else {
            header.classList.remove('sticky');
            header.classList.remove('hide-header');
        }
        lastScrollTop = scrollTop;
    });
    
    // Lazy load images with fade-in effect
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.add('fade-in');
                    observer.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Add color theme toggle (light/dark mode)
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.classList.add('theme-toggle');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggleBtn.title = "Toggle Dark Mode";
    document.body.appendChild(themeToggleBtn);
    
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.classList.add('click');
        setTimeout(() => {
            cursor.classList.remove('click');
        }, 500);
    });
    
    // Add hover effect to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .gallery-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
});
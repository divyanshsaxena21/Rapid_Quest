const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Change from line to bar
    data: {
        labels: ['20', '35', '40', '45', '50', '55', '60'],
        datasets: [{
            label: 'Employer, Employee, Total Interest',
            data: [80, 110, 150, 200, 250, 300, 320],
            backgroundColor: {
                type: 'gradient',
                stops: [
                  { x: 20, y: 5, color: '#0033CC' },
                  { x: 0.5, y: 1, color: '#4D2678' },
                  { x: 1, y: 1, color: '#87CEEB' },
                ]
            },
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return '$' + value
                    }
            }
        }
    }
}
});


 // Function to update the displayed number
 function updateNumber() {
    var slider = document.getElementById("numberSlider");
    var output = document.getElementById("selectedNumber");
    output.innerHTML = slider.value;
}
 function updateNumber2() {
    var slider = document.getElementById("numberSlider2");
    var output = document.getElementById("selectedNumber2");
    output.innerHTML = slider.value;
}

function changeValue(link, value) {
    var dropbtn = link.parentNode.previousElementSibling;
    dropbtn.innerText = value;
    toggleDropdown(link.parentNode); // Hide the dropdown after selecting an option
}

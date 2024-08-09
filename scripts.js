document.addEventListener('DOMContentLoaded', function() {
    // Dropdown Menu Interaction
    document.querySelector('.dropdown-toggle').addEventListener('click', function() {
        document.querySelector('.dropdown-menu').classList.toggle('show');
    });

    document.querySelector('.dropdown-menu .dropdown-item').addEventListener('click', function() {
        document.querySelector('.commercial-options').classList.toggle('show');
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.getElementsByClassName("dropdown-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    

    // Counter Animation
    function animateCounter(id, start, end, duration) {
        let element = document.getElementById(id);
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function() {
            start += increment;
            element.textContent = start;
            if (start == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateCounter("properties-count", 0, 150, 2000);
    animateCounter("customers-count", 0, 1200, 2000);
    animateCounter("sales-count", 0, 50, 2000);
    animateCounter("experts-count", 0, 25, 2000);
});


function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000); // 4 seconds for toast to disappear
}

function knowMore() {
    showToast('More details will be available soon!');
}

let currentVideoIndex = 0;
const videos = document.querySelectorAll('.video-slide');
const indicators = document.querySelectorAll('.indicator');



function showVideo(index) {
    videos[currentVideoIndex].style.display = 'none'; // Hide current video
    indicators[currentVideoIndex].classList.remove('active'); // Remove active class from current indicator

    currentVideoIndex = index;

    videos[currentVideoIndex].style.display = 'block'; // Show new video
    indicators[currentVideoIndex].classList.add('active'); // Add active class to new indicator
}

// Optionally, you can add autoplay functionality
function autoplay() {
    setInterval(() => {
        let nextIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(nextIndex);
    }, 5000); // Change video every 5 seconds
}

autoplay();



function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}


const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
let count: number = 0;

if (countSpan && incrementBtn) {
    incrementBtn.addEventListener('click', () => {
        count++;
        countSpan.textContent = count.toString();
    });
}
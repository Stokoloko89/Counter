// set initial count
let count = 0;

// select variable for the value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// using a forEach loop to access each button in the NodeList

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList; // using the event to target the unique class name found in the NodeList(styles) 
        if (styles.contains('decrease')) {  //using the unique class name to as a condition
            count--;
        } else
            if (styles.contains('reset')) {
                count = 0;
            } else
                if (styles.contains('increase')) {
                    count++;
                }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222';
        }

        value.textContent = count;
    })
})
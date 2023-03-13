const listItems = document.querySelectorAll('.fa-check');
const steps = document.querySelectorAll('.step');
const remainingText = document.getElementById('remaining-amount');
let count = 4;


listItems.forEach(listItem => {

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('checked');


        if (listItem.classList.contains('checked')) {
            count++;
        } else {
            count--;
        }

        for (let i = count; i < steps.length; i++) {
            steps[i].classList.add('empty');
        }

        for (let j = count - 1; j >= 0; j--) {
            steps[j].classList.remove('empty');
        }

        let remaining = steps.length - count;

        remainingText.innerHTML = remaining;

    })

})
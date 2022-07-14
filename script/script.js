// 1. Burger button

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
navBar.classList.toggle('toggle');
});

// 2. Action container buttons

let btns = document.querySelectorAll('.action-item__button');
for (let btn of btns) {
    
    btn.addEventListener('click', function() {

        let parent = btn.parentElement.parentElement;

        if (parent.classList.contains('active')) {

            parent.classList.remove('active');
            btn.classList.remove('action-item__button--change');

        } else {

            let activeElement = document.querySelector('.active');
            let activeButton = document.querySelector('.action-item__button--change');
            parent.classList.add('active');
            btn.classList.add('action-item__button--change');
            activeElement.classList.remove('active');
            activeButton.classList.remove('action-item__button--change');

        }

    })

}

// 3. Customer buttons

let pics = [
    'img/customer_pics/cust1.png',
    'img/customer_pics/cust2.png',
    'img/customer_pics/cust3.png',
    'img/customer_pics/cust4.png'
];

let texts = [
    '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”',
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et massa scelerisque, aliquet massa faucibus, viverra ex. Phasellus id dapibus leo. Aliquam finibus ullamcorper viverra. Donec vehicula nunc pharetra.”',
    '“Nullam scelerisque sodales ligula, quis scelerisque ipsum consequat non. Vivamus accumsan ultrices ante. Suspendisse in mi non felis sollicitudin tincidunt. Proin condimentum sit amet felis id luctus. Suspendisse pretium pulvinar lacinia.”',
    '“Ut sagittis facilisis consectetur. Donec ex odio, scelerisque at mattis sed, ullamcorper quis massa. Curabitur ut ex sed eros vehicula sollicitudin nec vel urna. Phasellus aliquam vestibulum dolor, in iaculis neque faucibus at.”'
];
let names = ['Kirana Dunham', 'Monica Hall', 'Nelson Bighetti', 'Bertram Gilfoyle'];

let slider1 = document.querySelector('#slider1');
let slider2 = document.querySelector('#slider2');
let slider3 = document.querySelector('#slider3');
let cus_btns = document.querySelectorAll('.customer__itpic');

let i = 0;
slider1.src = pics[i];
slider2.innerHTML = texts[i];
slider3.innerHTML = names[i];

for (let btn of cus_btns) {

    btn.addEventListener('click', function() {

        if (!(btn.classList.contains('customer__itpic--change'))) {
            
            let activeButton = document.querySelector('.customer__itpic--change');
            activeButton.classList.remove('customer__itpic--change');
            btn.classList.add('customer__itpic--change');
            
        }
        
        i = Number(btn.parentElement.id.substr(-1));
        slider1.src = pics[i];
        slider2.innerHTML = texts[i];
        slider3.innerHTML = names[i];

    })

}
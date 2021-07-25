import './lib/lib';

$('button').on('click', function (){
    console.log(12);
   $(this).toggleClass('active')
});
console.log(document.querySelector('button'));
function SayHello() {
    console.log('Hello')
}
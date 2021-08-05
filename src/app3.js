import $ from 'jquery'
import './app3.css'
const $squere = $('#app3 .square')

$squere.on('click', () => {
    $squere.toggleClass('active');//没有就加上active，有就删除掉
})
import './app2.css';
import $ from 'jquery';
const $tabBer = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content')

$tabBer.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')//他的兄弟删除active
});
$tabBer.children().eq(0).trigger('click');
//找到它的儿子，使他第一个儿子触发click事件
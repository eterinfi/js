'use strict';

var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

// TODO:绑定事件
selectAll.click(function(){ //当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；当用户去掉“全不选”时，自动不选中所有语言；
	langs.prop('checked', selectAll.is(':checked'));
	selectAllLabel.toggle();
	deselectAllLabel.toggle();
});

invertSelect.click(function(){ //当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；
    langs.map(function(){
    	$(this).prop('checked', !$(this).is(':checked'));
    });
});

langs.click(function(){ //当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。
    if (!langs.not(':checked').length) { // 所有语言已勾上
        selectAll.prop('checked', true);
        deselectAllLabel.show();
        selectAllLabel.hide(); }
    else { // 手动去掉选中至少一种语言
        selectAll.prop('checked', false);
        selectAllLabel.show();
        deselectAllLabel.hide(); };
});

// 测试:
alert('请测试功能是否正常。');
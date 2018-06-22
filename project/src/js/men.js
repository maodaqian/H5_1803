$(function(){
	// 动态渲染商品数据
	$.getJSON("/mock/list.json", function(data){
		// 渲染模板
		const html = template("list_template", {list: data.res_body.list});
		// 显示
		$(".list").html(html);
	});
});
$(function(){
	/* 加入购物车 */
	$(".btn_form input").on("click", function(e){
		// 添加抛物线效果
		// 抛物线终点在文档中的坐标
		const end = $(".bag_left").offset();
		// 动态创建运动图片
		const flyer = $("<img src='/images/m1.jpg' style='width:40px;'>");
		// 运动
		flyer.fly({
			start : {
				left : e.pageX - $(window).scrollLeft(),
				top : e.pageY - $(window).scrollTop()
			},
			end : {
				left : end.left - $(window).scrollLeft(),
				top : end.top - $(window).scrollTop()
			},
			onEnd : function(){ // 运动结束，销毁资源
				this.destroy();
			}
		});
	});
});
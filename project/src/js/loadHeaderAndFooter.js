// ready()
$(function(){
	// 动态异步加载头部文件
	$(".header").load("/html/include/header.html", function(){
		// 将文件载入成功后执行的函数
		$(".search :text").on("keyup", function(){
			// 获取文本框中输入的内容
			const txt = $(this).val(); // <==> this.value
			// 请求淘宝的搜索提示接口：https://suggest.taobao.com/sug?code=utf-8&q=搜索内容&callback=handle
			// jsonp跨域访问接口
			const url = `https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
			$.getJSON(url, function(data){
				// data 表示 jsonp 返回的数据
				let html = "";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div>`
				});
				$(".suggest").show().html(html);
			});
		});

		// 使用事件委派，将提示行点击事件绑定到 div.suggest 上
		$(".suggest").delegate("div", "click", function(){
			const txt = $(this).text(); // <==> this.innerText
			// 将 txt 字符串放入文本框
			$(".search :text").val(txt); // xxx.value = txt;
			// 隐藏 .suggest
			$(".suggest").hide();
		});

		/* 鼠标移入显示二级菜单 */
		let timer = 0;
		$(".menu").mouseenter(function(){
			$(this).children(".megapanel").show();
		});
		$(".menu").mouseleave(function(){
			timer = setTimeout(()=>{
				$(this).children(".megapanel").hide();
			}, 300);
		});
		$(".megapanel").hover(function(){
			// mouseenter
			clearTimeout(timer);
			$(this).show();
		}, function(){
			// mouseleave
		});
	});

	// 动态异步加载尾部文件
	$(".footer").load("/html/include/footer.html");
});
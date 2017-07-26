// 简单的一个小库  慢慢丰富
function $(selector,parent) {  // "#div" "div" ".div"
		// 做了 一个document的默认处理 用或运算
		parent = parent || document;
	
		// 将接受 到的 选择器字符串 选择里面的第一个字符 进行判断
		var firstChar = selector.charAt(0);
		
		if (firstChar == "#") {
			return document.getElementById(selector.substring(1)); //"#div"
		} else if (firstChar == ".") {
			
				var allEles = parent.getElementsByTagName("*");
				var arrClass = [];
				for(var i = 0; i < allEles.length; i++) {
					var arrClassNames = allEles[i].className.split(" ");
					for(var j = 0; j < arrClassNames.length; j++) {
						if (arrClassNames[j] == selector.slice(1)) { // class="aa box"
							arrClass.push(allEles[i]);
							break;
						}
					}
				}
				return arrClass;
		}else {
			return parent.getElementsByTagName(selector); // "div"
		}
		
	}


/*function getClassName(myClassName,parent) {
				
				parent = parent || document;
				
				var allEles = parent.getElementsByTagName("*");
				var arrClass = [];
				for(var i = 0; i < allEles.length; i++) {
					var arrClassNames = allEles[i].className.split(" ");
					for(var j = 0; j < arrClassNames.length; j++) {
						if (arrClassNames[j] == myClassName) {
							arrClass.push(allEles[i]);
							break;
						}
					}
				}
				return arrClass;
			}*/
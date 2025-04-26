 
 
money = 0
progress=0
level = 1
price_click = 1
autoclick=0

function autoClicker(){
	money +=autoclick	
	$('.money__num').text(money)
}
setInterval(autoClicker,1000)
function auto(){
	if (money>=10){
		price_click += 1
		autoclick +=1
		money -= 10
		$('.money__num').text(money)
	}else{
		alert("дег не достаточно")
}

}	
levels={
	1:{"click":10, "img":"img/001.png"},
	2:{"click":20, "img":"img/002.png"},
	3:{"click":30, "img":"img/003.png"},
	4:{"click":40, "img":"img/004.png"},
	5:{"click":50, "img":"img/005.jpg"},
	6:{"click":60, "img":"img/006.jpg"},
	7:{"click":70, "img":"img/007.jpg"},
	8:{"click":80, "img":"img/008.jpg"},
	9:{"click":90, "img":"img/009.jpg"},
	10:{"click":100, "img":"img/010.jpg"},
	11:{"click":110, "img":"img/011.jpg"},
	12:{"click":120, "img":"img/012.jpg"},
	13:{"click":130, "img":"img/013.jpg"},
	14:{"click":140, "img":"img/014.jpg"},
	15:{"click":150, "img":"img/015.jpg"},
	15:{"click":160, "img":"img/016.jpg"},
	16:{"click":170, "img":"img/017.png"},
	17:{"click":180, "img":"img/018.png"},
	18:{"click":190, "img":"img/001.png"},
	19:{"click":200, "img":"img/001.png"},
	20:{"click":210, "img":"img/001.png"},
	21:{"click":220, "img":"img/001.png"},
	22:{"click":230, "img":"img/001.png"},
	23:{"click":240, "img":"img/001.png"},
	24:{"click":250, "img":"img/001.png"},
	25:{"click":260, "img":"img/001.png"},
	26:{"click":270, "img":"img/001.png"},
	27:{"click":280, "img":"img/001.png"},
	28:{"click":290, "img":"img/001.png"},
	29:{"click":300, "img":"img/001.png"},
	30:{"click":310, "img":"img/001.png"},
	31:{"click":320, "img":"img/001.png"},
	32:{"click":330, "img":"img/001.png"},
	33:{"click":340, "img":"img/001.png"},
	34:{"click":350, "img":"img/001.png"},
	35:{"click":360, "img":"img/001.png"},
	36:{"click":370, "img":"img/001.png"},
	37:{"click":380, "img":"img/001.png"},
	38:{"click":390, "img":"img/001.png"},
	39:{"click":400, "img":"img/001.png"},
	40:{"click":410, "img":"img/001.png"},
	41:{"click":420, "img":"img/001.png"},
	42:{"click":430, "img":"img/001.png"},
	43:{"click":440, "img":"img/001.png"},
	44:{"click":450, "img":"img/001.png"},
	45:{"click":460, "img":"img/001.png"},
	46:{"click":470, "img":"img/001.png"},
	47:{"click":480, "img":"img/001.png"},
	48:{"click":490, "img":"img/001.png"},
	49:{"click":500, "img":"img/001.png"},
	50:{"click":510, "img":"img/001.png"},
	51:{"click":520, "img":"img/001.png"},
	52:{"click":530, "img":"img/001.png"},
	53:{"click":540, "img":"img/001.png"},
	54:{"click":550, "img":"img/001.png"},
	55:{"click":560, "img":"img/001.png"},
	56:{"click":570, "img":"img/001.png"},
	57:{"click":580, "img":"img/001.png"},
	58:{"click":10, "img":"img/001.png"},
	59:{"click":10, "img":"img/001.png"},
	60:{"click":10, "img":"img/001.png"},
	61:{"click":10, "img":"img/001.png"},
	62:{"click":10, "img":"img/001.png"},
	63:{"click":10, "img":"img/001.png"},
	64:{"click":10, "img":"img/001.png"},
	65:{"click":10, "img":"img/001.png"},
	66:{"click":10, "img":"img/001.png"},
	67:{"click":10, "img":"img/001.png"},
	68:{"click":10, "img":"img/001.png"},
	69:{"click":10, "img":"img/001.png"},
	70:{"click":10, "img":"img/001.png"},
	71:{"click":10, "img":"img/001.png"},
	72:{"click":10, "img":"img/001.png"},
	73:{"click":10, "img":"img/001.png"},
	74:{"click":10, "img":"img/001.png"},
	75:{"click":10, "img":"img/001.png"},
	76:{"click":10, "img":"img/001.png"},
	77:{"click":10, "img":"img/001.png"},
	78:{"click":10, "img":"img/001.png"},
	79:{"click":10, "img":"img/001.png"},
	80:{"click":10, "img":"img/001.png"},
	81:{"click":10, "img":"img/001.png"},
	82:{"click":10, "img":"img/001.png"},
	83:{"click":10, "img":"img/001.png"},
	84:{"click":10, "img":"img/001.png"},
	85:{"click":10, "img":"img/001.png"},
	86:{"click":10, "img":"img/001.png"},
	87:{"click":10, "img":"img/001.png"},
	88:{"click":10, "img":"img/001.png"},
	89:{"click":10, "img":"img/001.png"},
	90:{"click":10, "img":"img/001.png"},
	91:{"click":10, "img":"img/001.png"},
	92:{"click":10, "img":"img/001.png"},
	93:{"click":10, "img":"img/001.png"},
	94:{"click":10, "img":"img/001.png"},
	95:{"click":10, "img":"img/001.png"},
	96:{"click":10, "img":"img/001.png"},
	97:{"click":10, "img":"img/001.png"},
	98:{"click":10, "img":"img/001.png"},
	99:{"click":10, "img":"img/001.png"},
	100:{"click":10, "img":"img/001.png"},
	
}
 $('.personage').on('click',function(){
	money += price_click
	progress += 1
	
	$('.money__num').text(money)
	if(progress == levels[level]["click"]){
		level += 1
		progress=0
		$('.level__name').text(""+level)
		$('.personage').attr("src", levels[level]["img"])
	}
	$('.level__progress').css({"width":progress/10*100+"%"})	
})

function money_plus_1(){
	if (money>=100){
		price_click += 1
		progress=0
		money -= 100
		$('.money__num').text(money)
	}else{
		alert("дег не достаточно")
}

}
function money_plus_2(){
	if (money>=200){
		price_click += 2
		progress=0
		money -= 200
		$('.money__num').text(money)
	}else{
		alert("дег не достаточно")
}

}
function money_plus_3(){
	if (money>=300){
		price_click += 3
		progress=0
		money -= 300
		$('.money__num').text(money)
	}else{
		alert("дег не достаточно")
}

}
function money_x_2(){
	if (money>=500){
		price_click *= 2
		progress=0
		money -= 500
		$('.money__num').text(money)
	}else{
		alert("дег не достаточно")
}

}
var fruta = prompt("Escolha uma das frutas a seguir: Laranja / Manga / Uva");

switch(fruta){
	case "laranja": 
		alert("Laranja");
		break;
	case "manga":
		alert("Manga");
		break;
	case "uva":
		alert("Uva");
		break;
	default:
		alert("A fruta escolhida não esta na lista.");
}

let species = '';
let status1 = '';
let gender = '';


let opened = false;

$('.logo').hover(function() {
   if(opened == false) {
	$(".gg").addClass("gg__active");
	$(".ggStoke").addClass("ggStoke__active");
	   opened = true;
   } else{
	$(".gg").removeClass("gg__active");
	$(".ggStoke").removeClass("ggStoke__active");
	   opened = false
   }
});


var $btn = document.getElementById('show');
var $nav = document.getElementById('nav');

$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
	$(".nav__burger").addClass("nav__burger__active");
	$(".burger__color").toggleClass("burger__color__active");
	$(".ggStoke").toggleClass("ggStoke__active");
	$("body").toggleClass("body__active");



});

$(".main").click(function () { 
	$("#nav").removeClass("active");
	
});


let arr = [];
for(let i = 0; i < 42; i++){
fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		for(let el of data.results){
			if(!arr.includes(el.species)){
				arr.push(el.species);
				$("#speciesFieled").append(`<option value="${el.species}">${el.species}</option>`);
			}
		}

	   
});
}







genderFieled.onchange = function(){
	gender = genderFieled.value;
	$("#restBtn").show();
	fetch(`https://rickandmortyapi.com/api/character/?page=${n}&species=${species}&status=${status1}&gender=${gender}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		console.log(data);

		pagesInfo = data.info.pages;
		$("#lastPage").text(pagesInfo);

		$(".characterContainer").empty();
		$(".countPage").empty();
		$(".countPage").append(`<p>${n}</p>`)
	
		for(let el of data.results){
			$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
		<div class="avatar__box">
		<div class="avatar__bg">
			<div style="background-image: url(${el.image});" class="avatar"></div>
		</div>
		</div>
		<div class="charapter__nameBox">
			<p class="charapter__name">${el.name}</p>

		</div>
		<div class="description__container">
			<p class="description__teg">Location: <span class="desciption__span location">${el.location.name}</span></p>
			<p class="description__teg">Species: <span class="desciption__span species">${el.species}</span></p>
			<p class="description__teg">Status: <span class="desciption__span status">${el.status}</span></p>
			<p class="description__teg">Gender: <span class="desciption__span gender">${el.gender}</span></p>
		</div>


	</div>`);
	
	
	
		}
	

	
	   
	});




}



speciesFieled.onchange = function(){
	species = speciesFieled.value;


	$("#restBtn").show();
	fetch(`https://rickandmortyapi.com/api/character/?page=${n}&species=${species}&status=${status1}&gender=${gender}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		console.log(data);

		pagesInfo = data.info.pages;
		$("#lastPage").text(pagesInfo);

		$(".characterContainer").empty();
		$(".countPage").empty();
		$(".countPage").append(`<p>${n}</p>`)
	
		for(let el of data.results){
			console.log(el.name)
			$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			<div class="avatar__bg">
				<div style="background-image: url(${el.image});" class="avatar"></div>
			</div>
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.name}</p>
	
			</div>
			<div class="description__container">
				<p class="description__teg">Location: <span class="desciption__span location">${el.location.name}</span></p>
				<p class="description__teg">Species: <span class="desciption__span species">${el.species}</span></p>
				<p class="description__teg">Status: <span class="desciption__span status">${el.status}</span></p>
				<p class="description__teg">Gender: <span class="desciption__span gender">${el.gender}</span></p>
			</div>
	
	
		</div>`);
	
	
	
	
		}

	
	   
	});

}





statusFieled.onchange = function(){
	$("#restBtn").show();
	status1 = statusFieled.value;


	fetch(`https://rickandmortyapi.com/api/character/?page=${n}&species=${species}&status=${status1}&gender=${gender}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		console.log(data);


		pagesInfo = data.info.pages;
		$("#lastPage").text(pagesInfo);

		$(".characterContainer").empty();
		$(".countPage").empty();
		$(".countPage").append(`<p>${n}</p>`)
	
		for(let el of data.results){
			$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			<div class="avatar__bg">
				<div style="background-image: url(${el.image});" class="avatar"></div>
			</div>
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.name}</p>
	
			</div>
			<div class="description__container">
				<p class="description__teg">Location: <span class="desciption__span location">${el.location.name}</span></p>
				<p class="description__teg">Species: <span class="desciption__span species">${el.species}</span></p>
				<p class="description__teg">Status: <span class="desciption__span status">${el.status}</span></p>
				<p class="description__teg">Gender: <span class="desciption__span gender">${el.gender}</span></p>
			</div>
	
	
		</div>`);
	
	
	
		}
	
	   
	});

}


restBtn.onclick = function(){
	$("#restBtn").hide();
	fetch(`https://rickandmortyapi.com/api/character/`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
		console.log(data);
		pagesInfo = data.info.pages;
		status1 = '';
		gender = '';
		species = '';
		statusFieled.value = 'Alive';
		genderFieled.value = 'Male';
		speciesFieled.value = 'Human';



		n = 1;
		$(".characterContainer").empty();
		$(".countPage").empty();
		$(".countPage2").empty();
		$(".countPage3").empty();
		$("#lastPage").empty();
		$(".countPage2").append(`<p>${Number(n)}</p>`);
		$("#lastPage").append(`<p>${pagesInfo}</p>`);

		if(n > 1){
		$(".countPage3").show();
		$(".countPage").show();
		$(".countPage3").append(`<p>${Number(n)+1}</p>`);
		$(".countPage").append(`<p>${Number(n)-1}</p>`);
		}else{
			$(".countPage3").hide();
			$(".countPage").hide();
	
		}
		if(n == pagesInfo){
			$(".countPage3").hide();
			$(".countPage").hide();
			$("#lastPage").hide();
	
	
		}else{
			$("#lastPage").show();
	
		}


		for(let el of data.results){

			$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			<div class="avatar__bg">
				<div style="background-image: url(${el.image});" class="avatar"></div>
			</div>
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.name}</p>
	
			</div>
			<div class="description__container">
				<p class="description__teg">Location: <span class="desciption__span location">${el.location.name}</span></p>
				<p class="description__teg">Species: <span class="desciption__span species">${el.species}</span></p>
				<p class="description__teg">Status: <span class="desciption__span status">${el.status}</span></p>
				<p class="description__teg">Gender: <span class="desciption__span gender">${el.gender}</span></p>
			</div>
	
	
		</div>`);
	
	
	
		}
	


	   
	});

}



let n = 1;
let pagesInfo;
let favoritChar = [];


function getCharacters(n){

	
	fetch(`https://rickandmortyapi.com/api/character/?page=${n}&species=${species}&status=${status1}&gender=${gender}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
	console.log(data)
	pagesInfo = data.info.pages;

	$("#lastPage").text(pagesInfo);

		console.log(pagesInfo)
	$(".characterContainer").empty();
	$(".countPage").empty();
	$(".countPage2").empty();
	$(".countPage3").empty();
	$(".countPage2").append(`<p>${Number(n)}</p>`);
	if(n > 1){
	$(".countPage3").show();
	$(".countPage").show();
	$(".countPage3").append(`<p>${Number(n)+1}</p>`);
	$(".countPage").append(`<p>${Number(n)-1}</p>`);
	}else{
		$(".countPage3").hide();
		$(".countPage").hide();

	}
	if(n == pagesInfo){
		$(".countPage3").hide();
		$(".countPage").hide();
		$("#lastPage").hide();


	}else{
		$("#lastPage").show();

	}




	

	for(let el of data.results){
		
		$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
		<div class="avatar__box">
		<div class="avatar__bg">
			<div style="background-image: url(${el.image});" class="avatar"></div>
		</div>
		</div>
		<div class="charapter__nameBox">
			<p class="charapter__name">${el.name}</p>

		</div>
		<div class="description__container">
			<p class="description__teg">Location: <span class="desciption__span location">${el.location.name}</span></p>
			<p class="description__teg">Species: <span class="desciption__span species">${el.species}</span></p>
			<p class="description__teg">Status: <span class="desciption__span status">${el.status}</span></p>
			<p class="description__teg">Gender: <span class="desciption__span gender">${el.gender}</span></p>
		</div>


	</div>`);




	}


	

	// $(".characterCard").click(function (e) { 
	// 	console.log(e)
	// 	// let myid = $(this).attr("id");
	// 	// console.log(myid);
	// 	fetch(`https://rickandmortyapi.com/api/character/${myid}`)
	// 	.then((response) => { 
	// 	   return response.json()
	// 	})
	// 	.then((data) => {
	// 	console.log(data)
	// 	// favoritChar.push(data);
	// 	// localStorage.favoritChar = JSON.stringify(favoritChar); 	


	// 	});

		
	// });




	   
 });
}



getCharacters(n)


$("#fistPage").click(function () { 
	n = 1;
	getCharacters(n);

	
});


$("#countPage").click(function () { 
	n = countPage.innerText;
	getCharacters(n);

	
});

$("#countPage3").click(function () { 
	n = countPage3.innerText;
	getCharacters(n);

	
});




$("#lastPage").click(function () { 
	n = pagesInfo;
	getCharacters(n);
	
});


$("#nextBtn").click(function () { 
	if(n < pagesInfo){
	n++;
	getCharacters(n);
	}
	// if(n == pagesInfo){
	// 	alert('f')
	// }

	
});

$("#prevBtn").click(function () { 
	if(n > 0){
	n--;
	getCharacters(n);
	}

	
});


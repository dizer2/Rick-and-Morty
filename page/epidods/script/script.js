

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


// let arr = [];
// for(let i = 0; i < 42; i++){
// fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
// 	.then((response) => {
// 	   return response.json()
// 	})
// 	.then((data) => {
// 		for(let el of data.results){
// 			if(!arr.includes(el.species)){
// 				arr.push(el.species);
// 				$("#speciesFieled").append(`<option value="${el.species}">${el.species}</option>`);
// 			}
// 		}

	   
// });
// }


















let n = 1;
let pagesInfo;
let favoritChar = [];


function getCharacters(n){

	
	fetch(`https://rickandmortyapi.com/api/episode/?page=${n}`)
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
		</div>
		<div class="charapter__nameBox">
			<p class="charapter__name">${el.episode}</p>

		</div>
		<div class="description__container">
			<p class="description__teg">Name: <span class="desciption__span species">${el.name}</span></p>
			<p class="description__teg">Data: <span class="desciption__span status">${el.air_date}</span></p>
		</div>


	</div>`);




	}




	   
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





let allEpisodesNames = [];
console.log(allEpisodesNames)
function getAllEpisodesNames() {
    fetch('https://rickandmortyapi.com/api/episode/?page=' + n)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let el of data.results) {
                allEpisodesNames.push(el.name);
            }
            if (n < 3) {
                n++;
                getAllEpisodesNames();
            }
        });
}

getAllEpisodesNames();
function filterEpisodersByName(a) {
    let arr = [];
    for (let el of allEpisodesNames) {
        if (el.indexOf(a) != -1) {
            arr.push(el);
        }
    }
    return arr;
}










// console.log(patients)
// var input = "A";
// var re = new RegExp(input+'.+$', 'i');
// patients = patients.filter(function(e, i, a){
//     return e.search(re) != -1;
// });

// console.log(patients);



// $('#episodeInp').on('input', function() {
// 	console.log($("#episodeInp").val())
// 	if($("#episodeInp").val().length == 5){

	
// 		for(let i = 0; i < allEpisodesNames.length; i++){
// 		console.log(allEpisodesNames[i].includes($("#episodeInp").val()));

// 		}

// 		$(".buttonsCssgg").append(`<p>Pilot</p>`);


// 	}


// });


$('#episodeInp').on('input', function() {
	let nameEpidos = $('#episodeInp').val();
	console.log('s')
	

	fetch(`https://rickandmortyapi.com/api/episode/?name=${nameEpidos}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
	console.log(data)
	pagesInfo = data.info.pages;

	$("#lastPage").text(pagesInfo);

		console.log(pagesInfo)
	$(".characterContainer").empty();
	$(".buttonsCssgg").empty();




	

	for(let el of data.results){
		$(".buttonsCssgg").append(`<p class="searchEpisod">${el.name}</p>`);
		


		
		$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
		<div class="avatar__box">
		</div>
		<div class="charapter__nameBox">
			<p class="charapter__name">${el.episode}</p>

		</div>
		<div class="description__container">
			<p class="description__teg">Name: <span class="desciption__span species">${el.name}</span></p>
			<p class="description__teg">Data: <span class="desciption__span status">${el.air_date}</span></p>
		</div>


	</div>`);



	}



	$(".searchEpisod").click(function () { 
		console.log($(this).text());
		nameEpidos = $(this).text();


		fetch(`https://rickandmortyapi.com/api/episode/?name=${nameEpidos}`)
		.then((response) => {
		   return response.json()
		})
		.then((data) => {
		console.log(data)
		pagesInfo = data.info.pages;
	
		$("#lastPage").text(pagesInfo);
	
			console.log(pagesInfo)
		$(".characterContainer").empty();
		$(".buttonsCssgg").empty();
		$('#episodeInp').val(nameEpidos);
	
	
	
		
	
		for(let el of data.results){

	
	
			
			$(".characterContainer").append(`<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.episode}</p>
	
			</div>
			<div class="description__container">
				<p class="description__teg">Name: <span class="desciption__span species">${el.name}</span></p>
				<p class="description__teg">Data: <span class="desciption__span status">${el.air_date}</span></p>
			</div>
	
	
		</div>`);
	
	
	
		}
	});

		
		
	});




});
});

$(".main__filers").mouseleave(function() {
	$(".buttonsCssgg").empty();
	$('#episodeInp').val("");

});
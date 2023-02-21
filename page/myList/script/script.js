

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


















let n = 1;
let pagesInfo;
let favoritChar = [];






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








let myList = JSON.parse(localStorage.getItem('myListF')) || [];

console.log(myList)

if ("myListF" in localStorage ) {


	for(i = 0; i < myList.length; i++){
		if(myList[i].watch == "done"){
		$(".characterContainerDone").prepend(myList[i].thisId);

		}else{
			$(".characterContainer").prepend(myList[i].thisId);
		}


	}

	


}



$(".delateSt").click(function () { 
	let p1 = $(this).parent();
	let p2 = $(p1).parent();
	let p3 = $(p2).parent();
	console.log(p3);
	let myid = $(p3).attr("id");
	console.log(myid)
	$(this).closest(".characterCard").css("display", "none");

    for(let a = 0; a < myList.length; a++){
		console.log(myList[a].id)
        console.log(myList[a].id.indexOf(myid));
        myList.splice(myList[a].id.indexOf(myid), 1)
        break;

    }
    console.log(myList);
	localStorage.myListF = JSON.stringify(myList); 	
	

});


$(".loveSt").click(function () { 
	let p1 = $(this).parent();
	let p2 = $(p1).parent();
	let p3 = $(p2).parent();
	console.log(p3);
	let myid = $(p3).attr("id");
	console.log(myid);
	$("#"+myid).addClass("characterLove");
	$(".characterContainerDone").append(p3);

	let nameLove = $("#"+myid).find('.charapter__name').text();
	let stauesLove = $("#"+myid).find('.status').text();
	let speciesLove = $("#"+myid).find('.species').text();


	console.log(nameLove);
	console.log(stauesLove);
	console.log(speciesLove);




	for(let a = 0; a < myList.length; a++){
		let thisGG = myList[a].id.indexOf(myid);
        console.log(thisGG);
		let gg = myList[a].id.indexOf(myid);

		myList.splice(myList[a].id.indexOf(myid), 1);
		myList.push({
		thisId: `<div  id="${myid}" class="characterCard characterLove">
		<div class="avatar__box">
		</div>
		<div class="charapter__nameBox">
			<p class="charapter__name">${nameLove}</p>

		</div>
		<div class="description__container">
			<div class="desciption__left">
			<p class="description__teg">Name: <span class="desciption__span species">${speciesLove}</span></p>
			<p class="description__teg">Data: <span class="desciption__span status">${stauesLove}</span></p>
			</div>
			<div class="desciption__right">
				<div  class="icon__box loveSt">
					<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path class="love" d="M3.53143 0C1.62455 0 0 1.434 0 3.29641C0 4.58121 0.59818 5.66289 1.39096 6.55891C2.18103 7.45186 3.20033 8.20139 4.12181 8.82872L5.71172 9.9111C5.88584 10.0296 6.11416 10.0296 6.28828 9.9111L7.87819 8.82872C8.79967 8.20139 9.81897 7.45187 10.609 6.55891C11.4018 5.66289 12 4.58121 12 3.29641C12 1.434 10.3754 0 8.46857 0C7.48562 0 6.62068 0.463544 6 1.06333C5.37932 0.463544 4.51438 0 3.53143 0Z" fill="white"/>
						</svg>
						
				</div>
				
				<div class="icon__box delateSt">
					<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="mask0_13_161" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="16">
						<path d="M3.87097 0.580645C3.87097 0.259964 4.13093 0 4.45161 0H7.54839C7.86907 0 8.12903 0.259964 8.12903 0.580645V1.16129H11.4194C11.74 1.16129 12 1.42125 12 1.74194C12 2.06262 11.74 2.32258 11.4194 2.32258H0.580645C0.259964 2.32258 0 2.06262 0 1.74194C0 1.42125 0.259964 1.16129 0.580645 1.16129H3.87097V0.580645Z" fill="white"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1.54056 4.40887C1.56235 4.21283 1.72805 4.06452 1.92529 4.06452H10.0747C10.2719 4.06452 10.4376 4.21283 10.4594 4.40887L10.6144 5.80346C10.8937 8.31724 10.8937 10.8542 10.6144 13.368L10.5991 13.5053C10.4974 14.4209 9.78783 15.1509 8.87555 15.2786C6.96782 15.5457 5.03218 15.5457 3.12444 15.2786C2.21216 15.1509 1.50259 14.4209 1.40086 13.5053L1.38561 13.368C1.1063 10.8542 1.1063 8.31724 1.38561 5.80345L1.54056 4.40887ZM5.03226 7.08387C5.03226 6.76318 4.77229 6.50322 4.45161 6.50322C4.13093 6.50322 3.87097 6.76318 3.87097 7.08387L3.87097 12.5032C3.87097 12.8239 4.13093 13.0839 4.45161 13.0839C4.77229 13.0839 5.03226 12.8239 5.03226 12.5032L5.03226 7.08387ZM8.12903 7.08387C8.12903 6.76318 7.86907 6.50322 7.54839 6.50322C7.22771 6.50322 6.96774 6.76318 6.96774 7.08387V12.5032C6.96774 12.8239 7.22771 13.0839 7.54839 13.0839C7.86907 13.0839 8.12903 12.8239 8.12903 12.5032V7.08387Z" fill="white"/>
						</mask>
						<g mask="url(#mask0_13_161)">
						<rect class="delate" width="12" height="16" rx="2" fill="white"/>
						</g>
						</svg>
						
						
				</div>
			</div>


		</div>


	</div>`,
		id: myid,
		watch: "done",
		});

		break;
        

    }
	localStorage.myListF = JSON.stringify(myList); 	
	console.log(myList);


});








$('#episodeInp').on('input', function() {
	let nameEpidos = $('#episodeInp').val();

	

	fetch(`https://rickandmortyapi.com/api/episode/?name=${nameEpidos}`)
	.then((response) => {
	   return response.json()
	})
	.then((data) => {
	console.log(data)

		console.log(pagesInfo)
	$(".buttonsCssgg").empty();




	

	for(let el of data.results){
		$(".buttonsCssgg").append(`<p class="searchEpisod">${el.name}</p>`);
		

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
		$(".buttonsCssgg").empty();
		$('#episodeInp').val(nameEpidos);
	
	
	
		
	
		for(let el of data.results){

	
	
	
			
			$(".characterContainer").prepend(`<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.episode}</p>
	
			</div>
			<div class="description__container">
				<div class="desciption__left">
				<p class="description__teg">Name: <span class="desciption__span species">${el.name}</span></p>
				<p class="description__teg">Data: <span class="desciption__span status">${el.air_date}</span></p>
				</div>
				<div class="desciption__right">
					<div  class="icon__box loveSt">
						<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="love" d="M3.53143 0C1.62455 0 0 1.434 0 3.29641C0 4.58121 0.59818 5.66289 1.39096 6.55891C2.18103 7.45186 3.20033 8.20139 4.12181 8.82872L5.71172 9.9111C5.88584 10.0296 6.11416 10.0296 6.28828 9.9111L7.87819 8.82872C8.79967 8.20139 9.81897 7.45187 10.609 6.55891C11.4018 5.66289 12 4.58121 12 3.29641C12 1.434 10.3754 0 8.46857 0C7.48562 0 6.62068 0.463544 6 1.06333C5.37932 0.463544 4.51438 0 3.53143 0Z" fill="white"/>
							</svg>
							
					</div>
					
					<div class="icon__box delateSt">
						<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_13_161" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="16">
							<path d="M3.87097 0.580645C3.87097 0.259964 4.13093 0 4.45161 0H7.54839C7.86907 0 8.12903 0.259964 8.12903 0.580645V1.16129H11.4194C11.74 1.16129 12 1.42125 12 1.74194C12 2.06262 11.74 2.32258 11.4194 2.32258H0.580645C0.259964 2.32258 0 2.06262 0 1.74194C0 1.42125 0.259964 1.16129 0.580645 1.16129H3.87097V0.580645Z" fill="white"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.54056 4.40887C1.56235 4.21283 1.72805 4.06452 1.92529 4.06452H10.0747C10.2719 4.06452 10.4376 4.21283 10.4594 4.40887L10.6144 5.80346C10.8937 8.31724 10.8937 10.8542 10.6144 13.368L10.5991 13.5053C10.4974 14.4209 9.78783 15.1509 8.87555 15.2786C6.96782 15.5457 5.03218 15.5457 3.12444 15.2786C2.21216 15.1509 1.50259 14.4209 1.40086 13.5053L1.38561 13.368C1.1063 10.8542 1.1063 8.31724 1.38561 5.80345L1.54056 4.40887ZM5.03226 7.08387C5.03226 6.76318 4.77229 6.50322 4.45161 6.50322C4.13093 6.50322 3.87097 6.76318 3.87097 7.08387L3.87097 12.5032C3.87097 12.8239 4.13093 13.0839 4.45161 13.0839C4.77229 13.0839 5.03226 12.8239 5.03226 12.5032L5.03226 7.08387ZM8.12903 7.08387C8.12903 6.76318 7.86907 6.50322 7.54839 6.50322C7.22771 6.50322 6.96774 6.76318 6.96774 7.08387V12.5032C6.96774 12.8239 7.22771 13.0839 7.54839 13.0839C7.86907 13.0839 8.12903 12.8239 8.12903 12.5032V7.08387Z" fill="white"/>
							</mask>
							<g mask="url(#mask0_13_161)">
							<rect class="delate" width="12" height="16" rx="2" fill="white"/>
							</g>
							</svg>
							
							
					</div>
				</div>
	
	
			</div>
	
	
		</div>`);
		
		myList.push({
			thisId: `<div  id="${el.id}" class="characterCard">
			<div class="avatar__box">
			</div>
			<div class="charapter__nameBox">
				<p class="charapter__name">${el.episode}</p>
	
			</div>
			<div class="description__container">
				<div class="desciption__left">
				<p class="description__teg">Name: <span class="desciption__span species">${el.name}</span></p>
				<p class="description__teg">Data: <span class="desciption__span status">${el.air_date}</span></p>
				</div>
				<div class="desciption__right">
					<div class="icon__box loveSt">
						<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path class="love" d="M3.53143 0C1.62455 0 0 1.434 0 3.29641C0 4.58121 0.59818 5.66289 1.39096 6.55891C2.18103 7.45186 3.20033 8.20139 4.12181 8.82872L5.71172 9.9111C5.88584 10.0296 6.11416 10.0296 6.28828 9.9111L7.87819 8.82872C8.79967 8.20139 9.81897 7.45187 10.609 6.55891C11.4018 5.66289 12 4.58121 12 3.29641C12 1.434 10.3754 0 8.46857 0C7.48562 0 6.62068 0.463544 6 1.06333C5.37932 0.463544 4.51438 0 3.53143 0Z" fill="white"/>
							</svg>
							
					</div>
					
					<div  class="icon__box delateSt">
						<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<mask id="mask0_13_161" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="16">
							<path d="M3.87097 0.580645C3.87097 0.259964 4.13093 0 4.45161 0H7.54839C7.86907 0 8.12903 0.259964 8.12903 0.580645V1.16129H11.4194C11.74 1.16129 12 1.42125 12 1.74194C12 2.06262 11.74 2.32258 11.4194 2.32258H0.580645C0.259964 2.32258 0 2.06262 0 1.74194C0 1.42125 0.259964 1.16129 0.580645 1.16129H3.87097V0.580645Z" fill="white"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.54056 4.40887C1.56235 4.21283 1.72805 4.06452 1.92529 4.06452H10.0747C10.2719 4.06452 10.4376 4.21283 10.4594 4.40887L10.6144 5.80346C10.8937 8.31724 10.8937 10.8542 10.6144 13.368L10.5991 13.5053C10.4974 14.4209 9.78783 15.1509 8.87555 15.2786C6.96782 15.5457 5.03218 15.5457 3.12444 15.2786C2.21216 15.1509 1.50259 14.4209 1.40086 13.5053L1.38561 13.368C1.1063 10.8542 1.1063 8.31724 1.38561 5.80345L1.54056 4.40887ZM5.03226 7.08387C5.03226 6.76318 4.77229 6.50322 4.45161 6.50322C4.13093 6.50322 3.87097 6.76318 3.87097 7.08387L3.87097 12.5032C3.87097 12.8239 4.13093 13.0839 4.45161 13.0839C4.77229 13.0839 5.03226 12.8239 5.03226 12.5032L5.03226 7.08387ZM8.12903 7.08387C8.12903 6.76318 7.86907 6.50322 7.54839 6.50322C7.22771 6.50322 6.96774 6.76318 6.96774 7.08387V12.5032C6.96774 12.8239 7.22771 13.0839 7.54839 13.0839C7.86907 13.0839 8.12903 12.8239 8.12903 12.5032V7.08387Z" fill="white"/>
							</mask>
							<g mask="url(#mask0_13_161)">
							<rect class="delate" width="12" height="16" rx="2" fill="white"/>
							</g>
							</svg>
							
							
					</div>
				</div>
	
	
			</div>
	
	
		</div>`,
		id: `${el.id}`,
		watch: "none",
		});

	
	
	
		}
		localStorage.myListF = JSON.stringify(myList); 	





	});

		
		
	});




});
});

$(".main__filers").mouseleave(function() {
	$(".buttonsCssgg").empty();
	$('#episodeInp').val("");

});
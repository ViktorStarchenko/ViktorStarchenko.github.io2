
	$('.toAnimate').waypoint(function(){
		this.element.classList.add('animated')
	},{offset: "99%"})


	var menuBar = document.querySelector('.menu__bar')
	var menu = document.querySelector('.nav')
	var filter = document.querySelector('.filter')
	var navItemVisible = document.getElementsByClassName('item')


	var img = document.getElementsByClassName('image')
	var h3 = document.getElementsByClassName('item-name')
	var p = document.getElementsByClassName('item-article')
	var cont = document.getElementsByClassName('team-item')
	var teamItemsText = document.querySelector('.team-items__text')
	var teamBio = document.getElementById('team__link-bio')
	var teamCont = document.querySelector('.team-items-container')
	var visibleHtext = document.getElementsByClassName('visibleHtext')
	var visiblePtext = document.getElementsByClassName('visiblePtext')


	var featNav = document.getElementsByClassName('featured-nav')
	var featItem = document.getElementsByClassName('featured-product__item')
	var featBox = document.querySelector('.featured-product__item-box')




	var navItem = [{item: 'home'}, {item: 'portfolio'}, {item: 'about us'}, {item: 'contact'}]

	var teamItem = [{id: '1', name: 'George Washington', article: 'George Washington (February 22, 1732 – December 14, 1799) was an American statesman and soldier who served as the first President of the United States from 1789 to 1797 and was one of the Founding Fathers of the United States.', pic: 'img/Washington.jpg', link: '/includes/team-p1.html', link: '<li><a href="https://www.facebook.com/">Facebook</a></li> <li><a href="https://dribbble.com/">Dribble</a></li> <li><a href="https://www.behance.net/">Behance</a></li><li><a href="https://twitter.com/?lang=ru">Twitter</a></li>'}, {id: '2', name: 'Thomas Jefferson', article: 'Thomas Jefferson (April 13 [O.S. April 2] 1743 – July 4, 1826) was an American Founding Father who was the principal author of the Declaration of Independence and later served as the third President of the United States from 1801 to 1809.', pic: 'img/Jefferson.jpg', link: '<li><a href="https://www.facebook.com/">Facebook</a></li> <li><a href="https://dribbble.com/">Dribble</a></li> <li><a href="https://www.behance.net/">Behance</a></li><li><a href="https://twitter.com/?lang=ru">Twitter</a></li>'}, {id: '3', name: 'James Buchanan', article: 'James Buchanan Jr. (April 23, 1791 – June 1, 1868) was the 15th President of the United States (1857–61), serving immediately prior to the American Civil War. Historians fault him for his failure to address the issue of slavery, bringing the nation to the brink of the Civil War.', pic: 'img/Buchanan.jpg', link: '<li><a href="https://www.facebook.com/">Facebook</a></li> <li><a href="https://dribbble.com/">Dribble</a></li> <li><a href="https://www.behance.net/">Behance</a></li><li><a href="https://twitter.com/?lang=ru">Twitter</a></li>'}, {id: '4', name: 'Ulysses S. Grant', article: 'Ulysses S. Grant (born Hiram Ulysses Grant; April 27, 1822 – July 23, 1885) was a prominent United States Army general during the American Civil War and Commanding General at the conclusion of that war. He was elected as the 18th President of the United States in 1868, serving from 1869 to 1877. ', pic: 'img/Grant.jpg', link: '<li><a href="https://www.facebook.com/">Facebook</a></li> <li><a href="https://dribbble.com/">Dribble</a></li> <li><a href="https://www.behance.net/">Behance</a></li><li><a href="https://twitter.com/?lang=ru">Twitter</a></li>'}, {id: '5', name: 'Dwight D. Eisenhower', article: 'Dwight David "Ike" Eisenhower (/ˈaɪzənhaʊ.ər/ EYE-zən-how-ər; October 14, 1890 – March 28, 1969) was an American Army general and statesman who served as the 34th President of the United States from 1953 to 1961. ', pic: 'img/Eisenhower.jpg', link: '<li><a href="https://www.facebook.com/">Facebook</a></li> <li><a href="https://dribbble.com/">Dribble</a></li> <li><a href="https://www.behance.net/">Behance</a></li><li><a href="https://twitter.com/?lang=ru">Twitter</a></li>'}]

//////////////////////////////////////////



		menuBar.addEventListener('click', function(){

			menu.classList.add('visible')
			this.style.display='none'
			filter.style.display='block'
			navItemVisible[4].style.display='block'
			navItemVisible[4].style.opacity='1'
			navItemVisible[5].style.display='block'
			navItemVisible[5].style.opacity='1'
			navItemVisible[6].style.display='block'
			navItemVisible[6].style.opacity='1'
			navItemVisible[7].style.display='block'
			navItemVisible[7].style.opacity='1'


		})
		filter.addEventListener('click', function(){

			menu.classList.remove('visible')
			this.style.display='none'
			menuBar.style.display='flex'
			navItemVisible[4].style.display='none'
			navItemVisible[5].style.display='none'
			navItemVisible[6].style.display='none'
			navItemVisible[7].style.display='none'
		})
////////////////////////////////////////////////////////////
// блок featured


// slider2 = function() {
// 	$('.slider-box').slick({
// 	autoplay: true

// 	}) 
// }
		// sliderDesktop = function() {

		// 		for (k=0; k<featNav.length; k++){

		// 			featNav[k].onclick = function(){

		// 				featBox.classList.add('slider-box')
		// 				slider2()
		// 			if (featNav[k]>0) {
		// 				for (q=0; q<featItem;q++){

		// 					featItem.delete(1)
		// 				}
		// 			}


		// 			}								
					
		
					
		// 		}

		// }
		// sliderDesktop()

			slider = function(){

				$('.slider-box').slick({
					autoplay: true,
  					autoplaySpeed: 2000,
					infinite: true,
					centerMode: true,
					slidesToShow: 1,
			  		slidesToScroll: 6,
			  		arrows: false,
			  		dots: false,
			  		centerPadding: '10px',
			  		centerMode: true,
				})
			}
				


	// блок team 
	console.log(teamItem[0])

	function team() {

		_.find(teamItem, {pic: 'img/Washington.jpg'}).addEventListener('click', function(){


		})
	}

//////////////////////////////////////////////////////////////
/////



// console.log(visibleHtext)
// console.log(visiblePtext)


// 	function nax() {

// 		for(i=0; i<visibleHtext.length; i++){

// 			if (visibleHtext[i]!==this){


// 				visibleHtext[i].style.display = 'none'
// 			}
// 		}
// 		for (t=0; t<visiblePtext.length; t++) {

// 			if (visiblePtext[t]!==this) {
// 				visiblePtext[t].style.display = 'none'
// 			}		
// 		}
// 	}

// 	visibleHtext[2].addEventListener('click', nax)
// 	visiblePtext[2].addEventListener('click', nax)

	



			
		
///////////////////////////////////////////////////////////////
// 	console.log(teamCont)

// function syka(){

// 	for(i=0; i<teamCont.childNodes.length; i++){

// 		this.classList.add('big')
// 		this.classList.add('order')
// 	if(teamCont.childNodes[2].childNodes[i]!==this) {
// 		teamCont.childNodes[2].childNodes[i].classList.remove('big')
// 		teamCont.childNodes[2].childNodes[i].classList.remove('order')
// 	}

// 	console.log(teamCont.childNodes[i].childNodes.length)

// }
// }


// // console.log(teamCont.childNodes[2].childNodes[2])

// teamCont.childNodes[2].childNodes[0].addEventListener('click', syka)
// teamCont.childNodes[2].childNodes[1].addEventListener('click', syka)
// teamCont.childNodes[2].childNodes[2].addEventListener('click', syka)
// teamCont.childNodes[2].childNodes[3].addEventListener('click', syka)
// teamCont.childNodes[2].childNodes[4].addEventListener('click', syka)
// // console.log(teamCont.childNodes[2].childNodes[4])




		function teamFunc(){

			for (i=0; i<img.length; i++) {

				this.classList.add('big')
				this.classList.add('order')

				if (img[i]!==this) {
					img[i].classList.remove('big')
					img[i].classList.remove('order')
				}
			}
				if (this==img[0]) {
					teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[0].name+'<'+'/'+'h1'+'>'
					teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[0].article+'<'+'/'+'p'+'>'
					teamBio.innerHTML=teamItem[0].link
				}
				if (this==img[1]) {
					teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[1].name+'<'+'/'+'h1'+'>'
					teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[1].article+'<'+'/'+'p'+'>'
					teamBio.innerHTML=teamItem[1].link
				}
				if (this==img[2]) {
					teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[2].name+'<'+'/'+'h1'+'>'
					teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[2].article+'<'+'/'+'p'+'>'
					teamBio.innerHTML=teamItem[2].link
				}
				if (this==img[3]) {
					teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[3].name+'<'+'/'+'h1'+'>'
					teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[3].article+'<'+'/'+'p'+'>'
					teamBio.innerHTML=teamItem[3].link
				}		
				if (this==img[4]) {
					teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[4].name+'<'+'/'+'h1'+'>'
					teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[4].article+'<'+'/'+'p'+'>'
					teamBio.innerHTML=teamItem[4].link
				}
		}
		img[0].addEventListener('click', teamFunc)
		img[1].addEventListener('click', teamFunc)
		img[2].addEventListener('click', teamFunc)
		img[3].addEventListener('click', teamFunc)
		img[4].addEventListener('click', teamFunc)



//////// блок team
		// 	var ptemp
		// function teamFunc(e){



		// 	for (i=0; i<img.length; i++) {

		// 		this.classList.add('big')
		// 		this.classList.add('order')



		// 		if (img[i]!==this) {

		// 			img[i].classList.remove('big')
		// 			img[i].classList.remove('order')

		// 		}
		// 	}

		// 	for(y=0; y<visibleHtext.length; y++){

		// 	if (visibleHtext[y]!==this){


		// 	ptemp = this

		// 		visibleHtext[y].style.display = 'none'
		// 	}
		// }
		// 	for (t=0; t<visiblePtext.length; t++) {

		// 	if (visiblePtext[t]==img[i]) {
		// 		visiblePtext[t].style.display = 'block'
		// 	}	

		// 	if (visiblePtext[t]!==img[i]) {
		// 		visiblePtext[t].style.display = 'none'
		// 	}		
		// }
		// }

		// console.log(ptemp)
		// img[0].addEventListener('click', teamFunc)
		// img[1].addEventListener('click', teamFunc)
		// img[2].addEventListener('click', teamFunc)
		// img[3].addEventListener('click', teamFunc)
		// img[4].addEventListener('click', teamFunc)
///////////////////////////////////////////////////////////////////////////
// function bigFunc() {
// 	var temporary = []
// for (i=0; i<img.length; i++) {


// 	console.log(img)

// 				img[i].addEventListener('click', function(e){


// 						this.classList.add('big')
// 						this.classList.add('order')
// 			console.log(this)

// 						if (img[i]!==this) {

// 								img[i].classList.remove('big')
// 								img[i].classList.remove('order')

// 							}	
// 						})
				

// 				}

// }

// bigFunc()

			





		// img[0].addEventListener('click', teamFunc)
		// img[1].addEventListener('click', teamFunc)
		// img[2].addEventListener('click', teamFunc)
		// img[3].addEventListener('click', teamFunc)
		// img[4].addEventListener('click', teamFunc)

		// 	this.classList.add('big')
		// 	this.classList.add('order')
		// 	img[1].classList.remove('big')
		// 	img[2].classList.remove('big')
		// 	img[3].classList.remove('big')
		// 	img[4].classList.remove('big')
		// 	img[1].classList.remove('order')
		// 	img[2].classList.remove('order')
		// 	img[3].classList.remove('order')
		// 	img[4].classList.remove('order')
		// 	teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[0].name+'<'+'/'+'h1'+'>'
		// 	teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[0].article+'<'+'/'+'p'+'>'
		// 	teamBio.innerHTML=teamItem[0].link
		// })
		// img[1].addEventListener('click', function(){
		// 	this.classList.add('big')
		// 	this.classList.add('order')
		// 	img[0].classList.remove('big')
		// 	img[2].classList.remove('big')
		// 	img[3].classList.remove('big')
		// 	img[4].classList.remove('big')
		// 	img[0].classList.remove('order')
		// 	img[2].classList.remove('order')
		// 	img[3].classList.remove('order')
		// 	img[4].classList.remove('order')
		// 	teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[1].name+'<'+'/'+'h1'+'>'
		// 	teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[1].article+'<'+'/'+'p'+'>'
		// 	teamBio.innerHTML=teamItem[1].link
		// })

		// img[2].addEventListener('click', function(){
		// 	this.classList.add('big')
		// 	this.classList.add('order')
		// 	img[0].classList.remove('big')
		// 	img[1].classList.remove('big')
		// 	img[3].classList.remove('big')
		// 	img[4].classList.remove('big')
		// 	img[0].classList.remove('order')
		// 	img[1].classList.remove('order')
		// 	img[3].classList.remove('order')
		// 	img[4].classList.remove('order')
		// 	teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[2].name+'<'+'/'+'h1'+'>'
		// 	teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[2].article+'<'+'/'+'p'+'>'
		// 	teamBio.innerHTML=teamItem[2].link
		// })

		// img[3].addEventListener('click', function(){
		// 	this.classList.add('big')
		// 	this.classList.add('order')
		// 	img[0].classList.remove('big','order')
		// 	img[1].classList.remove('big')
		// 	img[2].classList.remove('big')
		// 	img[4].classList.remove('big')
		// 	img[0].classList.remove('order')
		// 	img[1].classList.remove('order')
		// 	img[2].classList.remove('order')
		// 	img[4].classList.remove('order')
		// 	teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[3].name+'<'+'/'+'h1'+'>'
		// 	teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[3].article+'<'+'/'+'p'+'>'
		// 	teamBio.innerHTML=teamItem[3].link
		// })
		// img[4].addEventListener('click', function(){
		// 	this.classList.add('big')
		// 	this.classList.add('order')
		// 	img[0].classList.remove('big')
		// 	img[1].classList.remove('big')
		// 	img[2].classList.remove('big')
		// 	img[3].classList.remove('big')
		// 	img[0].classList.remove('order')
		// 	img[1].classList.remove('order')
		// 	img[2].classList.remove('order')
		// 	img[3].classList.remove('order')
		// 	teamItemsText.innerHTML='<'+'h1'+'>'+teamItem[4].name+'<'+'/'+'h1'+'>'
		// 	teamItemsText.innerHTML+='<'+'p'+'>'+teamItem[4].article+'<'+'/'+'p'+'>'
		// 	teamBio.innerHTML=teamItem[4].link
		// })
		////////////////

		console.log(document.documentElement.clientWidth)


		function sliderBox() {
			


			if (document.documentElement.clientWidth < 768) {
						
						featBox.classList.add('slider-box')
						slider()
					}
					if ((document.documentElement.clientWidth > 768)){
						featBox.classList.remove('slider-box')
					}

			}

			sliderBox()
	///////////////////////////////////////////////////







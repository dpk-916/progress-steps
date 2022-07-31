const progress = document.getElementById('progress')
const reset = document.getElementById('reset')
const submit = document.getElementById('submit')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',() =>{
	currentActive++
	if(currentActive>circles.length){
		currentActive=circles.length
	}
	update()
})


prev.addEventListener('click',() =>{
	currentActive-- 
	if(currentActive < 1){
		currentActive = 1
	}
	update()
})

reset.addEventListener('click',() =>{
	currentActive = 1
	progress.classList.remove('completed')
	circles.forEach(circle =>{
		circle.classList.remove('completed')
	})
	submit.disabled = true
	update()
})

submit.addEventListener('click',() =>{
	currentActive = 1
	submit.disabled=true
	prev.disabled = true
	next.disabled = true
	progress.classList.add('completed')
	circles.forEach(circle =>{
		circle.classList.add('completed')
	})
})

function update(){
	circles.forEach((circle,index)=>{
		if(index <currentActive){
			circle.classList.add('active')
		} else{
			circle.classList.remove('active')
		}

	})

	const actives = document.querySelectorAll('.active')
	progress.style.width = (actives.length-1)/(circles.length-1)*100 + '%'

	if(currentActive == 1){
		prev.disabled = true
		next.disabled = false
		reset.disabled = true
	}else if(currentActive == circles.length){
		next.disabled = true
		submit.disabled = false
	}else{
		prev.disabled = false
		next.disabled = false
		submit.disabled = true
		reset.disabled = false
	}

}
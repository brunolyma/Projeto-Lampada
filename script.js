const turnOn = document.getElementById( 'turnOn' )
const turnOff = document.getElementById( 'turnOff' )
const lamp = document.getElementById( 'lamp' )

function isBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if(!isBroken()){
    lamp.src = 'img/ligada.jpg'
    } else {
        turnOn.setAttribute('disabled', 'disabled')
        turnOff.setAttribute('disabled', 'disabled')
    }
}


function lampOff () {
    if(!isBroken()) {
    lamp.src = 'img/desligada.jpg'
    } else {
        turnOn.setAttribute('disabled', 'disabled')
        turnOff.setAttribute('disabled', 'disabled')
    }   
}


function lampBroken () {
    lamp.src = 'img/quebrada.jpg'
}

turnOn.addEventListener( 'click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener( 'mouseenter', lampOn)
lamp.addEventListener( 'mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)


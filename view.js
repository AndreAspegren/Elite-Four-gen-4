updateview();
function updateview() {
    if (view != null) currentview = view
    if (currentview == "start") startview();
    if (currentview == "randomencounter") randomencounterview();
    if (currentview == "caught") caughtview();
    if (currentview == "rival") rivalview();
    if (currentview == "allcaught") currentlycaughtpokemon();
    if (currentview == "changepokemon") changepokemon();
}

function changeview(view) {
    currentview = view;
    updateview();
}
let pokeballs = 14
let maxpokeballs = 14
let rerolls = 26
let maxrerolls = 25

function startview(){
    app.innerHTML = /*HTML*/`
    ${muteknapp()}
    <div style="position: fixed; top: 10%; right: 10%">
    ${rival.startviewavatar}
    <button style="display: flex; align-items: center; justify-content: center; width: 22vh" 
    onclick="${player.pokemon.length == 0 ? 'updateview()' : 'changeview(\'rival\'); elitefourtheme.play(); elitefourtheme.volume = 0.15; adventuretheme.pause(); decidetheme(); leadcries()'}">
    ${player.pokemon.length == 0 ? 'Du trenger minst en pokemon for å utfordre Elite Four!' : 'Utfordre Elite Four'}</button>
    </div> 
    <button onclick="rerolls--; changeview('randomencounter'); decidetheme()" style="position: fixed; bottom: 43%; left: 45%; width: 22vh; height: 7vh; background-color: 
    transparent; border: 2px solid orange; display: flex; align-items: center; justify-content: center; text-align: center;">
    Random Encounter</button>                                                        
    <div style = "display: flex;">
    <div style="position: fixed; bottom: 0; left: 5%">
    ${player.avatar}
    <br>
    <div style= "display: flex">  
    <div style="position: fixed; bottom: 0; right: 10%">
    <img onclick="changeview('allcaught'); decidetheme()" style= "width: 22vh; height: auto;" 
    src="pictures/bag.png" alt="" >
    </div> 
    ` 
    adventuretheme.play()
    adventuretheme.volume=0.12
}

function randommon() {
    return Math.floor(Math.random() * pokemon.length)
}

function muteknapp(){
    knapp = `<button style="position: fixed; top: 8%; left: 8%" onclick="toggletheme()">Toggle theme</button>`
    return knapp
}

function randomencounterview() {
    if (rerolls >= 0 && pokeballs > 0) index = randommon()
    app.innerHTML = /*HTML*/`
    ${muteknapp()}
    <div style="position: fixed; top: 45%; right: 20%">
    <div>${pokemon[index].name}</div>
    <div>Level: ${pokemon[index].level}</div>
    <div>Health: ${pokemon[index].health}</div>
    <img style= "width: 22vh; height: auto;" src="${pokemon[index].image}" alt="${pokemon[index].name}">
    </div>
    <div style= "position: fixed; bottom: 7%; right: 10%; width: 29vh">
    <div style="width: 28vh;" class="textdisplay">En vill ${pokemon[index].name} dukket opp!</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
    ${genbutton()}
    <button style="width: 14vh; height: 7vh;" onclick="rerolls--; changeview('randomencounter'); decidetheme()" ${rerolls <= 0 ? 'Disabled' : ''}>${rerolls} / ${maxrerolls} rerolls</button>
    <div style="display: flex; flex-direction: column; justify-content: flex-end; ">${pokeballs.toString()} / ${maxpokeballs} Pokeballer</div>
    <button style="width: 14vh; height: 7vh;" onclick="changeview('start'); decidetheme()">Gå til start</button>  
    <button style="width: 14vh; height: 7vh;" onclick= "changeview('allcaught'); decidetheme()">vis fangede pokemon</button>
    <img style= "width: 7vh; height: 7vh;" src="pictures/pokeball.png" alt="">
    </div>
    </div>

    <div style="position: fixed; bottom: 0; left: 5%">
    ${player.avatar}
    </div>
    `;
    caughtpokemonname = pokemon[index].name;
}

function catchpokemon(currentIndex) {
    random = Math.floor(Math.random() * 4)
    if (random != 0){
        player.pokemon.push(pokemon[currentIndex])
        catchedIndex = currentIndex;
        if (onlyonce == true) {
            onlyonce = false;
        }
        test++;
    }
}


function caughtview(){
    catchpokemon(index)
    if (random != 0){
        app.innerHTML =  /*HTML*/ `
        ${muteknapp()}
        <div style="position: fixed; top: 40%; right: 45%">
        <h1>Du fanget: ${pokemon[index].name}</h1>
        <img style= "width: 22vh; height: auto;" src="${pokemon[index].image}" alt="${pokemon[index].name}">
        <div>${pokemon[index].name}</div>
        <div>Level: ${pokemon[index].level}</div>
        <div>Health: ${pokemon[index].health}</div>
        </div>
        <br/>
        <div style="position: fixed; bottom: 15%; right: 12%; display: grid; grid-template-columns: repeat(2, 1fr)">
        <button style="width: 14vh; height: 7vh;" onclick="changeview('start'); decidetheme()">Gå til start</button> 
        <button style="width: 14vh; height: 7vh;" onclick="rerolls--; changeview('randomencounter'); decidetheme()">${rerolls} / ${maxrerolls} rerolls</button>
        <button style="width: 14vh; height: 7vh;" onclick="${player.pokemon.length == 0 ? 'updateview()' : 'changeview(\'rival\'); elitefourtheme.play(); elitefourtheme.volume = 0.15; adventuretheme.pause(); decidetheme(); leadcries()'}">sloss med Elite Four</button> 
        <button style="width: 14vh; height: 7vh;" onclick="changeview('allcaught'); decidetheme()">vis fangede pokemon</button>  
        </div>      
        `;
    }
    else {
        app.innerHTML =  /*HTML*/ `
        ${muteknapp()}
        <div style="position: fixed; top: 40%; right: 45%">
        <h1>${pokemon[index].name} slapp unna!</h1>
        <img style= "width: 22vh; height: auto;" src="${pokemon[index].image}" alt="${pokemon[index].name}">
        <div>${pokemon[index].name}</div>
        <div>Level: ${pokemon[index].level}</div>
        <div>Health: ${pokemon[index].health}</div>
        </div>
        <br/>
        <div style="position: fixed; bottom: 15%; right: 12%; display: grid; grid-template-columns: repeat(2, 1fr)">
        <button style="width: 14vh; height: 7vh;" onclick="changeview('start'); decidetheme()">Gå til start</button> 
        <button style="width: 14vh; height: 7vh;" onclick="rerolls--; changeview('randomencounter'); decidetheme()">${rerolls} / ${maxrerolls} rerolls</button>
        <button style="width: 14vh; height: 7vh;" onclick="${player.pokemon.length == 0 ? '' : 'changeview(\'rival\'); elitefourtheme.play(); elitefourtheme.volume = 0.15; decidetheme(); leadcries()'}">sloss med Elite Four</button> 
        <button style="width: 14vh; height: 7vh;" onclick="changeview('allcaught'); decidetheme()">vis fangede pokemon</button>  
        </div>      
        `;
    }
}

function geninvisiblepokemon(who){
    pokemon = {
        name: '',
        maxhealth: '',
        health: '',
        image: '',
        level: '',
        speed: '',
        move1name: '',
        move1: 'bleh',
        move2name: '',
        move2: 'bleh',
        move3name: '',
        move3: 'bleh',
        move4name: '',
        move4: 'bleh',
    }
    if (who == 'friend'){
        player.pokemon.push(pokemon)
        setTimeout(function (){
            buttonsenabled = false 
            battlemessage = 'Du tapte!'
            updateview()
        }, 2010)
    }
    if (who == 'foe'){
        rival.pokemon.push(pokemon)
        setTimeout(function (){
            battlemessage = 'Du vant!'
            championtheme.pause()
        victorytheme.play()
        victorytheme.volume = 0.15
            potions = 0
            buttonsenabled = false 
            updateview()
        }, 2010)
    }
}


function rivalview(){
        if (player.pokemon.length == 0) geninvisiblepokemon('friend')
        if (rival.pokemon.length == 0) geninvisiblepokemon('foe')
        app.innerHTML = /*HTML*/`
        ${muteknapp()}
        ${playermovemessage ?? ''}
        <div style="position: fixed; top: 5%; right: 0%">
        ${rival.avatar}
        </div>
        <div style="position: fixed; top: 10%; right: 20%">
        ${rivalleadvsplayer()}
        </div>
        ${playerbuttons()}
        <div style="position: fixed; left: 25%; bottom: 30%">
        ${player.pokemon[0].health >= 0 ? playerleadvsrival() : ''}
        </div>
        
        ${rivalmovemessage ?? ''}
        <div style="position: fixed; bottom: 0; left: 5%">
        ${player.avatar}
        </div>   
        `   
}

function changepokemon(){
    let pokemonloop = '';
        for (let i = 0; i < player.pokemon.length; i++) {

            pokemonloop += /*HTML*/`
            <div style="width: 50%;">
            <div>${player.pokemon[i].name}</div>
            <div>Level: ${player.pokemon[i].level}</div>
            <div>Health: ${player.pokemon[i].health}</div>
            <img style= "width: 22vh; height: auto;" src="${player.pokemon[i].image}" alt="${player.pokemon[i].name}">
            <div style="display:flex; width:22vh">
            <button style= "width: 22vh; height: 3vh;" onclick="${i != 0 ? `changeto(${i})` : `updateview()`}">Bytt til</button>
            </div>
            </div>
            `;
        }
        app.innerHTML = /*HTML*/`${muteknapp()}<div style="position: fixed; top: 5%; right: 40%; font-size: 220%">
        ${player.pokemon.length > 0 ? player.pokemon[0].name + ' ' : 'Du har ingen pokemon'}
        ${player.pokemon.length > 0 ? 'er nå leaden din' : ''}</div>` + 
        `<div style="position: fixed; top: 15%; right: 30%; gap: 20px; display: grid; grid-template-columns: repeat(2, 1fr)">` +
        pokemonloop + '</div>' +
        `<div style="position: fixed; bottom: 15%; right: 12%">
        <button onclick="changeview('rival'); decidetheme()">Gå til battle</button>
        </div>`;
}

function changeto(yepp){
    buttonsenabled = false
    test = yepp;
    const item = player.pokemon.splice(yepp, 1)[0];
    player.pokemon.unshift(item);
    changeview('rival')
    decidetheme()
    battlemessage= player.name + ' byttet til ' + player.pokemon[0].name + '!'
    updateview()
    setTimeout(function (){
        battlemanager('potion', '1')
    }, 2000)  
}

function currentlycaughtpokemon(){
    let pokemonloop = '';
        for (let i = 0; i < player.pokemon.length; i++) {
            pokemonloop += /*HTML*/`
            <div style="width: 50%;">
            <div>${player.pokemon[i].name}</div>
            <div>Level: ${player.pokemon[i].level}</div>
            <div>Health: ${player.pokemon[i].health}</div>
            <img onclick="makelead(${i})" style= "width: auto; height: 15vh;" src="${player.pokemon[i].image}" alt="${player.pokemon[i].name}">
            <div style="display:flex; width:300px">
            <button style= "width: 10vh; height: 4vh;" onclick="makelead(${i})">Gjør til lead</button>
            <button style= "width: 10vh; height: 4vh;" onclick="remove(${i})">Slipp fri</button>
            </div>
            </div>
            `;
        }
        app.innerHTML = /*HTML*/`${muteknapp()}<div style="position: fixed; top: 5%; right: 40%; font-size: 220%">
        ${player.pokemon.length > 0 ? player.pokemon[0].name + ' ' : 'Du har ingen pokemon'}
        ${player.pokemon.length > 0 ? 'er nå leaden din' : ''}</div>` + 
        `<div style="position: fixed; top: 15%; right: 30%; gap: 20px; display: grid; grid-template-columns: repeat(2, 1fr)">` +
        pokemonloop + '</div>' +
        `<div style="position: fixed; bottom: 15%; right: 5%">
        <button style="width: 14vh; height: 7vh;" onclick="changeview('start'); decidetheme()">Gå til start</button>
        <button style="width: 14vh; height: 7vh;" onclick="rerolls--; changeview('randomencounter'); decidetheme()">${rerolls} / ${maxrerolls} rerolls</button>
        </div>`;
}
let potions = 10
function playerbuttons(){
        buttons =  /*HTML*/`
        <div style="position: fixed; bottom: 8%; right: 0%">
        <div style="display: flex;">
        <div style="width: 28vh;" class="textdisplay">
        ${battlemessage}
        </div>
        <div style="display: flex; flex-direction: column; justify-content: flex-end; margin-left: 4px; height: 40px;">${potions.toString()} / 10 potions</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
        <button style="width: 14vh; height: 7vh;" onclick="battlemanager(${player.pokemon.length == 0 ? '' : player.pokemon[0].move1}, '0')" ${buttonsenabled ? '' : 'Disabled'} ${player.pokemon.length == 0 ? 'Disabled' : ''}>${player.pokemon.length == 0 ? '' : player.pokemon[0].move1name}</button>
        <button style="width: 14vh; height: 7vh;" onclick="battlemanager(${player.pokemon.length == 0 ? '' : player.pokemon[0].move2}, '0')" ${buttonsenabled ? '' : 'Disabled'} ${player.pokemon.length == 0 ? 'Disabled' : ''}>${player.pokemon.length == 0 ? '' : player.pokemon[0].move2name}</button>
        ${returnpotion()}
        <button style="width: 14vh; height: 7vh;" onclick="battlemanager(${player.pokemon.length == 0 ? '' : player.pokemon[0].move3}, '0')" ${buttonsenabled ? '' : 'Disabled'} ${player.pokemon.length == 0 ? 'Disabled' : ''}>${player.pokemon.length == 0 ? '' : player.pokemon[0].move3name}</button>
        <button style="width: 14vh; height: 7vh;" onclick="battlemanager(${player.pokemon.length == 0 ? '' : player.pokemon[0].move4}, '0')" ${buttonsenabled ? '' : 'Disabled'} ${player.pokemon.length == 0 ? 'Disabled' : ''}>${player.pokemon.length == 0 ? '' : player.pokemon[0].move4name}</button>
        ${returnbag()}
        </div>
        </div>
        `;
        return buttons
}

function returnpotion(){
    if (playergigaimpactcd == 2 || buttonsenabled == false) {
      button =  `<img style= "width: auto; height: 7vh;" src="https://www.serebii.net/itemdex/sprites/sv/throatspray.png" alt="" >`
    } else button = ` <img onclick="${potions > 0 ? 'consumepotion()' : 'updateview()'}" style= "width: auto; height: 7vh;" 
    src="https://www.serebii.net/itemdex/sprites/sv/throatspray.png" alt="" >`
    return  button
}

function returnbag(){
    if (playergigaimpactcd == 2 || buttonsenabled == false) {
        button =  `<img onclick="updateview()" style= "width: auto; height: 7vh;" 
        src="pictures/bag.png" alt="" >`
      } else button = `<img onclick="changepokemon(); currentview = 'changepokemon'; decidetheme()" style= "width: auto; height: 7vh;" 
      src="pictures/bag.png" alt="" >`
      return  button
}

function consumepotion(){
        battlemessage = player.name + ' brukte en potion!'
        buttonsenabled = false
        potion.play()
        updateview()
        setTimeout(function (){
        currenthealth = player.pokemon[0].health
        player.pokemon[0].health += 150
        if (player.pokemon[0].health > player.pokemon[0].maxhealth) player.pokemon[0].health = player.pokemon[0].maxhealth
        battlemessage = 'Det healet ' + (player.pokemon[0].health - currenthealth) + ' hp!'
        potions -= 1
        updateview() 
        setTimeout(() =>  battlemanager('potion', '1'), 2000)  
        }, 2000)
}


function playerleadvsrival() { 
    if (player.pokemon[0].name != 'kek') {
        playerlead = /*HTML*/`<div>
        <div style="display:flex; right: 0%">
        <div>
        <div>${player.pokemon[0].name == 'kek' ? '' : player.pokemon[0].name}</div>
        <div>${player.pokemon[0].name == 'kek' ? '' : 'Level: '}${player.pokemon[0].level}</div>
        <div>${player.pokemon[0].name == 'kek' ? '' : 'Health: '}${player.pokemon[0].health}</div>
        </div>
         <div style="position: absolute, top:0%; right: 0%">${playerstatus ? playerstatusimage : ''}</div>
         </div>
        <div style="display: flex; justify-content: left;">
        <div style="flex: 0 0 auto; width:${(player.pokemon[0].health / player.pokemon[0].maxhealth * 22).toString()}vh; height: 2vh; background-color: green"></div>
        <div style="flex: 0 0 auto; width:${((player.pokemon[0].maxhealth - player.pokemon[0].health) / player.pokemon[0].maxhealth * 22).toString()}vh; height: 2vh; background-color: red"></div>
        </div>
        <img style="width: 22vh; height: auto;" src="${player.pokemon[0].image}" alt="${player.pokemon[0].name}">
        </div>
        `;
        return playerlead

    } else {
        potions = 0 
        buttonsenabled = false
        battlemessage = 'Du tapte!'
        return ''
    }
}

function rivalleadvsplayer() {
    if (rival.pokemon.length > 0) {
        rivallead = /*HTML*/`<div>
        <div style="display:flex; right: 0%">
        <div>
        <div>${rival.pokemon[0].name}</div>
        <div>${rival.pokemon.length > 0 ? 'Level: ' : ''}${rival.pokemon[0].level}</div>
        <div>${rival.pokemon.length > 0 ? 'Health: ' : ''}${rival.pokemon[0].health}</div>
        </div>
         <div style="position: absolute, top:0%; right: 0%">${rivalstatus ? rivalstatusimage : ''}</div>
         </div>
        <div style="display: flex; justify-content: left;">
        <div style="flex: 0 0 auto; width:${(rival.pokemon[0].health / rival.pokemon[0].maxhealth * 22).toString()}vh; height: 2vh; background-color: green"></div>
        <div style="flex: 0 0 auto; width:${((rival.pokemon[0].maxhealth - rival.pokemon[0].health) / rival.pokemon[0].maxhealth * 22).toString()}vh; height: 2vh; background-color: red"></div>
        </div>
        <img style="width: 22vh; height: auto;" src="${rival.pokemon[0].image}" alt="${rival.pokemon[0].name}">
        </div>
        `;
        return rivallead
    } else {
        return ''
    }
}

function genbutton(){
    if (pokeballs > 0){
        button =  `<button style="width: 14vh; height: 7vh;" onclick="pokeballs--; changeview('caught'); decidetheme()" ${player.pokemon.length == 6 ? 'Disabled' : ''}>${player.pokemon.length == 6 ? 'Maks 6 pokemon' : 'Fang pokemon'}</button>`
    }
    if (pokeballs <= 0 || rerolls <= 0){
        button = button =  `<button style="width: 14vh; height: 7vh;" Disabled >Tom for pokeballer</button>`
    }
    if (rerolls <= 0){
        button = button =  `<button style="width: 14vh; height: 7vh;" Disabled >Tom for rerolls</button>`
    }
return button
}





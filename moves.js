function Swordsdance(who, when) {
    battlemessage = uname + ' ' + 'brukte Swords Dance!'
    setTimeout(() => swordsdance.play(), 1000)
    setTimeout(function () {
        if (uattackstate == 11) {
            uattackstate += 1;
            battlemessage = 'Angrepet økte betraktelig!'
            statrise.play()
        } if (uattackstate < 11) {
            uattackstate += 2;
            battlemessage = 'Angrepet økte betraktelig!'
            statrise.play()
        } 
        if (uattackstate >= 12) battlemessage = 'Angrepet til' + ' ' + uname + ' ' + 'kan ikke gå høyere!'
        updateuattack(who);
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Dragondance(who, when) {
    battlemessage = uname + ' ' + 'brukte Dragon Dance!'
    setTimeout(() => swordsdance.play(), 1000)
    setTimeout(function () {
        if (uattackstate < 12) {
            uattackstate += 1;
            battlemessage = 'Angrepet og hastigheten økte betraktelig!'
            statrise.play()
            if (who == 'friend') player.pokemon[0].speed += player.pokemon[0].speed * 1.33
            if (who == 'foe') rival.pokemon[0].speed += rival.pokemon[0].speed * 1.33
            updateuattack(who);
        } 
        else if (uattackstate >= 12) battlemessage = 'Angrepet og hastigheten til ' + uname + ' kan ikke gå høyere!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Poweruppunch(who, when) {
    battlemessage = uname + ' ' + 'brukte Power Up Punch!';
    if (random < 100 * uaccuracy) setTimeout(() => poweruppunch.play(), 1000) 
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 40 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 40 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                if (random < 100 && uattackstate < 12) {
                    uattackstate += 1
                    updateuattack(who)
                    battlemessage = uname + ' ' + 'sitt angrep økte!'
                    statrise.play()
                    updateview()
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview()
}

function Calmmind(who, when) {
    battlemessage = uname + ' ' + 'brukte Calm Mind!'
    setTimeout(() => calmmind.play(), 1000)
    setTimeout(function () {
        if (uattackstate < 12 && udefensestate < 12) {
            uattackstate += 1;
            udefensestate += 1;
            battlemessage = 'Angrepet og forsvaret økte!'
            statrise.play()
            updateuattack(who);
            updateudefense(who);
        } if (uattackstate < 12 && udefensestate >= 12) {
            uattackstate += 1
            statrise.play()
            updateuattack(who);
            battlemessage = 'Angrepet økte!'
        } if (udefensestate < 12 && uattackstate >= 12) {
            udefensestate += 1
            updateudefense(who);
            battlemessage = 'Forsvaret økte!'
            statrise.play()
        }
        if (uattackstate >= 12 && udefensestate >= 12) battlemessage = 'Angrepet og forsvaret til' + ' ' + uname + ' ' + 'kan ikke gå høyere!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Nastyplot(who, when) {
    battlemessage = uname + ' ' + 'brukte Nasty Plot!'
    setTimeout(() => nastyplot.play(), 1000)
    setTimeout(function () {
        if (uattackstate == 11) {
            uattackstate += 1;
            battlemessage = 'Angrepet økte betraktelig!'
            statrise.play()
        } if (uattackstate < 11) {
            uattackstate += 2;
            battlemessage = 'Angrepet økte betraktelig!'
            statrise.play()
        } 
        if (uattackstate >= 12) battlemessage = 'Angrepet til' + ' ' + uname + ' ' + 'kan ikke gå høyere!'
        updateuattack(who);
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Irondefense(who, when) {
    battlemessage = uname + ' ' + 'brukte Iron Defense!'
    setTimeout(() => irondefense.play(), 1000)
    setTimeout(function () {
        if (udefensestate == 11) {
            udefensestate += 1;
            battlemessage = 'Forsvaret økte betraktelig!'
            statrise.play()
        } if (udefensestate < 11) {
            udefensestate += 2;
            battlemessage = 'Forsvaret økte betraktelig!'
            statrise.play()
        } 
        if (udefensestate >= 12) battlemessage = 'Forsvaret til' + ' ' + uname + ' ' + 'kan ikke gå høyere!'
        updateudefense(who);
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Growl(who, when) {
    battlemessage = uname + ' ' + 'brukte Growl!'
    setTimeout(() => growl.play(), 1000)
    setTimeout(function () {
        if (aattackstate == 0) battlemessage = 'Angrepet til' + ' ' + aname + ' ' + 'kan ikke gå lavere'
        else {
            battlemessage = ' ' + 'Angrepet til' + ' ' + aname + ' ' + 'falt!'
            aattackstate -= 1;
        }
        updateaattack(who)
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}



function Shadowball(who, when) {
    battlemessage = uname + ' ' + 'brukte Shadow Ball!';
    if (random < 100 * uaccuracy) setTimeout(() => shadowball.play(), 1000) 
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 80 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 80 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                random = randomaccuracy()
                if (random2 < 80 && adefensestate < 12) {
                    adefensestate -= 1
                    updateadefense(who)
                    battlemessage = aname + ' ' + 'sitt forsvar falt!'
                    statfall.play()
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview()
}

function Crunch(who, when) {
    battlemessage = uname + ' ' + 'brukte Crunch!';
    if (random < 100 * uaccuracy) setTimeout(() => crunch.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 80 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 80 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                random = randomaccuracy()
                if (random2 < 70 && adefensestate < 12) {
                    adefensestate -= 1
                    updateadefense(who)
                    battlemessage = aname + ' ' + 'sitt forsvar falt!'
                    statfall.play()
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview()
}

function Irontail(who, when) {
    battlemessage = uname + ' ' + 'brukte Iron Tail!';
    if (random < 75 * uaccuracy) setTimeout(() => irontail.play(), 1000)
    setTimeout(function () {
        if (random < 75 * uaccuracy) {
            currenthp = ahp
            ahp -= 100 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 100 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                if (random2 < 50 && adefensestate < 12) {
                    adefensestate -= 1
                    updateadefense(who)
                    battlemessage = aname + ' ' + 'sitt forsvar falt!'
                    statfall.play()
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview()
}

function Takedown(who, when) {
    random = randomaccuracy()
    battlemessage = uname + ' ' + 'brukte Takedown!';
    if (random < 85 * uaccuracy) setTimeout(() => takedown.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 85 * uaccuracy) {
            currenthp = ahp
            ahp -= 90 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 90 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                uhp -= 120 * uattackstat / adefensestat * 0.33
                battlemessage = uname + ' ' + 'tok' + ' ' + 120 * uattackstat / adefensestat * 0.33 + ' ' + 'i recoil damage!'
                updateUhp(who, Uhp)
                updateview()
            }, 2000)
        }
        else battlemessage = uname + ' ' + 'bommet!';
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
}

function Dragonrush(who, when) {
    if (random < 75 * uaccuracy)
        battlemessage = uname + ' brukte Dragon Rush!';
        if (random < 75 * uaccuracy) setTimeout(() => dragonrush.play(), 1000)
    setTimeout(function () {
        if (random < 75 * uaccuracy) {
            currenthp = ahp
            ahp -= 100 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 10 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
        }
        else battlemessage = uname + ' ' + 'bommet!';
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Flareblitz(who, when) {
    battlemessage = uname + ' ' + 'brukte Flare Blitz!';
    if (random < 100 * uaccuracy) setTimeout(() => flareblitz.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 120 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 120 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                uhp -= 120 * uattackstat / adefensestat * 0.33
                battlemessage = uname + ' ' + 'tok' + ' ' + 120 * uattackstat / adefensestat * 0.33 + ' ' + 'i recoil damage!'
                updateuhp(who, uhp)
                updateview()
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Tackle(who, when) {
    battlemessage = uname + ' ' + 'brukte Tackle!';
    if (random < 100 * uaccuracy) setTimeout(() => tackle.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 50 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 50 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
        }
        else battlemessage = uname + ' bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Hyperbeam(who, when) {
    battlemessage = uname + ' ' + 'brukte Hyper Beam!';
    if (random < 90 * uaccuracy) setTimeout(() => hyperbeam.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 90 * uaccuracy) {
            currenthp = ahp
            ahp -= 200 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 200 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
        }
        else battlemessage = uname + ' bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Dragonclaw(who, when) {
    battlemessage = uname + ' ' + 'brukte Dragon Claw!';
    if (random < 100 * uaccuracy) setTimeout(() => dragonclaw.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 80 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 80 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
        }
        else battlemessage = uname + ' bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Bravebird(who, when) {
    battlemessage = uname + ' ' + 'brukte Brave Bird!';
    if (random < 100 * uaccuracy) setTimeout(() => bravebird.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 120 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 120 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                uhp -= 120 * uattackstat / adefensestat * 0.33
                battlemessage = uname + ' ' + 'tok' + ' ' + 120 * uattackstat / adefensestat * 0.33 + ' ' + 'i recoil damage!'
                updateUhp(who, uhp)
                updateview()
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 4000)
    }, 4000);
    updateview()
}

function Doubleedge(who, when) {
    battlemessage = uname + ' ' + 'brukte Double Edge!';
    if (random < 100 * uaccuracy) setTimeout(() => doubleedge.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            cuurenhpt = ahp
            ahp -= 120 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 120 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                uhp -= 120 * uattackstat / adefensestat * 0.33
                battlemessage = uname + ' ' + 'tok' + ' ' + 120 * uattackstat / adefensestat * 0.33 + ' ' + 'i recoil damage!'
                updateUhp(who, uhp)
                updateview()
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Megahorn(who, when) {
    battlemessage = uname + ' ' + 'brukte Megahorn!';
    if (random < 85 * uaccuracy) setTimeout(() => megahorn.play(), 1000)
    setTimeout(function () {
        if (random < 85 * uaccuracy) {
            currenthp = ahp
            ahp -= 120 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 120 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
            updateview()
        }
        else battlemessage = uname + ' ' + 'bommet!';
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview()
}

function Recover(who, when) {
    battlemessage = uname + ' ' + 'brukte Recover!'
    setTimeout(() => recover.play(), 1000)
    setTimeout(function () {
        currenthp = uhp
        uhp *= 1.5
        amounthealed = uhp - currenthp
        if (who == 'friend' && uhp > player.pokemon[0].maxhealth) {
            amounthealed = player.pokemon[0].maxhealth - currenthp
            uhp = player.pokemon[0].maxhealth
        }
        if (who == 'foe' && uhp > rival.pokemon[0].maxhealth) {
            amounthealed = rival.pokemon[0].maxhealth - currenthp
            uhp = rival.pokemon[0].maxhealth
        }
        battlemessage = "Hp'en til" + ' ' + uname + ' ' + 'økte med' + ' ' + amounthealed + ' ' + 'hp!'
        updateuhp(who, uhp)
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000)
    updateview()
}

function Stoneedge(who, when) {
    battlemessage = uname + ' ' + 'brukte Stone Edge!'
    updateview()
    if (random < 80 * uaccuracy) setTimeout(() => stoneedge.play(), 1000)
    if (random < 80 * uaccuracy) {
    setTimeout(function () {
            currenhp = ahp
            ahp -= 100 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 100 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
            updateview()
        }, 4000)
        updateview()

        setTimeout(function () {
            if (random >= 80) battlemessage = uname + ' ' + 'Bommet!'
            updateview()
        }, 4000)
    }
    setTimeout(function () {
        battlemanager(who, when)
    }, 6000)
}

function Willowisp(who, when) {
    battlemessage = uname + ' ' + 'brukte Will o wisp!'
    if (random < 85 * uaccuracy && !aburned) setTimeout(() => willowisp.play(), 1000)
    if (random < 85 * uaccuracy) {
        setTimeout(function () {
            if (!aburned && !astatus) {
                battlemessage = aname + ' ' + 'ble brent'
                ustatus = true
                aburned = true
                astatusimage = burnimage
                aattackstate -= 2
                updateaattack(who)
                if (who == 'friend') updateburn(who, uburned)
                if (who == 'foe') updateburn(who, uburned)
                updateburn(who, aburned)
            }
            else battlemessage = aname + ' ' + 'har allerede en statustilstand!'
            updateview()
        }, 4000)
    }
    if (random >= 85 * uaccuracy) {
        setTimeout(function () {
            battlemessage = uname + ' ' + 'bommet'
            updateview()
        }, 4000)
    }
    updateview()
    setTimeout(function () {
        battlemanager(who, when)
    }, 6000)
}

function Lunarblessing(who, when) {
    battlemessage = uname + ' ' + 'brukte Lunar Blessing'
    setTimeout(() => lunardance.play(), 1000)
    setTimeout(function () {
        if (uburned) {
            battlemessage = uname + ' ' + 'helbredet sin statustilstand'
            uburned = false
            uattackstate += 2
            updateburn(who, uburned)
            updateuattack(who)
        }
        if (upara) {
            upara = false
            battlemessage = uname + ' ' + 'helbredet sin statustilstand'
            updatepara(who, upara)
        }
        else {
            battlemessage = 'Men det feilet'
        }
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000)
    updateview()
}

let playerrollout = 30
let rivalrollout = 30

function Rollout(who, when) {

    if (who == 'friend') rrollout = playerrollout
    if (who == 'foe') rrollout = rivalrollout
    battlemessage = uname + ' ' + 'brukte Rollout!'
    if (random < 90 * uaccuracy) setTimeout(() => rollout.play(), 1000)
    updateview()
    if (random < 90 * uaccuracy) {
        setTimeout(function () {
            currenthp = ahp
            ahp -= rrollout * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 1000 * uattackstat / adefensestat + ' ' + 'Damage' 
            if (who == 'friend' && playerrollout < 480) playerrollout *= 2
            if (who == 'foe' && rivalrollout < 480) rivalrollout *= 2
            updateahp(who, ahp)
            updateview()
        }, 4000)
    }
    setTimeout(function () {
        if (random >= 90 * uaccuracy) {
            battlemessage = uname + ' ' + 'Bommet!'
            updateview()
        }
    }, 4000)
    setTimeout(function () {
        battlemanager(who, when)
    }, 6000)
}

function Explosion(who, when) {
    battlemessage = uname + ' ' + 'brukte Explosion!'
    if (random < 100 * uaccuracy) setTimeout(() => explosion.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 250 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 250 * uattackstat / adefensestat + ' ' + 'Damage' 
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                uhp = 0
                battlemessage = uname + ' ' + 'døde'
                updateuhp(who, uhp)
                updateview()
            }, 1000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000)
}


function Bulletseed(who, when) {
    battlemessage = uname + ' brukte Bullet Seed!';
    if (random < 100 * uaccuracy) setTimeout(() => bulletseed.play(), 1000)
    setTimeout(function () {
        random = randommultimovenum()
        currenthp = ahp
        ahp -= 25 * uattackstat / adefensestat * random
        if (ahp < 0){
            ahp = 0
            battlemessage = 'Det traff ' + random + ' ganger og gjorde ' + currenthp +  ' Damage!';
        } 
        else battlemessage = battlemessage = 'Det traff ' + random + ' ganger og gjorde ' + 25 * uattackstat / adefensestat * random +  ' Damage!'; 
        updateahp(who, ahp);
        updateview();
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview();
}

function Splash(who, when) {
    battlemessage = uname + ' brukte Splash!';
    setTimeout(() => splash.play(), 1000)
    setTimeout(function () {
        battlemessage = 'Men ingenting skjedde';
        updateview();
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
    updateview();
}

function Surf(who, when) {
    battlemessage = uname + ' brukte Surf!';
    if (random < 100 * uaccuracy) setTimeout(() => surf.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            ahp = currenthp
            ahp -= 100 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 500 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
    }, 4000);
    updateview();
}

function Judgement(who, when) {
    battlemessage = uname + ' brukte Judgement!';
    if (random < 100 * uaccuracy) setTimeout(() => judgment.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 100 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 100 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
    }, 4000);
    updateview();
}

function Earthquake(who, when) {
    battlemessage = uname + ' brukte Earthquake!';
    if (random < 100 * uaccuracy) setTimeout(() => earthquake.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 100 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 100 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
    }, 4000);
    updateview();
}

function Bulldoze(who, when) {
    battlemessage = uname + ' brukte Bulldoze!';
    if (random < 100 * uaccuracy) setTimeout(() => bulldoze.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 60 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 60 * uattackstat / adefensestat + ' ' + 'Damage'
            if (who == 'friend'){
                setTimeout(function (){
                    battlemessage = aname + ' sin speed falt!'
                    rival.pokemon[0].speed = rival.pokemon[0].speed * 0.75
                    statfall.play()
                    updateview()
                }, 1500)
            }
            if (who == 'foe'){
                setTimeout(function (){
                    battlemessage = aname + ' sin speed falt!'
                    player.pokemon[0].speed = player.pokemon[0].speed * 0.75
                    updateview()
                    statfall.play()
                }, 1500)
            }
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                battlemanager(who, when)
            }, 3000)
        }
        else {
            battlemessage = uname + ' bommet'
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
    }, 4000);
    updateview();
}

function Psychic(who, when) {
    battlemessage = uname + ' brukte Psychic!';
    if (random < 100 * uaccuracy) setTimeout(() => psychic.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 90 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 90 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                random = randomaccuracy()
                if (random < 70 * uaccuracy && adefensestate < 12) {
                    adefensestate -= 1
                    updateadefense(who)
                    battlemessage = aname + ' ' + 'sitt forsvar falt!'
                    statfall.play()
                    updateview()
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet'
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview();
}

function Closecombat(who, when) {
    battlemessage = uname + ' brukte Close Combat!';
    if (random < 100 * uaccuracy) setTimeout(() => closecombat.play(), 1000)
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 120 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 120 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        updateview();
        setTimeout(function () {
            if (random < 100 * uaccuracy) {
                if (uattackstate > 0 && udefensestate > 0) {
                    battlemessage = uname + ' ' + 'Sitt angrep og forsvar falt';
                    uattackstate--
                    udefensestate--
                    statfall.play()
                    updateuattack(who, uattackstate)
                    updateudefense(who, udefensestate)
                }
                else if (uattackstate > 0) {
                    battlemessage = uname + ' ' + 'Sitt angrep falt';
                    uattackstate--
                    statfall.play()
                    updateuattack(who, uattackstate)
                }
                else if (udefensestate > 0) {
                    udefensestate--
                    battlemessage = uname + ' ' + 'Sitt forsvar falt';
                    statfall.play()
                    updateuattack(who, uattackstate)
                }
                else if (uattackstate <= 0 && udefensestate <= 0) battlemessage = uname + ' ' + 'Sitt angrep og forsvar kan ikke gå lavere';
            }
            updateview()
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }, 2000)
    }, 4000);
    updateview();
}

function Dracometeor(who, when) {
    battlemessage = uname + ' brukte Draco Meteor!';
    if (random < 90 * uaccuracy) setTimeout(() => dracometeor.play(), 1000)
    setTimeout(function () {
        if (random < 90 * uaccuracy) {
            currenthp = ahp
            ahp -= 130 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 130 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp);
            updateview();
            setTimeout(function () {
                if (uattackstate > 0) {
                    uattackstate--
                    battlemessage = uname + ' sitt angrep falt!';
                    statfall.play()
                    updateuattack(who, uattackstate)
                }
                else battlemessage = uname + ' ' + 'Sitt angrep kan ikke gå lavere';
                updateview()
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 3000)
    }, 4000);
    updateview();
}

function Protect(who, when) {
    battlemessage = uname + ' ' + 'brukte Protect!'
    setTimeout(() => protect.play(), 1000)
    updateview()
    setTimeout(function () {
        battlemanager(who, when)
    }, 4000)
}

function Gigaimpact(who, when) {
    battlemessage = uname + ' ' + 'brukte Giga Impact!'
    if (random < 90 * uaccuracy) setTimeout(() => gigaimpact.play(), 1000)
    updateview()
    if (random < 90 * uaccuracy) gigaimpact.play()
    setTimeout(function () {
        if (random < 90 * uaccuracy) {
            currenthp = ahp
            ahp -= 150 * uattackstat / adefensestat
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 150 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            if (who == 'friend') playergigaimpactcd = 1
            if (who == 'foe') rivalgigaimpactcd = 1
        }
        if (random >= 90 * uaccuracy) battlemessage = 'Det bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000)
}


function Thunderwave(who, when) {
    battlemessage = uname + ' ' + 'brukte Thunder Wave!';
    if (random < 85 * uaccuracy) setTimeout(() => thunderwave.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 85 * uaccuracy) {
            if (!apara && !astatus) {
                battlemessage = aname + ' ble paralysert!'
                astatus = true
                updatepara(who, astatus)
            }
            else battlemessage = aname + ' har allerede en statustilstand!'
        }
        else battlemessage = uname + ' bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function updatepara(who, newpara) {
    if (who == 'friend' && newpara == true) {
        rivalpara = newpara
        rivalstatus = newpara
        rivalstatusimage = paraimage
        rivalaccuracy = 0.75
    }
    if (who == 'friend' && newpara == false) {
        playerstatus = newpara
        playerpara = newpara
        playerstatusimage = ''
        playeraccuracy = 1
    }

    if (who == 'foe' && newpara == true) {
        playerstatus = newpara
        playerpara = newpara
        playerstatusimage = paraimage
        playeraccuracy = 0.75
    }
    if (who == 'foe' && newpara == false) {
        rivalstatus = newpara
        rivalpara = newpara
        rivalstatusimage = ''
        rivalaccuracy = 1
    }
}

function Bodyslam(who, when) {
    battlemessage = uname + ' ' + 'brukte Body Slam!';
    if (random < 100 * uaccuracy) setTimeout(() => bodyslam.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 85 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 85 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            if (!apara && !astatus && random2 < 30) {
                battlemessage = aname + ' ble paralysert!'
                astatus = true
                updatepara(who, astatus)
            }
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Thunderbolt(who, when) {
    battlemessage = uname + ' ' + 'brukte Thunderbolt!';
    if (random < 100 * uaccuracy) setTimeout(() => thunderbolt.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 90 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 90 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            if (!apara && !astatus && random2 < 15) {
                battlemessage = aname + ' ble paralysert!'
                astatus = true
                updatepara(who, astatus)
            }
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Poisonjab(who, when) {
    battlemessage = uname + ' ' + 'brukte Poison Jab!';
    if (random < 100 * uaccuracy) setTimeout(() => poisonjab.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 90 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 90 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
        }
        else battlemessage = uname + ' bommet!'
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Machpunch(who, when) {
    battlemessage = uname + ' ' + 'brukte Mach Punch!';
    if (random < 100 * uaccuracy) setTimeout(() => machpunch.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 40 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 40 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
        }
        else {
            battlemessage = uname = ' bommet!'
            updateview()
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Zenheadbutt(who, when) {
    battlemessage = uname + ' ' + 'brukte Zen Headbutt!';
    if (random < 90 * uaccuracy) setTimeout(() => zenheadbutt.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 90 * uaccuracy) {
            currenthp = ahp
            ahp -= 80 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 80 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            setTimeout(function () {
                if (random2 > 80 && when < 3) {
                    battlemessage = aname + ' flinchet!'
                    updateview()
                    setTimeout(function () {
                        battlemanager(who, '3')
                    }, 2001)
                }
            }, 2001)
        }
        else {
            battlemessage = uname + ' bommet!'
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        updateview()
        setTimeout(function () {
            if (random < 90 * uaccuracy && random2 <= 80) battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Bite(who, when) {
    battlemessage = uname + ' ' + 'brukte Bite';
    if (random < 100 * uaccuracy) setTimeout(() => bite.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 60 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 60 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            setTimeout(function () {
                if (random2 > 80 && when < 3) {
                    battlemessage = aname + ' flinchet!'
                    updateview()
                    setTimeout(function () {
                        battlemanager(who, '3')
                    }, 2001)
                }
                else {
                    setTimeout(function () {
                        battlemanager(who, when)
                    }, 2001)
                }
            }, 2001)
        }
        else {
            battlemessage = uname + ' bommet!'
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        updateview()
        setTimeout(function () {
            if (random < 100 * uaccuracy && random2 <= 80) battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Firefang(who, when) {
    battlemessage = uname + ' ' + 'brukte Fire Fang';
    if (random < 95 * uaccuracy) setTimeout(() => firefang.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 95 * uaccuracy) {
            currenthp = ahp
            ahp -= 65 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 65 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            setTimeout(function () {
                if (random2 > 80 && when < 3) {
                    battlemessage = aname + ' flinchet!'
                    updateview()
                    setTimeout(function () {
                        battlemanager(who, '3')
                    }, 2001)
                }
                else {
                    battlemessage = ''
                    updateview()
                    setTimeout(function () {
                        battlemanager(who, when)
                    }, 2001)
                }
            }, 2001)
        }
        else {
            battlemessage = uname + ' bommet!'
            setTimeout(function () {
                battlemanager(who, when)
            }, 2000)
        }
        updateview()
        setTimeout(function () {
            if (random < 95 * uaccuracy && random2 <= 80) battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Trickroom(who, when) {
    battlemessage = uname + ' brukte Trick Room!';
    setTimeout(() => trickroom.play(), 1000)
    updateview()
    setTimeout(function () {
        battlemessage = uname + ' vridde dimensjonene!'
        player.pokemon[0].speed = rival.pokemon[0].speed
        rival.pokemon[0].speed = player.pokemon[0].speed
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Dragontail(who, when) {
    battlemessage = uname + ' ' + 'brukte Dragon Tail!';
    if (random < 90 * uaccuracy) setTimeout(() => dragontail.play(), 2000)
    updateview()
    setTimeout(function () {
        if (random < 90 * uaccuracy) {
            currenthp = ahp
            ahp -= 60 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 60 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                if (player.pokemon.length > 1){
                    const item = player.pokemon.splice(0, 1)[0];
                    let randomIndex = Math.floor(Math.random() * player.pokemon.length);
                    let randomPokemon = player.pokemon.splice(randomIndex, 1)[0];
                    player.pokemon.unshift(randomPokemon);
                    player.pokemon.push(item);
                    battlemessage = item.name + ' ble byttet ut med ' + player.pokemon[0].name + '!';
                    updateview()
                    setTimeout(function () {
                        battlemanager(who, when)
                    }, 2000)
                }
            }, 2000)
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
            setTimeout(() => battlemanager(who, when), 2000);
        }
    }, 4000);
}

function Thief(who, when) {
    battlemessage = uname + ' ' + 'brukte Thief!';
    if (random < 100 * uaccuracy) setTimeout(() => thief.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 60 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 60 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                if (potions > 0 && who == 'foe') {
                    potions--
                    battlemessage = uname + ' stjal en potion!'
                    updateview()
                }
            }, 1000)
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Knockoff(who, when) {
    battlemessage = uname + ' ' + 'brukte Knock Off!';
    if (random < 100 * uaccuracy) setTimeout(() => knockoff.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {
            currenthp = ahp
            ahp -= 65 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 65 * uattackstat / adefensestat + ' ' + 'Damage'
            updateahp(who, ahp)
            updateview()
            setTimeout(function () {
                if (potions > 0 && who == 'foe') {
                    potions--
                    battlemessage = uname + ' stjal en potion!'
                    updateview()
                }
            }, 1000)
        }
        else {
            battlemessage = uname + ' bommet!'
        }
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}

function Poisonjab(who, when) {
    battlemessage = uname + ' ' + 'brukte Poisonjab!';
    if (random < 100 * uaccuracy) setTimeout(() => poisonjab.play(), 1000)
    updateview()
    setTimeout(function () {
        if (random < 100 * uaccuracy) {

            currenthp = ahp
            ahp -= 80 * uattackstat / adefensestat;
            if (ahp < 0){
                ahp = 0
                battlemessage = 'Det gjorde ' + currenthp + ' Damage!'
            } 
            else battlemessage = 'Det gjorde' + ' ' + 80 * uattackstat / adefensestat + ' ' + 'Damage'
        }
        else {
            battlemessage = uname + ' bommet!'
            updateview()
        }
        updateahp(who, ahp)
        updateview()
        setTimeout(function () {
            battlemanager(who, when)
        }, 2000)
    }, 4000);
}


function updateuhp(who, newhealth) {
    if (who == 'friend') player.pokemon[0].health = newhealth;
    else rival.pokemon[0].health = newhealth;
}

function updateahp(who, newhealth) {
    if (who == 'friend') rival.pokemon[0].health = newhealth;
    else player.pokemon[0].health = newhealth;
}
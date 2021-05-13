window.addEventListener("load", loadScreen);

// Screen variables ----------------------------------------->
let game = document.querySelector("#game");
let start = document.querySelector("#start");
let gameover = document.querySelector("#gameover");
let levelcomplete = document.querySelector("#levelcomplete");
let gameinfo = document.querySelector("#game_info");
let story = document.querySelector("#story");
let instructions = document.querySelector("#instructions");
let blood = document.querySelector("#blood");
let settings = document.querySelector("#settingsmenu");
let musicmute = document.querySelector("#music_mute");
let soundmute = document.querySelector("#soundfx_mute");
let restart = document.querySelector("#restart");
let home = document.querySelector("#home");

let goinghome = false;


// Music variables ------------------------------------------->
let intromusic = document.querySelector("#intro_music");
let gamemusic = document.querySelector("#game_music");
let loosemusic = document.querySelector("#loose_music");
let winmusic = document.querySelector("#win_music");

let musicmuted = false;

// Sound FX  variables---------------------------------------->
let horde = document.querySelector("#horde");
let click = document.querySelector("#click");
let shot = document.querySelector("#shot");
let splat1 = document.querySelector("#splat1");
let splat2 = document.querySelector("#splat2");
let splat3 = document.querySelector("#splat3");
let growl = document.querySelector("#growl");
let kching = document.querySelector("#kching");
let slash = document.querySelector("#slash");
let cry1 = document.querySelector("#cry1");
let cry2 = document.querySelector("#cry2");
let cry3 = document.querySelector("#cry3");
let wounded1 = document.querySelector("#wounded1");
let wounded2 = document.querySelector("#wounded2");
let wounded3 = document.querySelector("#wounded3");
let dying = document.querySelector("#dying");
let applause = document.querySelector("#applause");
// Ghost sounds
let wind = document.querySelector("#wind");
let thankyou = document.querySelector("#thankyou");
let aaah = document.querySelector("#aaah");
let dontshoot = document.querySelector("#dontshoot");
let nooo = document.querySelector("#nooo");

let soundmuted = false;

// Game variables ------------------------------------->
let kills = 0;
let lives = 4;
let gameOn = true;

let zombie1 = document.querySelector("#zombie1");
let zombie2 = document.querySelector("#zombie2");
let zombie3 = document.querySelector("#zombie3");
let zombie4 = document.querySelector("#zombie4");
let zombie5 = document.querySelector("#zombie5");
let zombie6 = document.querySelector("#zombie6");
let zombie7 = document.querySelector("#zombie7");
let zombie8 = document.querySelector("#zombie8");
let zombie9 = document.querySelector("#zombie9");
let zombie10 = document.querySelector("#zombie10");
let zombie11 = document.querySelector("#zombie11");
let zombie12 = document.querySelector("#zombie12");
let zombie13 = document.querySelector("#zombie13");

let ghost = document.querySelector("#ghost");
let cross = document.querySelector("#cross");

// Load screen to start game --------------------------->
function loadScreen() {
    console.log("Showing loadscreen");

    document.querySelector("#load_button").classList.add("button_move");
    document.querySelector("#load_button").addEventListener("click", loadStartscreen);
}

function loadStartscreen() {
    click.play();
    document.querySelector("#load_button").removeEventListener("click", loadStartscreen);

    document.querySelector("#load_button").classList.remove("button_move");
    document.querySelector("#loadscreen").classList.add("screen_gone");
    document.querySelector("#loadscreen").addEventListener("animationend", showStart);

    /*if (!soundmuted) {
        soundmute.classList.add("unmuted");
    }
    if (!musicmuted) {
        musicmute.classList.add("unmuted");
    }*/
}

function showStart() {
    console.log("start screen loaded");
    // Setting mute check boxes for when settings are called
    if (!soundmuted) {
        soundmute.classList.add("unmuted");
    }
    if (!musicmuted) {
        musicmute.classList.add("unmuted");
    }

    if (!musicmuted) {
        intromusic.currentTime = 0;
        intromusic.volume = 0.5;
        intromusic.play();
    }

    start.classList.remove("hide");

    document.querySelector("#load_button").classList.remove("button_move");
    document.querySelector("#load_button").classList.add("hide");
    document.querySelector("#loadscreen").classList.add("hide");
    document.querySelector("#loadscreen").classList.remove("screen_gone");
    document.querySelector("#loadscreen").removeEventListener("animationend", showStart);

    document.querySelector("#letsgo_button").classList.add("hide");
    document.querySelector("#teachme_button").classList.add("hide");
    document.querySelector("#tryagain_button").classList.add("hide");
    document.querySelector("#playagain_button").classList.add("hide");
    document.querySelector("#yougoteaten").classList.remove("hide");

    blood.classList.add("hide");
    story.classList.add("hide");
    gameover.classList.add("hide");
    levelcomplete.classList.add("hide");
    instructions.classList.add("hide");
    gameinfo.classList.add("hide");
    settings.classList.add("hide");

    document.querySelector("#next_button").classList.add("button_move");
    document.querySelector("#next_button").addEventListener("click", clickNext);
}

function clickNext() {
    console.log("Play button clicked");

    if (!soundmuted) {
        click.play();
    }

    document.querySelector("#next_button").removeEventListener("click", clickNext);
    document.querySelector("#next_button").classList.remove("button_move");

    start.classList.add("screen_gone");
    start.addEventListener("animationend", theStory);
}

function theStory() {
    console.log("Load story tablet");

    start.classList.add("hide");
    start.classList.remove("screen_gone");
    start.removeEventListener("animationend", theStory);

    gameinfo.classList.remove("hide");
    story.classList.remove("hide");
    document.querySelector("#teachme_button").classList.remove("hide");
    story.classList.add("dropdown_animation");
    document.querySelector("#teachme_button").classList.add("dropdown_animation");

    story.addEventListener("animationend", thestoryStill);
}

function thestoryStill() {
    console.log("added move to teachme button");
    document.querySelector("#teachme_button").classList.remove("dropdown_animation");
    story.classList.remove("dropdown_animation");
    story.removeEventListener("animationend", thestoryStill);

    story.offsetHeight;

    document.querySelector("#teachme_button").classList.add("button_move");
    document.querySelector("#teachme_button").addEventListener("click", clickTeachme);
}

function clickTeachme() {
    console.log("teachMe clicked");

    if (!soundmuted) {
        click.play();
    }

    document.querySelector("#teachme_button").removeEventListener("click", clickTeachme);
    document.querySelector("#teachme_button").classList.remove("button_move");

    story.classList.add("screen_gone");
    document.querySelector("#teachme_button").classList.add("screen_gone");
    story.addEventListener("animationend", teachMe);
}

function teachMe() {
    console.log("teachMe");
    story.removeEventListener("animationend", teachMe);
    story.classList.add("hide");
    document.querySelector("#teachme_button").classList.add("hide");
    story.classList.remove("screen_gone");
    document.querySelector("#teachme_button").classList.remove("screen_gone");

    instructions.classList.remove("hide");
    instructions.classList.add("appear");
    document.querySelector("#letsgo_button").classList.remove("hide");
    document.querySelector("#letsgo_button").classList.add("dropdown_animation");
    instructions.addEventListener("animationend", teachmeStill);
}

function teachmeStill() {
    console.log("teachme still - adding button_move");
    instructions.classList.remove("appear");
    document.querySelector("#letsgo_button").classList.remove("dropdown_animation");
    instructions.removeEventListener("animationend", teachmeStill);

    instructions.offsetHeight;

    document.querySelector("#letsgo_button").classList.add("button_move");
    document.querySelector("#letsgo_button").addEventListener("click", clickStart);

}

function clickStart() {
    console.log("clickStart");

    if (!soundmuted) {
        click.play();
    }

    intromusic.pause();

    document.querySelector("#letsgo_button").classList.remove("button_move");
    document.querySelector("#letsgo_button").removeEventListener("click", clickStart);


    instructions.classList.add("disappear");
    document.querySelector("#letsgo_button").classList.add("screen_gone");
    instructions.addEventListener("animationend", startGame);

}

// Starting the game ----------------------------------->

function startGame() {
    console.log("start the game");

    gameinfo.classList.add("hide");
    instructions.classList.add("hide");
    instructions.removeEventListener("animationend", startGame);
    instructions.classList.remove("disappear");
    document.querySelector("#letsgo_button").classList.add("hide");
    document.querySelector("#letsgo_button").classList.remove("screen_gone");
    gameover.classList.add("hide");
    gameover.classList.remove("screen_gone");
    levelcomplete.classList.add("hide");
    levelcomplete.classList.remove("screen_gone");
    settings.classList.add("hide");
    document.querySelector("#back").classList.add("hide");

    document.querySelector("#game_elements").addEventListener("click", shotMiss);

    if (!musicmuted) {
        gamemusic.currentTime = 0;
        gamemusic.volume = 0.2;
        gamemusic.play();
    }

    if (!soundmuted) {
        horde.currentTime = 0;
        horde.volume = 0.7;
        horde.play();
    }

    startZombies();

    startTimer();

    ghostTimer();

    document.querySelector("#pause").addEventListener("click", clickPause);
    document.querySelector("#settings").addEventListener("click", clickSettings);
}

// The friendly ghost ---------------------------------------->

function ghostTimer() {
    console.log("Starting ghost timer");

    let ghostarrival = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    setTimeout(startGhost, ghostarrival * 1000);
}

function startGhost() {
    console.log("Starting the friendly ghost");

    let pathrange = Math.floor(Math.random() * 13) + 1;

    ghost.classList.add("path" + pathrange);

    if (pathrange >= 10) {
        // random speed and delay for back zombies
        let speedrange = Math.floor(Math.random() * (15 - 11 + 1)) + 11;
        ghost.classList.add("speed" + speedrange);
    } else if (pathrange >= 5) {
        // random speed and delay for middle zombies
        let speedrange = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
        ghost.classList.add("speed" + speedrange);
    } else if (pathrange >= 1) {
        // random speed and delay for front zombies
        let speedrange = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        ghost.classList.add("speed" + speedrange);
    }

    let random = Math.random();

    if (random > 0.6) {
        if (!soundmuted) {
            dontshoot.currentTime = 0;
            dontshoot.play();
        }
    }

    ghost.querySelector(".sprite").classList.add("ghost_body");

    ghost.addEventListener("animationiteration", ghostHug);
    ghost.addEventListener("click", shootGhost);
}

function ghostHug() {

    ghost.removeEventListener("animationiteration", ghostHug);

    if (!soundmuted) {
        dontshoot.pause();
        wind.currentTime = 0;
        wind.play();
    }

    if (lives == 2) {
        lives++;
        console.log("Lives at " + lives);
        document.querySelector("#heart" + (lives - 1)).classList.remove("dead_heart");

        if (!soundmuted) {
            thankyou.currentTime = 0;
            thankyou.play();
            aaah.currentTime = 0;
            aaah.play();
        }
    }

    ghost.classList.add("pause");
    ghost.querySelector(".sprite").classList.add("nosplat");
    ghost.addEventListener("animationend", ghostRestart);
}

function shootGhost() {
    if (gameOn == true) {
        console.log("You shot the ghost!!!");

        if (!soundmuted) {
            dontshoot.pause();
            shot.currentTime = 0;
            shot.play();
            splat3.currentTime = 0;
            splat3.play();
            nooo.currentTime = 0;
            nooo.play();
        }

        lives--;

        console.log("Lives at " + lives);

        if (lives > 1) {
            document.querySelector("#heart" + lives).classList.add("dead_heart");

            if (!soundmuted) {
                wounded1.play();
            }
            ghost.removeEventListener("click", shootGhost);

            ghost.classList.add("pause");
            ghost.querySelector(".sprite").classList.add("ghost_splat");

            ghost.addEventListener("animationend", ghostRestart);
        } else if (lives < 1) {
            ghost.removeEventListener("click", shootGhost);

            ghost.classList.add("pause");
            ghost.querySelector(".sprite").classList.add("ghost_splat");

            ghost.addEventListener("animationend", ghostRestart);
        } else if (lives == 1) {
            pauseGame();
            document.querySelector("#heart" + lives).classList.add("dead_heart");
            if (!soundmuted) {
                dying.play();
            }
            bloodRunning();
        }
    }
}

function ghostRestart() {
    if (gameOn == true) {
        console.log("Ghost goes back to sleep");

        ghost.removeEventListener("animationend", ghostRestart);

        ghost.classList = "";

        ghost.querySelector(".sprite").classList.remove("ghost_splat");
        ghost.querySelector(".sprite").classList.remove("nosplat");

        ghost.querySelector(".sprite").classList.remove("ghost_body");

        ghost.offsetHeight;

        ghostTimer();
    }
}


// Zombie start traits, click, attack and restart functions --->

function shotMiss() {
    if (gameOn == true) {
        shot.currentTime = 0;
        if (!soundmuted) {
            shot.play();
        }
    }
}

function startZombies() {
    console.log("start the zombie walk!");

    // Assign paths

    zombie1.classList.add("path1", "speed5");
    zombie2.classList.add("path2", "speed6");
    zombie3.classList.add("path3", "speed5");
    zombie4.classList.add("path4", "speed4");

    zombie5.classList.add("path5", "speed8");
    zombie6.classList.add("path6", "speed10");
    zombie7.classList.add("path7", "speed8");
    zombie8.classList.add("path8", "speed9");
    zombie9.classList.add("path9", "speed10");

    zombie10.classList.add("path10", "speed11");
    zombie11.classList.add("path11", "speed15");
    zombie12.classList.add("path12", "speed12");
    zombie13.classList.add("path13", "speed13");

    zombie1.addEventListener("animationstart", startTraits);
    zombie2.addEventListener("animationstart", startTraits);
    zombie3.addEventListener("animationstart", startTraits);
    zombie4.addEventListener("animationstart", startTraits);
    zombie5.addEventListener("animationstart", startTraits);
    zombie6.addEventListener("animationstart", startTraits);
    zombie7.addEventListener("animationstart", startTraits);
    zombie8.addEventListener("animationstart", startTraits);
    zombie9.addEventListener("animationstart", startTraits);
    zombie10.addEventListener("animationstart", startTraits);
    zombie11.addEventListener("animationstart", startTraits);
    zombie12.addEventListener("animationstart", startTraits);
    zombie13.addEventListener("animationstart", startTraits);
}

function startTraits() {
    console.log("Zombies get startTraits");

    let zombie = this;

    let colorrange = Math.floor(Math.random() * 3) + 1;
    let delayrange = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    zombie.removeEventListener("animationstart", startTraits);

    zombie.querySelector(".sprite").classList.remove("color1");
    zombie.querySelector(".sprite").classList.remove("color2");
    zombie.querySelector(".sprite").classList.remove("color3");

    zombie.querySelector(".sprite").classList.add("color" + colorrange);
    zombie.classList.add("delay" + delayrange);

    zombie.addEventListener("animationiteration", zombieAttack);
    zombie.addEventListener("click", shootZombie);
}

function shootZombie() {
    if (gameOn == true) {
        let zombie = this;

        if (!soundmuted) {
            shot.currentTime = 0;
            shot.play();
        }

        zombie.removeEventListener("click", shootZombie);

        kills++;

        console.log("You shot " + kills + " zombies!");

        document.querySelector("#number_of_kills").textContent = kills;

        splat1.currentTime = 0;
        splat2.currentTime = 0;
        splat3.currentTime = 0;

        let randomsplat = Math.random();

        if (!soundmuted) {
            if (randomsplat >= 0.8) {
                splat3.play();
            } else if (randomsplat >= 0.4) {
                splat2.play();
            } else if (randomsplat >= 0) {
                splat1.play();
            }
        }

        let randommoan = Math.random();

        if (!soundmuted) {
            if (randommoan >= 0.8) {
                cry1.play();
            } else if (randommoan >= 0.6) {
                cry2.play();
            }
        }

        zombie.classList.add("pause");
        zombie.querySelector(".sprite").classList.add("splat");

        zombie.addEventListener("animationend", zombieRestart);
    }
}

function zombieAttack() {

    let zombie = this;

    zombie.removeEventListener("animationiteration", zombieAttack);

    lives--;

    console.log("Lives at " + lives);

    if (!soundmuted) {
        growl.currentTime = 0;
        growl.play();
        slash.currentTime = 0;
        slash.play();
    }

    document.querySelector("#wounded").classList.add("wound");
    document.querySelector("#wounded").addEventListener("animationend", removeWound);

    if (lives > 1) {
        document.querySelector("#heart" + lives).classList.add("dead_heart");

        if (!soundmuted) {
            wounded1.play();
        }
        zombie.classList.add("pause");
        zombie.querySelector(".sprite").classList.add("nosplat");

        zombie.addEventListener("animationend", zombieRestart);
    } else if (lives < 1) {
        zombie.classList.add("pause");
        zombie.querySelector(".sprite").classList.add("nosplat");

        zombie.addEventListener("animationend", zombieRestart);
    } else if (lives == 1) {
        pauseGame();
        document.querySelector("#heart" + lives).classList.add("dead_heart");
        if (!soundmuted) {
            dontshoot.pause();
            dying.play();
        }
        bloodRunning();
    }
}

function removeWound() {
    document.querySelector("#wounded").classList.remove("wound");
}

function zombieRestart() {
    if (gameOn == true) {
        console.log("Raising zombie again");

        let zombie = this;

        zombie.removeEventListener("animationend", zombieRestart);

        zombie.classList.remove("pause");

        zombie.classList.remove("path1");
        zombie.classList.remove("path2");
        zombie.classList.remove("path3");
        zombie.classList.remove("path4");
        zombie.classList.remove("path5");
        zombie.classList.remove("path6");
        zombie.classList.remove("path7");
        zombie.classList.remove("path8");
        zombie.classList.remove("path9");
        zombie.classList.remove("path10");
        zombie.classList.remove("path11");
        zombie.classList.remove("path12");
        zombie.classList.remove("path13");

        zombie.querySelector(".sprite").classList.remove("splat");
        zombie.querySelector(".sprite").classList.remove("nosplat");

        zombie.querySelector(".sprite").classList.remove("color1");
        zombie.querySelector(".sprite").classList.remove("color2");
        zombie.querySelector(".sprite").classList.remove("color3");

        zombie.classList.remove("speed1");
        zombie.classList.remove("speed2");
        zombie.classList.remove("speed3");
        zombie.classList.remove("speed4");
        zombie.classList.remove("speed5");
        zombie.classList.remove("speed6");
        zombie.classList.remove("speed7");
        zombie.classList.remove("speed8");
        zombie.classList.remove("speed9");
        zombie.classList.remove("speed10");
        zombie.classList.remove("speed11");
        zombie.classList.remove("speed12");
        zombie.classList.remove("speed13");
        zombie.classList.remove("speed14");
        zombie.classList.remove("speed15");

        zombie.classList.remove("delay1");
        zombie.classList.remove("delay2");
        zombie.classList.remove("delay3");
        zombie.classList.remove("delay4");
        zombie.classList.remove("delay5");
        zombie.classList.remove("delay6");
        zombie.classList.remove("delay7");
        zombie.classList.remove("delay8");
        zombie.classList.remove("delay9");
        zombie.classList.remove("delay10");
        zombie.classList.remove("delay11");
        zombie.classList.remove("delay12");

        zombie.offsetHeight;

        let number13 = Math.floor(Math.random() * 13) + 1;
        let colorrange = Math.floor(Math.random() * 3) + 1;

        zombie.classList.add("path" + number13);

        zombie.querySelector(".sprite").classList.add("color" + colorrange);

        if (number13 >= 10) {
            // random speed and delay for back zombies
            let speedrange = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
            let delayrange = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
            zombie.classList.add("speed" + speedrange, "delay" + delayrange);
        } else if (number13 >= 5) {
            // random speed and delay for middle zombies
            let speedrange = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
            let delayrange = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
            zombie.classList.add("speed" + speedrange, "delay" + delayrange);
        } else if (number13 >= 1) {
            // random speed and delay for front zombies
            let speedrange = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
            let delayrange = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
            zombie.classList.add("speed" + speedrange, "delay" + delayrange);
        }

        zombie.addEventListener("click", shootZombie);
        zombie.addEventListener("animationiteration", zombieAttack);
    }
}

// Common functions -------------------------------->

function startTimer() {
    console.log("startTimer");

    document.querySelector("#liquid").classList.add("time_animation");
    document.querySelector("#liquid").addEventListener("animationend", levelComplete);
}

function clickPause() {
    console.log("Game is paused");

    click.play();

    if (gameOn == true) {
        pauseGame();
    } else if (gameOn == false) {
        unpauseGame();
    }
}

function pauseGame() {
    console.log("pauseGame");
    gameOn = false;
    document.querySelector("#pause .pause_button").classList.add("play_button");

    if (!soundmuted) {
        horde.pause();
    }
    if (!musicmuted) {
        gamemusic.pause();
    }

    document.querySelector("#liquid").classList.add("pause");
    zombie1.classList.add("pause");
    zombie2.classList.add("pause");
    zombie3.classList.add("pause");
    zombie4.classList.add("pause");
    zombie5.classList.add("pause");
    zombie6.classList.add("pause");
    zombie7.classList.add("pause");
    zombie8.classList.add("pause");
    zombie9.classList.add("pause");
    zombie10.classList.add("pause");
    zombie11.classList.add("pause");
    zombie12.classList.add("pause");
    zombie13.classList.add("pause");

    ghost.classList.add("pause");
}

function unpauseGame() {
    console.log("unpauseGame");
    gameOn = true;
    document.querySelector("#pause .pause_button").classList.remove("play_button");

    if (!musicmuted) {
        gamemusic.play();
    }
    if (!soundmuted) {
        horde.play();
    }

    document.querySelector("#liquid").classList.remove("pause");
    zombie1.classList.remove("pause");
    zombie2.classList.remove("pause");
    zombie3.classList.remove("pause");
    zombie4.classList.remove("pause");
    zombie5.classList.remove("pause");
    zombie6.classList.remove("pause");
    zombie7.classList.remove("pause");
    zombie8.classList.remove("pause");
    zombie9.classList.remove("pause");
    zombie10.classList.remove("pause");
    zombie11.classList.remove("pause");
    zombie12.classList.remove("pause");
    zombie13.classList.remove("pause");
    ghost.classList.remove("pause");

    document.querySelector("#pause").addEventListener("click", clickPause);
}

// Setting functions -------------------------------->

function clickSettings() {
    console.log("Settings clicked");

    if (!soundmuted) {
        click.play();
    }

    pauseGame();
    dontshoot.pause();

    document.querySelector("#settings").removeEventListener("click", clickSettings);

    settings.classList.add("dropdown_animation");
    settings.classList.remove("hide");
    document.querySelector("#back").classList.add("dropdown_animation");
    document.querySelector("#back").classList.remove("hide");

    settings.addEventListener("animationend", settingsMenu);
}

function settingsMenu() {
    console.log("Adding movement to back button");

    settings.removeEventListener("animationend", settingsMenu);

    settings.classList.remove("dropdown_animation");
    document.querySelector("#back").classList.remove("dropdown_animation");

    goinghome = false;

    document.querySelector("#back").classList.add("button_move");
    document.querySelector("#back").addEventListener("click", closeSettings);
    soundmute.addEventListener("click", muteSound);
    musicmute.addEventListener("click", muteMusic);
    restart.addEventListener("click", restartGame);
    home.addEventListener("click", goHome);
}

function closeSettings() {
    console.log("Closing settings");

    if (!soundmuted) {
        click.play();
    }

    document.querySelector("#back").classList.remove("button_move");
    document.querySelector("#back").removeEventListener("click", closeSettings);

    settings.classList.add("screen_gone");
    document.querySelector("#back").classList.add("screen_gone");

    unpauseGame();

    settings.addEventListener("animationend", resetSettings);
}

function resetSettings() {
    settings.removeEventListener("animationend", resetSettings);

    settings.classList.remove("screen_gone");
    settings.classList.add("hide");
    document.querySelector("#back").classList.remove("screen_gone");
    document.querySelector("#back").classList.add("hide");

    document.querySelector("#settings").addEventListener("click", clickSettings);
}

function muteSound() {
    if (!soundmuted) {
        console.log("sound is muted");
        click.play();
        soundmute.classList.remove("unmuted");
        soundmute.classList.add("muted");
        soundmuted = true;
        horde.pause();
    } else {
        console.log("sound is unmuted");
        click.play();
        soundmute.classList.remove("muted");
        soundmute.classList.add("unmuted");
        soundmuted = false;
        horde.play();
    }
}

function muteMusic() {
    if (!musicmuted) {
        console.log("music is muted");
        click.play();
        musicmute.classList.remove("unmuted");
        musicmute.classList.add("muted");
        musicmuted = true;
        gamemusic.pause();
    } else {
        console.log("music is unmuted");
        click.play();
        musicmute.classList.remove("muted");
        musicmute.classList.add("unmuted");
        musicmuted = false;
        gamemusic.play();
    }
}

function restartGame() {
    console.log("Restarting the game");

    restart.removeEventListener("click", restartGame);

    if (!soundmuted) {
        click.play();
    }

    document.querySelector("#back").classList.remove("button_move");
    document.querySelector("#back").removeEventListener("click", closeSettings);

    settings.classList.add("screen_gone");
    document.querySelector("#back").classList.add("screen_gone");

    settings.addEventListener("animationend", resetGame);
}

function goHome() {
    console.log("Restarting the game");

    home.removeEventListener("click", goHome);

    if (!soundmuted) {
        click.play();
    }

    goinghome = true;

    document.querySelector("#back").classList.remove("button_move");
    document.querySelector("#back").removeEventListener("click", closeSettings);

    settings.classList.add("screen_gone");
    document.querySelector("#back").classList.add("screen_gone");

    settings.addEventListener("animationend", resetGame);
}

// Level complete functions -------------------------------->

function levelComplete() {
    console.log("Killing all zombies");

    dontshoot.pause();
    pauseGame();

    zombie1.querySelector(".sprite").classList.add("splat");
    zombie2.querySelector(".sprite").classList.add("splat");
    zombie3.querySelector(".sprite").classList.add("splat");
    zombie4.querySelector(".sprite").classList.add("splat");
    zombie5.querySelector(".sprite").classList.add("splat");
    zombie6.querySelector(".sprite").classList.add("splat");
    zombie7.querySelector(".sprite").classList.add("splat");
    zombie8.querySelector(".sprite").classList.add("splat");
    zombie9.querySelector(".sprite").classList.add("splat");
    zombie10.querySelector(".sprite").classList.add("splat");
    zombie11.querySelector(".sprite").classList.add("splat");
    zombie12.querySelector(".sprite").classList.add("splat");
    zombie13.querySelector(".sprite").classList.add("splat");

    if (!soundmuted) {
        splat1.play();
        splat2.play();
        splat3.play();
    }

    game.classList.add("blur");
    //levelcomplete.classList.remove("hide");
    game.addEventListener("animationend", youWin);
}

function youWin() {
    console.log("Dropping score board");
    game.removeEventListener("animationend", youWin);

    if (!soundmuted) {
        applause.currentTime = 0;
        applause.play();
    }

    levelcomplete.classList.add("dropdown_animation");
    levelcomplete.classList.remove("hide");
    document.querySelector("#playagain_button").classList.add("dropdown_animation");
    document.querySelector("#playagain_button").classList.remove("hide");

    levelcomplete.addEventListener("animationend", youwinStill);
}

function youwinStill() {
    console.log("Showing kills and animating play again button");

    levelcomplete.removeEventListener("animationend", youwinStill);

    document.querySelector("#score").textContent = kills;
    document.querySelector("#playagain_button").classList.remove("dropdown_animation");
    levelcomplete.classList.remove("dropdown_animation");
    document.querySelector("#settings").removeEventListener("click", clickSettings);

    document.querySelector("#playagain_button").classList.add("button_move");
    document.querySelector("#playagain_button").addEventListener("click", clickPlayagain);
}

function clickPlayagain() {
    console.log("Play again clicked");

    if (!soundmuted) {
        click.play();
        applause.pause();
    }

    document.querySelector("#playagain_button").removeEventListener("click", clickPlayagain);

    levelcomplete.classList.add("screen_gone");
    levelcomplete.addEventListener("animationend", resetGame);
}

// Game over functions -------------------------------->

function bloodRunning() {
    console.log("Blood runs");

    blood.classList.remove("hide");
    blood.classList.add("flow");
    game.classList.add("blur");
    blood.addEventListener("animationend", gameOver);
}

function gameOver() {
    console.log("Dropping game over message");

    blood.offsetHeight;
    blood.removeEventListener("animationend", gameOver);

    if (!musicmuted) {
        loosemusic.currentTime = 0;
        loosemusic.volume = 0.7;
        loosemusic.play();
    }

    gameover.classList.remove("hide");
    document.querySelector("#yougoteaten").classList.add("dropdown_animation");
    document.querySelector("#yougoteaten").classList.remove("hide");
    document.querySelector("#tryagain_button").classList.remove("hide");
    document.querySelector("#tryagain_button").classList.add("dropdown_animation");

    document.querySelector("#yougoteaten").addEventListener("animationend", gameoverStill);
}

function gameoverStill() {
    console.log("Animating try again button");

    document.querySelector("#yougoteaten").removeEventListener("animationend", gameoverStill);
    document.querySelector("#tryagain_button").classList.remove("dropdown_animation");
    document.querySelector("#settings").removeEventListener("click", clickSettings);

    document.querySelector("#tryagain_button").offsetHeight;

    document.querySelector("#tryagain_button").classList.add("button_move");
    document.querySelector("#tryagain_button").addEventListener("click", clickTryagain);
}

function clickTryagain() {
    console.log("tryagain clicked");

    if (!soundmuted) {
        click.play();
    }

    document.querySelector("#tryagain_button").removeEventListener("click", clickTryagain);

    loosemusic.pause();

    blood.classList.add("disappear");
    gameover.classList.add("screen_gone");
    gameover.addEventListener("animationend", resetGame);
}

// Reset functions -------------------------------->

function resetGame() {
    console.log("Resetting game");

    // Removing animations and hiding settings screen and back button (coming from restartGame)
    settings.classList.remove("screen_gone");
    settings.classList.add("hide");
    document.querySelector("#back").classList.remove("screen_gone");
    document.querySelector("#back").classList.add("hide");
    // Removing click-listener from settings button (in case it hasnt already been removed)
    document.querySelector("#settings").removeEventListener("click", clickSettings);
    // Remove listeners, coming from the different end screens
    settings.removeEventListener("animationend", resetGame);
    levelcomplete.removeEventListener("animationend", resetGame);
    gameover.removeEventListener("animationend", resetGame);

    game.classList.remove("blur");
    blood.classList.add("hide");
    blood.classList.remove("flow");
    blood.classList.remove("disappear");

    document.querySelector("#playagain_button").classList.remove("button_move");

    document.querySelector("#liquid").classList.remove("time_animation");
    document.querySelector("#liquid").classList.remove("pause");
    document.querySelector("#liquid").removeEventListener("animationend", levelComplete);

    document.querySelector("#pause .pause_button").classList.remove("play_button");

    ghost.removeEventListener("animationend", ghostRestart);
    ghost.removeEventListener("click", shootGhost);

    ghost.classList = "";

    ghost.querySelector(".sprite").classList.remove("ghost_splat");
    ghost.querySelector(".sprite").classList.remove("nosplat");

    ghost.querySelector(".sprite").classList.remove("ghost_body");

    ghost.offsetHeight;

    zombie1.classList = "";
    zombie2.classList = "";
    zombie3.classList = "";
    zombie4.classList = "";
    zombie5.classList = "";
    zombie6.classList = "";
    zombie7.classList = "";
    zombie8.classList = "";
    zombie9.classList = "";
    zombie10.classList = "";
    zombie11.classList = "";
    zombie12.classList = "";
    zombie13.classList = "";

    zombie1.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie2.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie3.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie4.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie5.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie6.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie7.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie8.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie9.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie10.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie11.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie12.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");
    zombie13.querySelector(".sprite").classList.remove("color1", "color2", "color3", "splat");

    zombie1.removeEventListener("animationiteration", zombieAttack);
    zombie1.removeEventListener("click", shootZombie);
    zombie1.removeEventListener("animationstart", startTraits);
    zombie2.removeEventListener("animationiteration", zombieAttack);
    zombie2.removeEventListener("click", shootZombie);
    zombie2.removeEventListener("animationstart", startTraits);
    zombie3.removeEventListener("animationiteration", zombieAttack);
    zombie3.removeEventListener("click", shootZombie);
    zombie3.removeEventListener("animationstart", startTraits);
    zombie4.removeEventListener("animationiteration", zombieAttack);
    zombie4.removeEventListener("click", shootZombie);
    zombie4.removeEventListener("animationstart", startTraits);
    zombie5.removeEventListener("animationiteration", zombieAttack);
    zombie5.removeEventListener("click", shootZombie);
    zombie5.removeEventListener("animationstart", startTraits);
    zombie6.removeEventListener("animationiteration", zombieAttack);
    zombie6.removeEventListener("click", shootZombie);
    zombie6.removeEventListener("animationstart", startTraits);
    zombie7.removeEventListener("animationiteration", zombieAttack);
    zombie7.removeEventListener("click", shootZombie);
    zombie7.removeEventListener("animationstart", startTraits);
    zombie8.removeEventListener("animationiteration", zombieAttack);
    zombie8.removeEventListener("click", shootZombie);
    zombie8.removeEventListener("animationstart", startTraits);
    zombie9.removeEventListener("animationiteration", zombieAttack);
    zombie9.removeEventListener("click", shootZombie);
    zombie9.removeEventListener("animationstart", startTraits);
    zombie10.removeEventListener("animationiteration", zombieAttack);
    zombie10.removeEventListener("click", shootZombie);
    zombie10.removeEventListener("animationstart", startTraits);
    zombie11.removeEventListener("animationiteration", zombieAttack);
    zombie11.removeEventListener("click", shootZombie);
    zombie11.removeEventListener("animationstart", startTraits);
    zombie12.removeEventListener("animationiteration", zombieAttack);
    zombie12.removeEventListener("click", shootZombie);
    zombie12.removeEventListener("animationstart", startTraits);
    zombie13.removeEventListener("animationiteration", zombieAttack);
    zombie13.removeEventListener("click", shootZombie);
    zombie13.removeEventListener("animationstart", startTraits);

    kills = 0;

    document.querySelector("#number_of_kills").textContent = kills;

    lives = 4;

    document.querySelector("#heart1").classList.remove("dead_heart");
    document.querySelector("#heart2").classList.remove("dead_heart");
    document.querySelector("#heart3").classList.remove("dead_heart");

    gameOn = true;

    if (!goinghome) {
        setTimeout(startGame, 3000);
    } else {
        showStart();
    }
}

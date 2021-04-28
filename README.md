<h1 align="center">Rock Paper Scissors</h1>

Turing 2103 FE Week 6 Solo Project
## Table of Contents
* [Introduction](#introduction)
* [Architecture](#architecture)
* [Features](#Features)
* [Future Additions](#Future-Additions)
* [Contributors](#Contributors)
* [Languages](#Languages)
* [Technologies](#Technologies)
* [Challenges & Reflections](#Challenges-&-Reflections)

## Introduction
This website was built with the intention of exhibiting an understanding of HTML, CSS, and JavaScript fundamentals. Some of the fundamentals targeted in this project include: proficiency in HTML and CSS styling and structure, JavaScript event delegation and bubbling, use of setTimeOut() method, higher-level logical reasoning in basic game development, local storage, class to class interaction, and separation of the DOM and the data model.

This website allows the user to play two different versions of Rock Paper Scissors against an automated opponent. It is sci-fi themed, and the user plays as an alien, their rival portrayed as a computer. There are two modes of gameplay: classic (rock, paper, scissors) and difficult (rock, paper, scissors, alien, computer).

The user is greeted on page load with the rules to these two game modes in cards in the center of the page. When the user selects a card, they are presented with the fighter options for that game mode. The user can then select a fighter, and upon selection, is faced with a 2 second "game play" of the user's chosen fighter vs the computer's randomly chosen fighter. Once the face-off ends, the win is recorded in the appropriate side bar, and the user is redirected to the fighter choice view, this time with a "Change game?" button above the fighter icons. If this button is clicked, it will take the user back to the game mode choice view that initially greeted them on page load. The wins recorded will persist in the appropriate side bars during any view change or reload of the page.


## Architecture
- JavaScript comprises three files: a Game class, a Player class, and a main file for manipulating the DOM
- main.js instantiates and manipulates the Game and Player classes, declaring one global variable to store the currentGame data
- currentGame in main.js subsequently manipulates methods and properties of Player and stores that information
- main.js manipulates the DOM based on the information in the Game data model
- HTML is represented in a standard index.html file
- CSS is represented in a styles.css file

## Features
- Users can select a style of rock paper scissors game between classic and difficult
- Users can select their chosen fighter to face off to an automated computer opponent
- Logged wins tally and persist across view changes and page loads

Page load:
![RPS-pageload](https://user-images.githubusercontent.com/76665215/116326808-98700f80-a782-11eb-92ee-b8b601b21e87.png)


Selecting a Game Type:
Classic:
![selecting-classic](https://user-images.githubusercontent.com/76665215/116326862-bb022880-a782-11eb-842a-abb8e86ee476.gif)

Difficult:
![selecting-difficult](https://user-images.githubusercontent.com/76665215/116326978-fbfa3d00-a782-11eb-92b5-e96e52503a8c.gif)

Selecting a Fighter in Classic Mode & Classic Game Play Timeout:
![choose-fighter-classic](https://user-images.githubusercontent.com/76665215/116327567-4b8d3880-a784-11eb-88bd-7523716f4f2e.gif)


Selecting a Fighter in Difficult Mode & Difficult Game Play Timeout:
![choose-fighter-difficult](https://user-images.githubusercontent.com/76665215/116327361-d91c5880-a783-11eb-9bd8-182db293bbcd.gif)


Use of Change Game button in Classic:
![Change-game-classic](https://user-images.githubusercontent.com/76665215/116327735-ac1c7580-a784-11eb-85b5-545f3a7abb11.gif)


Use of Change Game button in Difficult:
![change-game-difficult](https://user-images.githubusercontent.com/76665215/116327860-e6861280-a784-11eb-9208-8b8f72151b71.gif)


Win Displays Persisting After Page Load
![reload](https://user-images.githubusercontent.com/76665215/116328011-3cf35100-a785-11eb-9ad0-f724dd5f0216.gif)


Wins logged will be remembered by localStorage upon leaving and revisiting!
![google-visit](https://user-images.githubusercontent.com/76665215/116328122-8ba0eb00-a785-11eb-97d7-bf86bc4ea815.gif)



### Future Additions
- Add page view to display the winner after each round, to disappear with a CSS animation on timeout
- Ability for the user to reset the whole game, including local storage
- Incorporation of a login page that allows the user to update their icon and name

## Contributors
[Ashley O'Brien](https://github.com/AshleyOh-bit)<br>

## Languages
JavaScript  
CSS  
HTML

## Technologies
- Atom for code editing
- Google Chrome for testing
- GitHub as remote host

## Challenges & Reflections

I started this project with a great deal of trepidation. I was overwhelmed by what was expected, from building out the HTML, to writing interface-independent JavaScript, to implementing my JavaScript with my visual goals in mind. I started by wireframing the HTML for the spec provided, thinking that I would not be able to handle the design expectations of building my own version. I quickly realized that I was struggling because I didn't like the design of the comp, and quickly built my own version of the application. This was a learning moment for me, realizing that learning CSS and HTML, while not my favorite element of web development, comes much easier if I feel compelled by the design. I recognize this will be something to overcome in the future as I look for work in the professional realm.

When I began to write the JavaScript, I was very burnt out from the final assessment. My eyes hurt from looking at the screen, so I started by writing it out with a pencil and paper. This provided a solid foundation for almost all implementation forthwith, and I will use this strategy in the future. My first major logical hurdle came with connecting the DOM to my data model -  this took a lot of brain power for me. My data was not set up to be as dynamic as I needed it to be for the DOM to accurately interact and reflect the changes to the data model as prescribed by the user. I did a data "deep clean", put my game data in an array of objects, and scrubbed by game class logic and subsequent DOM requests. This fixed the strange errors and eliminated a bug I didn't know how to approach.

The final and largest hurdle for me involved local storage. I struggled to call local storage at the proper time, and often confused the browser with what I was asking upon refresh. I absolved this by rubber ducking and implementing conditions to my main.js file to assess the state of local storage and reflect that storage on the DOM. I still have a lot of growing to do in this area, but I feel I walked away understanding much more than when I started the project.

Overall, I feel proud of this app. It has exceeded my expectations in functionality and design. Even though I would love to refactor and tweak and add features for much longer, I feel satisfied with what my days of effort have produced.

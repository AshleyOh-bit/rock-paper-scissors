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
![Rock Paper Scissors Page load](./)

Selecting a Game Type:
![alt text]()

Selecting a Fighter in Classic Mode
![alt text]()

Selecting a Fighter in Difficult Mode
![alt text]()

Classic Game Play Timeout


Difficult Game Play Timeout


Win Displays Persisting After Page Load
![alt text]()

Wins logged will be remembered by localStorage upon leaving and revisiting!
![alt text]()


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

# Starter kit with the toolkit

## Setup

Like any npm project, `npm install` is used to download all the necessary packages and `npm start` is used to start the project

## Adapt to your own project

The best way to keep the git tree and push this starter on your own repo is to change the remote url (or create a new one).
To change the origin remote url use `git remote set-url yourNewRepoUrl`.
After that, you can push this project on your new repository.

## What is available ?

This project come with several basics requirements.

### Basic template

With a header, a footer, a menu bar and a title bar

### Basics pages

A Homepage, a not found page that you can display when you have a 404 for example and a server error page that you can display when you have a 500 for example.

### A router

### A formatting service

## Project structure

```
├─── src
│   ├─── context
│   ├─── Home
│   ├─── layout
│   └─── services
```

### context

Contains context initialization and an example for an action and a reducer

### Home

Home is a page example

### layout

The layout folder your components like Header, Footer, or even the Router

### services

Services is a more generic folders. The goal is to keep in the same place all the reusable pure feature.

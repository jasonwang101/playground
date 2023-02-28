"use strict";
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};

# Redux made easy with **Rematch**

<a href="https://www.nodejsdesignpatterns.com"><img width="240" align="right" src="https://images-na.ssl-images-amazon.com/images/I/41FTChr4zyS._SX403_BO1,204,203,200_.jpg"></a>

### [🌎 Official website](https://rematchjs.org)

## What's this book about

Rematch is Redux best practices without the boilerplate. This easy-to-follow guide is for anyone who wants to start using Redux and for existing Redux users looking to improve their codebase.

Complete with hands-on tutorials, projects, and self-assessment questions, this book will quickly take you through basic to advanced Rematch features. You’ll learn how to migrate from Redux, write plugins, set up a fully tested store, and integrate with vanilla JavaScript and frameworks such as React and React Native. The book will show you how to build a real-world application from scratch with the power of Rematch and its plugins, helping you understand how plugins extend Rematch functionalities. Once you discover how plugins work, you'll see how to leverage them to create maintainable projects. Finally, you'll analyze the future of Rematch and understand how the frontend ecosystem is progressing to become more practical and maintainable with alternatives to Redux.

By the end of this book, you'll have total control of the application state and be able to manage its scalability with simplicity using Rematch.

## What you will learn
- Understand the principal concepts of Flux and Redux
- Find out what are the main problems that Rematch solves
- Become familiar with the Rematch ecosystem
- Develop an application using Rematch and React together
- Write unit and integration tests to get 100% test coverage of your programs with Rematch
- Create a React Native App with Rematch and Expo
- Persist data with redux-persist and Rematch
- Build a Rematch plugin from scratch

## Who's this book for
This book is for React and Redux users looking for better alternatives for Redux. Familiarity with JavaScript, React, and Redux will help you make the most of this book.

## Chapter's examples

- [Chapter 3: Vanilla JS Redux Application](/packages/chapter-3)
- [Chapter 4: Vanilla JS Redux + Rematch Application](/packages/chapter-4)
- [Chapter 5: Amazon like Application with Rematch and React - PART I](/packages/chapter-5)
- [Chapter 6: Amazon like Application with Rematch and React - PART II](/packages/chapter-6)
- [Chapter 7: Amazon like Application with Rematch and React + Testing Library + Jest](/packages/chapter-7)

## How to run any chapter code?

Make to have installed [`yarn`](https://classic.yarnpkg.com/lang/en/)
> In the root of this folder run:
```
yarn install
```

> You can use an utility script (start.sh) to run from the root folder any chapter code, or simple move to the corresponding chapter code and run the local scripts situated in the package.json.

The [start.sh](/start.sh) script accepts two arguments:
  - The chapter package, follows the convention of chapter-[number]
  - The script to run:
    - dev
    - build
    - serve
    - test

For ex:
```sh
# start dev environment chapter-6
./start.sh chapter-6 dev
# or build chapter-5
./start.sh chapter-5 build
```

There a lot of scripts and every chapter has it's own so feel free to take a look first on the chapter code which commands are available.
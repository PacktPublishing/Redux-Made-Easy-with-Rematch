# Redux made easy with Rematch

<a href="https://www.packtpub.com/product/redux-made-easy-with-rematch/9781801076210?utm_source=github&utm_medium=repository&utm_campaign=9781801076210"><img src="https://static.packt-cdn.com/products/9781801076210/cover/smaller" alt="Redux made easy with Rematch" height="256px" align="right"></a>

This is the code repository for [Redux made easy with Rematch](https://www.packtpub.com/product/redux-made-easy-with-rematch/9781801076210?utm_source=github&utm_medium=repository&utm_campaign=9781801076210), published by Packt.

**Reduce Redux boilerplate and apply best practices with Rematch**

## What is this book about?
Rematch is Redux best practices without the boilerplate. This book is an easy-to-read guide for anyone who wants to get started with Redux, and for those who are already using it and want to improve their codebase.

This book covers the following exciting features: 
* Understand the principal concepts of Flux and Redux
* Find out what are the main problems that Rematch solves
* Become familiar with the Rematch ecosystem
* Develop an application using Rematch and React together
* Write unit and integration tests to get 100% test coverage of your programs with Rematch

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1801076219) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter03.

The code will look like the following:
```
const store = window.Redux.createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_
DEVTOOLS_EXTENSION__()
);
```

**Following is what you need for this book:**

This book is for React and Redux users looking for better alternatives for Redux. Familiarity with JavaScript, React, and Redux will help you make the most of this book.

With the following software and hardware list you can run all code files present in the book (Chapter 1-13).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1        | Node.js LTS                         | Windows, Mac OS X, and Linux       |
| 2        | Yarn 1.22                           | Windows, Mac OS X, and Linux       |
| 3        | Google Chrome                       | Windows, Mac OS X, and Linux       |
| 4        | Visual Studio Code                  | Windows, Mac OS X, and Linux       |


## Chapter's examples

### Rematch essentials
- [Chapter 3: Vanilla JS Redux application](/packages/chapter-3)
- [Chapter 4: Vanilla JS Redux + Rematch application](/packages/chapter-4)

### Building real-world apps with Rematch
- [Chapter 5: Amazhop website with React and TailwindCSS - PART I](/packages/chapter-5)
- [Chapter 6: Amazhop website with Rematch and React - PART II](/packages/chapter-6)
- [Chapter 7: Amazhop website with Rematch and React + Testing Library + Jest](/packages/chapter-7)
- [Chapter 8: Amazhop website with Rematch and Rematch Plugins and React + Testing Library + Jest](/packages/chapter-8)

### Diving deeper into Rematch
- [Chapter 9: Rematch Plugin written from scratch with Tsdx and TypeScript](/packages/chapter-9)
- [Chapter 10: Amazhop website rewriten to TypeScript with Rematch TypeScript](/packages/chapter-10)
- Chapter 11: Amazhop React Native + Expo application with the same business logic of our website using Yarn Workspaces:
  - [React Native Application](/packages/chapter-11)
  - [Distributable Business logic](/packages/shared-logic)
- [Chapter 12: Amazhop website with best practices and performance improvements](/packages/chapter-12)


## How to run any chapter code?

Make to have installed [`yarn`](https://classic.yarnpkg.com/lang/en/)
> In the root of this folder run:
```
yarn install
```

After the installation of all modules you can run whathever package you want via this options:
- You can use an utility script (start.sh) to run from the root folder any chapter code, **ONLY if you use Unix or Mac system.**
- Simple move to the corresponding chapter code and run the local scripts situated in the package.json.
- Use `yarn workspace package-name script`
- Use `lerna run package-name script`

If you want to use the [start.sh](/start.sh) script accepts two arguments:
  - The chapter package, follows the convention of chapter-[number]
  - The script to run:
    - dev
    - build
    - serve
    - test

For ex:
```sh
# Will start the development server of chapter 6 code
./start.sh chapter-6 dev
# or will build the chapter 5 code
./start.sh chapter-5 build
```

There a lot of scripts and every chapter has it's own so feel free to take a look first on the chapter code which commands are available.

<hr>

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://static.packt-cdn.com/downloads/9781801076210_ColorImages.pdf).


### Related products <Other books you may enjoy>
* React 17 Design Patterns and Best Practices - Third Edition [[Packt]](https://www.packtpub.com/product/react-17-design-patterns-and-best-practices-third-edition/9781800560444?utm_source=github&utm_medium=repository&utm_campaign=9781800560444) [[Amazon]](https://www.amazon.com/dp/1800560443)

* Full-Stack React, TypeScript, and Node [[Packt]](https://www.packtpub.com/product/full-stack-react-typescript-and-node/9781839219931?utm_source=github&utm_medium=repository&utm_campaign=9781839219931) [[Amazon]](https://www.amazon.com/dp/1839219939)

## Get to Know the Author
**Sergio Moreno**
is a frontend developer with more than 4 years of experience heavily focused on the analysis, design, development, and building of large-scale applications. Formerly working at Allfunds, the world's largest fund distribution network, he led the frontend team to build a full new suite of products for the new digital section of Allfunds. He entered the open source world in 2019 and has contributed to big companies including Google, Facebook, Airbnb, Pinterest, and many more. In 2020, he focused on contributions to Rematch, where he released the v2 version with a full rewrite of the code base, full compatibility with TypeScript, and many other improvements, such as reducing the bundle size in some cases by 80%. He is also now the lead mantainer of the LinguiJS library, an amazing internationalization library. He helped to release the v3 version and took on the role of leading the coming years of development of LinguiJS.

In 2021, he joined Flowable as a product engineer, working on their compact and highly efficient workflow and business process management platform for developers, system admins, and business users.




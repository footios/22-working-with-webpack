[React 16.6 - The Complete Guide (incl. React Router & Redux)](https://www.udemy.com/react-the-complete-guide-incl-redux/)

> Section 21

> Bonus: Working with Webpack

> Lectures 393 - 412

398.
Speaking of that let's install the first import dependency,

actually two of them with `npm install --save-dev`,

we install new dependencies and we mark them as *development only dependencies*

which doesn't really have a big impact

here, doesn't make a difference, we could also use `--save` in our project but it makes it clear

which dependencies we use only for *setting up the build `workflow` and which dependencies really have*

*an impact on the `running application`*,

you will see that they will be grouped differently the `package.json` file later.

Both `--save` and `--save-dev` add an entry to `package.json` so that we can

easily share our project without having to share the big node modules folder too.

Enough talking about that though,

let's specify the two dependencies we need.

The first one is `webpack` and the second one is `webpack-dev-server`, like this,

the second one is this `development server` we want to use so that we can test our application locally

on the machine and `webpack` is well

basically the `build tool` itself, `webpack-dev-server` wraps this build tool,

they're both from the same team.
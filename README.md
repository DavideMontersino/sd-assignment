# Sysdig event visualizer

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd sd`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit the app at [http://localhost:4200](http://localhost:4200).

## Still to do

This is about stuff that I would like to have done but could not do due to lack of time.
In order of importance:

 * Secure the API key. It should of course not reach the client side.
   Techniques to solve the problem can include a proxy capable of initiating session, i.e. with cookies or jwt
 * Ui is blocked for too long while loading.
   I needed to research how to make ember render only a few elements at once; By this I mean either pagination, or giving the layout engine just a few elements at once instead of all the 320 elements.
 * Write tests. I had no time to check ember's testing facilities.
 * The adapter (app/adapters/application.js) needs to be type-wise - now it would the same transformation to all the code if other api endpoints wuld be added.
 * Server side pagination. I would need to look a little bit more into Sysdig API.
   (I noticed there is a `limit` querystring parameter that I could use for example, but I also need to set a 'start from' parameter)
 * Filtering and ordering options
 * A good git history. I am a huge fan of atomic, semantic commits. But in this case I was messing around a lot learning ember.
   I usually take care of the history a lot, doing interactive rebases (of my local commits) to ensure a proper code documentation.
 * Better css. I opted to use bootstrap and I added only one line of css.
 * There is no specification for the description field; however it seems possible to split the description between `semi-colon` and have a key-value pair divided by `colon`

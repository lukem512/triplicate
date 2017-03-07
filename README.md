# Triplicate

*Show your photographs simply and beautifully.*

<img src="https://i.imgur.com/cGJuJng.jpg" />

A trio of photographs, known as a [triptych](https://en.wikipedia.org/wiki/Triptych#In_photography) or a *triplicate*, is a common and pleasing means of display. This project aims to provide a simple and clean way of creating triplicates that you can view in your browser.

### Creating your Triplicate

To create a Triplicate, clone this repository and run `npm run start` from the command line. You'll find everything you need inside [App.js](src/App.js).

Each Triplicate is a React component that can be instantiated using the following definition:

```
<Triplicate photos={[
  {
    src: "https://i.imgur.com/qOzvV95.jpg",
    title: "Eucalyptus",
    description: "An *Oceanic* tree in _Kew Gardens_.",
  },
  {
    src: "https://i.imgur.com/57fNtrZ.jpg",
    title: "Photo #2",
  },
  "https://i.imgur.com/brm3mBl.jpg",
]} />
```

The properties required are an array of `photos`, either as source `strings` or as `objects`. Specifying a photo object allows you to include option attributes such as a `title` and a `description`. These strings are parsed using a simple markdown and may be *emphasized* (`*emphasized*`), __underlined__ (`_underline_`) or ~~struck-through~~ (`~struck-through~`).

<img src="https://i.imgur.com/bK42Vxb.png" />

The *blurb* will display the title and the description of a photo when tapped. The default animation will fade in an and out and remain visible for 3 seconds. The timeout can be adjusted by passing a `timeout` property to the Triplicate instance, specified in milliseconds.

### Publishing your project

You can quickly publish to GitHub Pages by modifying the `homepage` attribute in [package.json](package.json) and running `npm run deploy`. Alternatively, build the project by running `npm run build` and host the static files inside the `build/` directory on your web server.

### Acknowledgements

Favicon kindly provided by [Photoshopedia](http://www.photoshopedia.com/).

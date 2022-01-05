
# Formats Widget

### What is Format?
The core premise of Format is that each article has a Design, Display and Theme value. Design relates to the type of article (analysis, interview, letter, match report etc), Display relates to whether an article is Immersive or Showcase, and Theme relates to the Pillar colours used on components such as the Standfirst or Headline. The 497 different combinations of these three types covers all article designs at The Guardian.

### 4mats
Fares Basmadji created a site called Formats (Github here) to demonstrate the different combinations of the Format type we use to control article and front designs at The Guardian. 4mats provides the user with a list of example options representing each of the possible article layouts. These article examples existed in a store of mock articles which were then proxied onto the various guardian platforms (Dotcom-Rendering, Apps-Rendering, Editions).

While this works well in isolation, it requires the upkeep of a separate site and limits the wider awareness of the product across The Guardian.

### Why a widget?
A widget is easy to create and maintain, and can be easily shared. It has a very low bar to entry from a user perspective.

With a few small adjustments it’s relatively trivial to override the Format values within Apps-Rendering (and presumably on DCR too). We can achieve this by adding query params that represent the enums the make up the Format type. 

The obvious mechanism to change these query parameters is by using a widget, it also provides a test case for potentially at a later point  adding this functionality to Teleporter.

# Building your chrome extension

Run the following commands: 
```bash
npm i
npm run build
```

Your extension build will be available within the `public` folder.

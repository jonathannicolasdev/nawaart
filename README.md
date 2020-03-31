# Nawaart Gallery
let' test jonathannicolasdev github

This is [the repository](https://github.com/jobegood49/nawaart) of Nawaart.
[Click here](https://nawaart.jonathannicolas.dev) to access it.

## Inspirations

- https://mayinart.com
- https://lehmannmaupin.com

## Design

![Design Asset](assets/design.jpg)

Design assets:

- Figma File: https://www.figma.com/file/InMducAuEQbEjvXvlDHMPU/Nawaart?node-id=0%3A1
- Figma Prototype: https://www.figma.com/proto/InMducAuEQbEjvXvlDHMPU/Nawaart?node-id=2%3A0&scaling=min-zoom

## Sitemap

- Home
- About/Story
- Artists
- Stories

## Features

### Frontend

- Visitor cannot register or login
- Owners can login
  - When authenticated in particular pages such as Artists, Artworks, Stories: they can modify (add, edit, and remove) the data.
- Visitors can view Artists, Artworks, and Stories
  - Visitor can view single Artist page
  - Visitor can view single Artwork page
  - Visitor can view single Story page
- Owners can add, edit, and remove an Artist
- Owners can add, edit, and remove a Story
- Owners can add, edit, and remove an Artwork
  - Artwork's artist can be empty

### Backend

- ...
- ...
- ...

## Data

### Artists

- Name
- Photo
- Biography

```json
{
  "_id": ObjectId,
  "name": "Adha Joe",
  "photo": "https://exampple.com/images/adha-joe.jpg",
  "biography": {
    "about": "Even Adha is an autodidact artist and has never joined any art institution, he has been interested with art and started to paint since he was very young. In the beginning, Adha started to learn many kind of arts in various media, then finally he decided to focus on painting. For Adha, to paint is to express himself, as for him arts is the bridge to communicate to the audiences.",
    "exhibitions": [
      "2018 “Perupa Muda#3 Ring Road”, Sangkring Art Space, Yogyakarta",
      "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta",
      "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta"
    ]
  }
}
```

### Artworks

- Title
- Artist
- Image

```json
{
  "title": "Let It Grow",
  "artist": ObjectId,
  "image": "https://example.com/images/let-it-grow.jpg"
}
```

### Stories

- Image
- Title
- Content

```json
{
  "title": "Art in the park",
  "image": "https://example.com/images/art-in-the-park.jpg",
  "content": "<p>
  It's a sad fact that many people won’t ever step into art galleries and
  museums. Some are reluctant to do so because those places can be intimidating.
  Even contemporary art can have a snooty, rarefied air about it that feels cold
  and uninviting.
</p>
<p>
  Art is important because it’s part of the story we tell about ourselves; it’s
  our culture. It’s something that can be enjoyed in a spectrum of senses, from
  titillation to edification. But it’s often just not easy to “get into,” and
  that’s partly because of snobbery, but it’s also because art really is
  sophisticated and therefore demands time and effort.
</p>"
}
```

## License

Copyright 2020 Jonathan Nicolas. All rights reserved.

# Nawaart Gallery

This is [the repository](https://github.com/jobegood49/nawaart) of Nawaart.
[Click here](https://nawaart.jonathannicolas.dev) to access it.

## Design

![Design Asset](assets/design.jpg)

Design assets:

- Figma File: https://figma.com/...
- Figma Prototype: https://figma.com/...

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
  "image": "https://exampple.com/images/let-it-grow.jpg"
}
```

## License

Copyright 2020 Jonathan Nicolas. All rights reserved.

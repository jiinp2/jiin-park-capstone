# Focal

## Overview

Focal transforms travel memories into interactive, mapped experiences, allowing users to visualize and share their journeys with ease.

### Problem Space

Travel memories are often fragmented—photos stored in the cloud, notes scattered across apps, and journals left unfinished. This makes it difficult to revisit past experiences or document trips in a structured way.

Journaling is a thoughtful way to capture travel moments, but it’s difficult to maintain. Many travellers return home with blank pages or postpone documenting their trips, only to feel overwhelmed later. Photos, however, are effortless and naturally capture valuable metadata—timestamps, locations, and context—that can reconstruct a trip’s timeline.

By leveraging this existing habit, travel documentation becomes more seamless. Users can stay present during their trips while relying on their photos to help them organize and relive their journeys later.

### User Profiles

##### Travellers Who Want to Document Their Experiences

- Need a low-effort way to organize travel memories.
- Prefer non-intrusive documentation that fits into their existing habits.
- Want a simple way to look back on past trips without extensive journaling.

##### Travellers Who Enjoy Sharing Their Experiences

- Want to easily revisit and reflect on past trips.
- Need a way to share their journeys with family, friends, or a community.
- Want to offer travel recommendations based on their own experiences.
- Value a visually cohesive and well-structured way to present their travels.

### Features

- As a user, I want to upload travel photos so I can document my journeys.
- As a user, I want to view my photos on an interactive map so I can see where I've been.
- As a user, I want to see my travel history organized by location and date so i can easily revisit past trips.
- As a user, I want to add notes to my photos so I can include context or memories.
- As a user, I want to see my photos organized automatically based on when and where I took them.

## Implementation

### Tech Stack

#### Frontend

- React
- Vite
- SASS

#### Backend

- Node.js
- Express.js

#### Database

- MySQL
- Knex.js

### APIs

- Leaflet - for interactive map

### Sitemap

- Home
- About - project details
- Upload - uploading photos to create a log
- Edit - editing detauls of an uploaded log
- Profile - view all saved logs
- Profile Log - view a specific log in full-screen

![Sitemap v1](https://github.com/user-attachments/assets/f08170a5-9fb4-41ba-a88d-33764bf1a01c)

### Mockups

#### Home

![home](https://github.com/user-attachments/assets/a0647fde-909f-4604-81b2-2329aa41c44a)

#### Upload

![upload](https://github.com/user-attachments/assets/a519b4ec-18cc-460e-ab97-013a1ebca144)

#### Edit

![edit](https://github.com/user-attachments/assets/b9aa167e-de8e-4cf9-8e91-f4ae175ba0e1)

#### Profile

![collection](https://github.com/user-attachments/assets/8537f08d-5d25-4d48-af1d-8d6105281f56)

#### Full-screen Log

![full view](https://github.com/user-attachments/assets/f87d48bd-60b8-41af-85d1-02230c68b69a)

### Data (Work in progress)

#### Users

- id (Primary Key)

#### Travel Logs

- id (Primary Key)
- title
- timestamp

#### Photos

- id (Primary Key)
- log_id (Foreign Key)
- image_url
- latitude
- longitude
- timestamp

#### Notes

- id (Primary Key)
- photo_id (Foreign Key)
- text
- timestamp

### Endpoints (Work in progress)

#### POST/photos

- Upload a new travel photo with EXIF metadata

Parameters:

- imageUrl: uploaded photo
- coordinates: latitude and longitude
- timestamp - date/time photo was taken

```
{
  "id": 1,
  "imageUrl": "https://example.com/photo.jpg",
  "coordinates": {
   "latitude": 48.858844,
   "longitude": 2.294351
  },
  "timestamp": 2025-03-10T12:00:00Z"
}
```

#### GET/photos

- Retrieve photos

```
{
  "id": 1,
  "imageUrl": "https://example.com/photo.jpg",
  "coordinates": {
   "latitude": 48.858844,
   "longitude": 2.294351
  },
  "timestamp": 2025-03-10T12:00:00Z"
}
```

#### GET/photos/:id

- Retrieve specific photos by id

```
{
  "id": 1,
  "imageUrl": "https://example.com/photo.jpg",
  "coordinates": {
   "latitude": 48.858844,
   "longitude": 2.294351
  },
  "timestamp": 2025-03-10T12:00:00Z"
}
```

### Roadmap

**Setup**

- Set up React project with routes
- Create server and set up express
- Set up MySQL database

**Backend Development**

- Create tables and migrations for storing photos, notes, and user data
- Implement Knex.js migrations and seeds with sample travel logs
- Implement API routes for CRUD operations

**Feature: Home Page**

- Implement landing page for new users with CTA to create a log
- Display logs collection for returning users

**Feature: Upload Photos**

- Implement upload page for selecting and previewing images
- Extract EXIF metadata (coordinates, timestamp)
- Create POST /photos endpoint to save photo data
- Store uploaded photo metadata

**Feature: Map Integration**

- Integrate Leaflet for interactive map
- Display photo markers using stored coordinates

**Feature: Notes for Photos**

- Implement note-taking functionality
- Implement UI for adding, editing, and deleting notes

**Feature: View Photos and Travel Logs**

- Implement "profile page" to display uploaded travel logs
- Implement travel log view page for a single entry
- Create GET /photos and GET /photos/:id endpoints

**Bug Fixes and Final Testing**

- Test API responses with Postman
- Ensure frontend API calls retrieve and display data correctly
- Debug UI styling and performance issues
- Check responsiveness for mobile, tablet, and desktop

**Deployment & Documentation**

- Deploy frontend and backend to production
- Write project documentation and update README.md
- Conduct usability testing and final review

### Future Implementations

- User account setup with public and private logs
- Acommodating collaboration between multiple users
- Ability to customize log styling for personalization
- Being able to share logs

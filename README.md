# SoundVibe 🎵

A music streaming platform with web and desktop applications, sharing the same MariaDB database.

## Project Structure

```
SoundVibe/
├── backend/
│   ├── php/                    (Web Backend)
│   │   ├── index.php
│   │   ├── config/
│   │   │   └── Database.php
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── .htaccess
│   │
│   └── csharp/                 (Desktop Backend)
│       ├── Program.cs
│       ├── Controllers/
│       ├── Models/
│       ├── Services/
│       ├── appsettings.json
│       └── SoundVibe.csproj
│
├── frontend/
│   ├── web/                    (Vanilla JS + HTML/CSS)
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── api.js
│   │   └── assets/
│   │
│   └── desktop/                (C# WPF/MAUI)
│       ├── MainWindow.xaml
│       ├── ViewModels/
│       ├── Views/
│       ├── Models/
│       └── App.xaml
│
├── database/
│   └── schema.sql              (MariaDB)
│
└── README.md
```

## Stack

- **Web Frontend:** Vanilla JavaScript + HTML/CSS
- **Web Backend:** PHP + REST API
- **Desktop Frontend:** C# WPF/MAUI
- **Desktop Backend:** C# ASP.NET Core
- **Database:** MariaDB (HeidiSQL)

## Features (Planned)

- User registration & login
- Browse & search music
- Like/favorite songs
- Personal playlists
- User profiles
- Share playlists

## Getting Started

### Web App
1. Set up PHP backend in `backend/php/`
2. Open `frontend/web/index.html` in browser

### Desktop App
1. Set up C# backend in `backend/csharp/`
2. Build C# WPF/MAUI app in `frontend/desktop/`

### Database
1. Import `database/schema.sql` to MariaDB using HeidiSQL
2. Update connection strings in both backends

## Author
GustavNtiSkovde
# Fritter Backend

## Node/Postgres/Typescript REST API

### Intro

---

Fritter is a very simple twitter clone I built for practice and to show off. It had been a while since I'd built an entire app from start to finish, and I wanted to really hammer down on fundamentals.

The Codebase is commented **_EXTENSIVELY_** for the benefit of anyone who wants to check it out, but the real reason everything is so painstakingly spelled out is to ensure that _I KNOW_ whet exactly the code is there for, as opposed to just copying from somewhere.

### Features

---

- Email/Password Authentication
  - TODO: Password reset & email verification via mailgun
- User Profiles
  - Includes an alphanumeric username for urls, mentions, etc.
  - Includes a "Human Readable" username for display on "Freets"
  - TODO: Profile pictures etc. using AWS S3

- Feed
  -   LMFAO
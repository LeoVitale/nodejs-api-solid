# App

GymPass style app.

## Functional Requirements

- [x] Users must be able to sign up;
- [ ] Users must be able to authenticate;
- [ ] A logged-in user's profile information must be retrievable;
- [ ] The number of check-ins performed by a logged-in user must be retrievable;
- [ ] Users must be able to access their check-in history;
- [ ] Users must be able to search for nearby gyms;
- [ ] Users must be able to search for gyms by name;
- [ ] Users must be able to check-in at a gym;
- [ ] A user's check-in must be verifiable;
- [ ] Gyms must be able to be registered;

## Business Rules

- [x] Users must not be able to sign up with a duplicate email;
- [ ] Users must not be able to check-in twice on the same day;
- [ ] Users must not be able to check-in if they are not within 100 meters of the gym;
- [ ] A check-in can only be verified up to 20 minutes after it is created;
- [ ] A check-in can only be verified by administrators;
- [ ] A gym can only be registered by administrators;

## Non-Functional Requirements

- [x] User passwords must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [ ] All data lists must be paginated with 20 items per page;
- [ ] Users must be identified by a JWT (JSON Web Token);
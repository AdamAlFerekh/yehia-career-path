## NAME

Adam Al Ferekh

## DESCRIPTION

A Next.js application for helping Yehia explore job opportunities, track
applications, and follow a personal job-search plan.


## QUESTIONS

1) Why did you use await when reading params?

Next.js provides params as a Promise. We use await params to get the object containing the route ID before reading it. The ID is a string because it comes from the URL.


2) Why is the route ID a string?

Becuase when it comes to the url for example http://localhost:3000/opportunities/1 , if we want to see it properly it will
be like this "http://localhost:3000/opportunities/1" so hence everything inside of it is a string.
In addition to that in the data of the opportunities we can notice that the id is a string and not of a number type.

3) What belongs in the dashboard layout, and what belongs in each dashboard page?

What belongs in the dashboard layout is the nav of overview and Applications (Those are specified for this page to be show only over here)
As for what each dashboard page belongs:
Overview contains a small dashboard overview with the total numbers of applications done (retrieved through the length the applications[])
Applications contains a cards, each application is mapped over it since it is an [] and then for each one of them there is a card created (Key is the index of each item in the array)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


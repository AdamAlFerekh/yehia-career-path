1) Why did you use await when reading params?

Because without the await we are not going to wait for the id to be available so that we execute the rest of the code
Then wihtout await the code will be executed although the params are not ready (it is a promise)


2) Why is the route ID a string?

Becuase when it comes to the url for example http://localhost:3000/opportunities/1 , if we want to see it properly it will
be like this "http://localhost:3000/opportunities/1" so hence everything inside of it is a string.
In addition to that in the data of the opportunities we can notice that the id is a string and not of a number type.

3) What belongs in the dashboard layout, and what belongs in each dashboard page?

What belongs in the dashboard layout is the nav of overview and Applications (Those are specified for this page to be show only over here)
As for what each dashboard page belongs:
Overview contains a small dashboard overview with the total numbers of applications done (retrieved through the length the applications[])
Applications contains a cards, each application is mapped over it since it is an [] and then for each one of them there is a card created (Key is the ID of the application)

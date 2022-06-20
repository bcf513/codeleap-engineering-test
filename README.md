Link for test: codeleap-engineering-test-bcf513.vercel.app

# What is this?

A single test for a job opportunity for frontend junior developer. It was made in four days, and was quite a challenge, since some of the tools in this project I've never used before, and had to learn the basics on the fly... but it was worth it!

## How it works?

First, the react-router verifies if the URL is valid, otherwise it redirects to an error page, that has a button to send the user to the signup page.
And if the user tries to access the main page without logging in, the router redirects to the signup page.

As the user logs in, the redux updates the loggedIn state to the username, thus allow the user to access the main page.

In the main page, the list of posts is pulled from the redux store (and updated at every change); the user can see previous posts made by him and other users, as well as create new posts and also edit or delete the ones made by himself. If he tries to edit or delete a post, or even try to logout (at the right corner of the navbar), a modal is activated, and it remains until the user confirms the action or cancels it.

## Conclusion

That was a really good test for an junior developer skills, as it was relatively simple website, but still a good challenge. Hope you like what i've made! :)

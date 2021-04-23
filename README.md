# 🥘 allplants React Challenge

We hope you will only spend 2 hours on this task, but at most please spend 3 hours.

## Assets

- **Data**: We have created a mock `/products` and `/basket` endpoint for you to use at [https://606c8796c445570017a47531.mockapi.io/products](https://606c8796c445570017a47531.mockapi.io/products) and [https://606c8796c445570017a47531.mockapi.io/basket](https://606c8796c445570017a47531.mockapi.io/basket)
- **Wireframes**: [Mobile](https://user-images.githubusercontent.com/1695933/114414338-a0d32280-9ba6-11eb-94d3-7872efa4ec9f.png)
  and [Desktop](https://user-images.githubusercontent.com/1695933/114414330-a03a8c00-9ba6-11eb-9558-276868c82cf4.png).

## Your task

1. Build a product catalogue page based on the wireframes supplied above using the `/products` endpoint. We've deliberately left out spacing / colour / font values for you to decide.
2. Interactions - when a user clicks the `Add to basket` button, send a POST request to `/basket`, with a payload of `{ id: 123 }` where `123` is the product ID number.
3. Write some unit tests for your components.
4. Add a loading state for your application to improve the browsing experience for users on slow connections.

## Bonus tasks

### Basket count

Add a basket count as part of the cart icon on the top right hand corner of the wireframes. Make this number automatically update whenever a user adds a product to their basket, e.g.

```
WHEN I click the [Add to basket] button
THEN I can see a 1 appear next to the cart icon
AND WHEN I click the [Add to basket] button again
THEN I can see the number increment by 1 again
```

### Accessibility

Ensuring the site is accessible to all users is a key objective for our company. We aim to meet the Web Content Accessibility Guidelines (WCAG) Level AA.

Some things to consider for this challenge:

- Semantic HTML markup is essential for accessibility, consider which element is most relevant for the content.
- Heading elements should be used and nested appropriately to describe the structure of the page content.
- If using `<img>` elements they must have an appropriate alt attribute.
- All functionality must be available using only a keyboard.
- Validate HTML markup to ensure it is following standards.

## Setup

We have included the Create React App for you to use, but feel free to use an alternative React boilerplate if preferred.

## Notes

- If you prefer a different setup/bootstrap in general we're open to it, but please don't spend too long on it (and be sure to add installation notes to your PR so we can get your app up and running quickly).
- Feel free to add any dependencies or libraries, but if you are borrowing any code please reference the source in your comments.
- Overall we're looking for clean code but not overworked solutions.

## Submission

Please submit your work as a Pull Request. Include any thoughts or commentary on the task in the Pull Request notes, and modify anything in this README.md as appropriate. Be sure to include [Adam](https://github.com/adamdunkley) as a reviewer for the Pull Request.

Please let us know if you have any questions or are unsure about how to approach it. Good luck and have fun!

![](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

# E-Commerce Frontend

E-Commeerce Frontend using [Fake Store API](https://fakestoreapi.com/).
Stack used in this project is Next.js, Tailwind, SWR, and Framer-Motion.

## How to setup

1. Clone this repository

```
git clone https://github.com/anomaly342/e-commerce-frontend.git
```

2. Move to the project folder and install dependencies

```bash
cd e-commerce-frontend
npm install
```

3. Run

```bash
npm run dev
```

## Features

- Responsive design.
- Add to cart.
- Quantity control.
- Remove item options.
- Filtering by categories and/or price ranges.
- Sorting by price or name.
- Hover effects on cards.
- Card animations when adding items.
- Sticky header with cart icon showing item count.
- Toast notification when adding items, it disappears after 8 seconds.
- Save card to localStorage when cart is changed.
- Cart summary export, displaying in console.

## Time spent

Approximately 18 hours across 5 days.

## Technical decisions and trade-offs

### Code Organization

I tried to encapsulate all codes as much as possible, so it took longer than I expected. At first, I wrote everything into component files like `setState`'s, `useContext`'s. Then I realized it became too complicated to maintain it, So I decided to encapsulate all logic into custom hooks under a `src/hooks` folder.

### Grid vs Flex

I was debating whether I should go with Grid or Flex for product listing, I chose Flex first because it seems like it would be effective for responsive design. But since the image size is variable, I found it extremely hard to make all cards identical in size since image size is variable.

So I ended up using Flex because I can specify consistent size for my product cards, and it has also convenient CSS properties like `grid-cols-x` which makes it very easy to determine how many columns I want in each device size.

### Some Optimization

I initially calculated the `totalPrice` and `totalQuantity` inside the `useCart` hook using `Array.reduce()`. However, I realized that this calculation would run every time any component using the hook re-rendered.

To improve this, I moved the calculation into the CartProvider so it is computed closer to the source of truth (cart state). This also made the hook simpler, since it only needs to consume values instead of recomputing them.

## Demo

https://e-commerce-frontend-vert-one.vercel.app/

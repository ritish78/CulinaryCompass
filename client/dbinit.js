const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
    {
        title: 'Creamy Carbonara',
        slug: 'creamy-carbonara',
        images: './public/foodImages/Carbonara.jpg',
        summary:
          'Indulge in a bowl of rich and creamy carbonara pasta, made with eggs, cheese, pancetta, and black pepper.',
        instructions: `
          1. Boil the pasta:
             Cook 200g of spaghetti in salted boiling water until al dente. Drain and set aside.
    
          2. Prepare the sauce:
             Whisk together 3 egg yolks, 1 cup grated Parmesan cheese, and black pepper in a bowl.
    
          3. Cook the pancetta:
             Sauté 100g of diced pancetta in a pan until crispy.
    
          4. Combine and serve:
             Toss the cooked pasta with the egg and cheese mixture. Add the crispy pancetta. Serve hot with extra Parmesan on top.
        `,
        creator: 'Jane Smith',
        creator_email: 'janesmith@example.com',
    },
    {
        title: 'Chocolate Chip Cookie',
        slug: 'chocolate-chip-cookie',
        images: './public/foodImages/ChocolateChipCookie.jpg',
        summary:
          'Indulge in the classic goodness of a chocolate chip cookie, with a perfect balance of sweetness and gooey chocolate chips.',
        instructions: `
          1. Preheat the oven:
             Set the oven to 350°F (180°C) and line a baking sheet with parchment paper.
      
          2. Mix the ingredients:
             In a bowl, cream together 1 cup of softened butter, 1 cup of brown sugar, and 1/2 cup of granulated sugar. Add 2 eggs and 1 teaspoon of vanilla extract. In a separate bowl, combine 2 1/4 cups of all-purpose flour, 1/2 teaspoon of baking soda, and a pinch of salt. Gradually add the dry ingredients to the wet ingredients. Fold in 2 cups of chocolate chips.
      
          3. Scoop and bake:
             Use a cookie scoop to drop rounded dough onto the prepared baking sheet. Bake for 10-12 minutes or until the edges are golden brown.
      
          4. Cool and enjoy:
             Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack. Enjoy these classic chocolate chip cookies with a glass of milk!
        `,
        creator: 'Alice Johnson',
        creator_email: 'alicejohnson@example.com',
    },
    {
      title: 'Classic Cheese Burger',
      slug: 'classic-cheese-burger',
      images: './public/foodImages/ClassicCheeseBurger.jpg',
      summary:
        'A mouth-watering burger with a juicy meat patty and melted cheese, served in a soft bun.',
      instructions: `
        1. Prepare the patty:
           Mix 200g of ground meat of your choice with salt and pepper. Form into a patty.
  
        2. Cook the patty:
           Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.
  
        3. Assemble the burger:
           Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.
  
        4. Serve:
           Complete the assembly with the top bun and serve hot.
      `,
      creator: 'John Doe',
      creator_email: 'johndoe@example.com',
    },
    {
        title: 'Grilled Chicken Caesar Salad',
        slug: 'grilled-chicken-caesar-salad',
        images: './public/foodImages/GrilledChickenCeaserSalad.jpg',
        summary:
          'Savor the freshness of crisp romaine lettuce, grilled chicken, croutons, and parmesan cheese tossed in a creamy Caesar dressing.',
        instructions: `
          1. Grill the chicken:
             Season chicken breasts with salt, pepper, and your favorite herbs. Grill until fully cooked, about 6-8 minutes per side. Slice into thin strips.
      
          2. Prepare the croutons:
             Cube day-old bread, toss with olive oil, salt, and garlic powder. Bake in a preheated oven at 375°F (190°C) until golden and crunchy.
      
          3. Assemble the salad:
             In a large bowl, combine chopped romaine lettuce, grilled chicken strips, croutons, and a generous amount of grated Parmesan cheese.
      
          4. Dress the salad:
             Drizzle the salad with classic Caesar dressing. Toss everything together until well coated.
      
          5. Serve:
             Divide the salad into plates and garnish with additional Parmesan. Serve immediately and enjoy this delicious Grilled Chicken Caesar Salad!
        `,
        creator: 'Michael Thompson',
        creator_email: 'michaelthompson@example.com',
    },
    {
        title: 'Mango Smoothie',
        slug: 'mango-smoothie',
        images: './public/foodImages/MangoSmoothie.jpg',
        summary:
          'Experience the tropical delight with this refreshing mango smoothie, blending sweet ripe mangoes with yogurt and a hint of honey.',
        instructions: `
          1. Gather the ingredients:
             Peel and dice 2 ripe mangoes. You'll also need 1 cup of plain yogurt, a tablespoon of honey, and ice cubes.
      
          2. Blend the mangoes:
             In a blender, combine the diced mangoes and yogurt. Blend until smooth and creamy.
      
          3. Sweeten with honey:
             Add a tablespoon of honey to the blender and blend again to incorporate the sweetness.
      
          4. Add ice and blend:
             Toss in a handful of ice cubes and blend until the smoothie reaches your desired consistency.
      
          5. Serve chilled:
             Pour the mango smoothie into glasses, garnish with mango slices if desired, and enjoy this tropical treat on a hot day!
      
          Optional: You can also add a splash of coconut milk for an extra tropical twist.
        `,
        creator: 'Emily Davis',
        creator_email: 'emilydavis@example.com',
    },
    {
        title: 'Classic Margherita Pizza',
        slug: 'margherita-pizza',
        images: './public/foodImages/MargheritaPizza.jpg',
        summary:
          'Indulge in the simplicity of a classic Margherita pizza, featuring a thin crust topped with fresh tomatoes, mozzarella cheese, and basil leaves.',
        instructions: `
          1. Preheat the oven:
             Set your oven to the highest temperature (usually around 475°F or 245°C) and place a pizza stone or baking sheet inside.
      
          2. Roll out the dough:
             Roll out your pizza dough on a floured surface to your desired thickness. Transfer the dough to a piece of parchment paper.
      
          3. Prepare the toppings:
             Spread a thin layer of tomato sauce over the pizza dough. Arrange slices of fresh tomatoes and evenly distribute fresh mozzarella cheese. Drizzle with olive oil and season with salt and pepper.
      
          4. Bake the pizza:
             Transfer the pizza (with parchment paper) onto the preheated pizza stone or baking sheet. Bake for 10-12 minutes or until the crust is golden and the cheese is melted and bubbly.
      
          5. Add fresh basil:
             Once out of the oven, sprinkle fresh basil leaves over the hot pizza.
      
          6. Slice and enjoy:
             Slice the Margherita pizza into wedges, serve hot, and savor the classic flavors of this Italian favorite!
        `,
        creator: 'Carlos Rodriguez',
        creator_email: 'carlosrodriguez@example.com',
    },
    {
        title: 'Salami Pizza',
        slug: 'salami-pizza',
        images: './public/foodImages/SalamiPizza.jpg',
        summary:
          'Enjoy the bold and savory flavors of this salami pizza, topped with zesty tomato sauce, mozzarella cheese, and slices of delicious cured salami.',
        instructions: `
          1. Preheat the oven:
             Preheat your oven to 475°F (245°C) and place a pizza stone or baking sheet inside.
      
          2. Roll out the dough:
             Roll out your pizza dough on a floured surface to your preferred thickness. Transfer the dough to a piece of parchment paper.
      
          3. Prepare the toppings:
             Spread a generous layer of tomato sauce over the pizza dough. Evenly distribute shredded mozzarella cheese and top with slices of savory salami.
      
          4. Add extras (optional):
             Enhance the flavor with your favorite extras such as sliced olives, red pepper flakes, or fresh herbs.
      
          5. Bake the pizza:
             Transfer the pizza (with parchment paper) onto the preheated pizza stone or baking sheet. Bake for 10-12 minutes or until the crust is golden, and the cheese is melted and bubbly.
      
          6. Slice and serve:
             Remove the pizza from the oven, let it cool for a moment, then slice it into wedges. Serve hot and enjoy the deliciousness of this savory salami pizza!
        `,
        creator: 'Sophia Williams',
        creator_email: 'sophiawilliams@example.com',
    },
    {
        title: 'Sushi Roll',
        slug: 'sushi-roll',
        images: './public/foodImages/SushiRoll.jpg',
        summary:
          'Experience the artistry of Japanese cuisine with this deluxe sushi roll, featuring fresh sushi rice, a variety of colorful vegetables, and succulent slices of sashimi-grade fish.',
        instructions: `
          1. Gather the ingredients:
             Prepare sushi rice, nori (seaweed) sheets, sashimi-grade fish (such as tuna or salmon), cucumber, avocado, and sesame seeds.
      
          2. Prepare the rice:
             Cook sushi rice according to package instructions. Once cooked, season the rice with a mixture of rice vinegar, sugar, and salt. Allow it to cool.
      
          3. Prepare the fillings:
             Slice the cucumber, avocado, and fish into thin strips. Lay out the nori sheet on a bamboo sushi mat.
      
          4. Roll the sushi:
             Wet your hands to prevent sticking, then spread a thin layer of sushi rice over the nori, leaving a small border at the top. Arrange the cucumber, avocado, and fish strips along the bottom edge. Sprinkle with sesame seeds.
      
          5. Roll tightly:
             Lift the bamboo mat, starting from the bottom, roll the sushi into a tight cylinder. Seal the edge with a little water.
      
          6. Slice and plate:
             Use a sharp knife to slice the sushi roll into bite-sized pieces. Arrange on a plate and serve with soy sauce, pickled ginger, and wasabi.
      
          7. Enjoy:
             Dive into the flavors of this deluxe sushi roll, appreciating the combination of fresh ingredients and expert craftsmanship.
        `,
        creator: 'Yuki Tanaka',
        creator_email: 'yukitanaka@example.com',
      }      
]

db.prepare(`
    CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        images TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
    )
`).run();


async function initData() {
    const statement = db.prepare(`
        INSERT INTO meals VALUES (
            null,
            @slug,
            @title,
            @images,
            @summary,
            @instructions,
            @creator,
            @creator_email
        )
    `);

    for (const meal of dummyMeals) {
        statement.run(meal);
    }
}

initData();
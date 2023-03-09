const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {
      where: { 
        id: req.params.id
      },
    }
  ).then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((categoryData) => {
    res.json(categoryData);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Calls the update method on the Book model
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((updatedCategory) => {
    // Sends the updated Category as a json response
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err))
});

module.exports = router;

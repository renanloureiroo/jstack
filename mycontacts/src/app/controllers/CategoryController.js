const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        error: 'Name is required',
      });
    }

    const newCategory = await CategoriesRepository.create({ name });

    return response.status(201).json(newCategory);
  }
}

module.exports = new CategoryController();

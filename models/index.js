// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as:'category_product'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    as:'category_productTag'
  },
  
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    as:'tag_product'
  },
  
}); 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

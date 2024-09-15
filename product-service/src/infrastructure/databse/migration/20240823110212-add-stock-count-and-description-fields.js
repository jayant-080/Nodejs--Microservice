module.exports = {
  async up(db) {
    await db.collection('products').updateMany({}, {
      $set: {
        stockCount: 0,
        description: ''
      }
    });
  },

  async down(db) {
    await db.collection('products').updateMany({}, {
      $unset: {
        stockCount: "",
        description: ""
      }
    });
  }
};

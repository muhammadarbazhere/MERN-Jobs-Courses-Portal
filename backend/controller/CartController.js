const User = require('../model/UserModel');
const Course = require('../model/CourseSchema'); // Assuming you have a Course model

const addCart = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from the JWT
    const courseId = req.body.courseId;

    // Ensure the courseId is valid and exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const user = await User.findById(userId);
    if (!user.cart.includes(courseId)) {
      user.cart.push(courseId);
      await user.save();
    }

    res.status(200).json({ message: "Course added to cart" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const removeCart = async (req, res) => {
  try {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const user = await User.findById(userId);
    user.cart = user.cart.filter((id) => id.toString() !== courseId);
    await user.save();

    res.status(200).json({ message: "Course removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).populate("cart");
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addCart,
  removeCart,
  getCartItems,
};

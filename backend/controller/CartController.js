const Cart = require("../model/cartModel");

// Add course to cart
const addToCart = async (req, res) => {
  const userId = req.userId; // Assuming userId is set by verifyToken middleware
  const { courseId } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, courses: [] });
    }

    const courseExists = cart.courses.find(
      (item) => item.course.toString() === courseId
    );

    if (courseExists) {
      return res.status(400).json({ message: "Course already in cart" });
    } 

    cart.courses.push({ course: courseId, quantity: 1 });
    await cart.save();

    res.status(201).json({ message: "Course added to cart", cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove course from cart
const removeFromCart = async (req, res) => {
  const userId = req.userId; 
  const courseId = req.params.id; 

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const courseIndex = cart.courses.findIndex(
      (item) => item.course.toString() === courseId
    );

    if (courseIndex === -1) {
      return res.status(404).json({ message: "Course not found in cart" });
    }

    cart.courses.splice(courseIndex, 1);

    await cart.save();

    res.status(200).json({ message: "Course removed from cart", cart });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// Get user's cart
const getUserCart = async (req, res) => {
  const userId = req.userId; // Assuming userId is set by verifyToken middleware

  try {
    const cart = await Cart.findOne({ user: userId }).populate('courses.course');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart.courses);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  getUserCart,
};

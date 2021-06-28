import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import crypto from "crypto";
import bcrypt from "bcrypt";
const testing = {
  sucess: true,
  items: [
    {
      category: "books",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_8055_800x.jpg?v=1613384126",
      name: "BOOK1",
      price: 10,
      isfeatured: true,
    },
    {
      category: "books",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_8055_800x.jpg?v=1613384126",
      name: "BOOK2",
      price: 10,
      isfeatured: false,
    },
    {
      category: "books",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_8055_800x.jpg?v=1613384126",
      name: "BOOK3",
      price: 10,
      isfeatured: false,
    },
    {
      category: "books",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_8055_800x.jpg?v=1613384126",
      name: "BOOK4",
      price: 10,
      isfeatured: true,
    },
    {
      category: "crystal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/CelestinG_Ohlamoon_1200x_101d4d3c-0c1b-4163-a563-da0a2ec92ada_600x.png?v=1622705254",
      name: "CRYSTAL1",
      price: 10,
      isfeatured: true,
    },
    {
      category: "crystal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/CelestinG_Ohlamoon_1200x_101d4d3c-0c1b-4163-a563-da0a2ec92ada_600x.png?v=1622705254",
      name: "CRYSTAL2",
      price: 10,
      isfeatured: true,
    },
    {
      category: "crystal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/CelestinG_Ohlamoon_1200x_101d4d3c-0c1b-4163-a563-da0a2ec92ada_600x.png?v=1622705254",
      name: "CRYSTAL3",
      price: 10,
      isfeatured: false,
    },
    {
      category: "crystal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/CelestinG_Ohlamoon_1200x_101d4d3c-0c1b-4163-a563-da0a2ec92ada_600x.png?v=1622705254",
      name: "CRYSTAL4",
      price: 10,
      isfeatured: false,
    },
    {
      category: "incense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/salviabuntmini_ohlamoon_1000x_e1abad62-437e-4ffe-a945-e491b306a674_800x.png?v=1592385222",
      name: "INCENSE1",
      price: 10,
      isfeatured: true,
    },
    {
      category: "incense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/salviabuntmini_ohlamoon_1000x_e1abad62-437e-4ffe-a945-e491b306a674_800x.png?v=1592385222",
      name: "INCENSE2",
      price: 10,
      isfeatured: true,
    },
    {
      category: "incense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/salviabuntmini_ohlamoon_1000x_e1abad62-437e-4ffe-a945-e491b306a674_800x.png?v=1592385222",
      name: "INCENSE3",
      price: 10,
      isfeatured: false,
    },
    {
      category: "incense",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/salviabuntmini_ohlamoon_1000x_e1abad62-437e-4ffe-a945-e491b306a674_800x.png?v=1592385222",
      name: "INCENSE4",
      price: 10,
      isfeatured: false,
    },
    {
      category: "jewellery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_3233-3_800x.jpg?v=1599138697",
      name: "JEWELLERY1",
      price: 10,
      isfeatured: true,
    },
    {
      category: "jewellery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_3233-3_800x.jpg?v=1599138697",
      name: "JEWELLERY2",
      price: 10,
      isfeatured: true,
    },
    {
      category: "jewellery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_3233-3_800x.jpg?v=1599138697",
      name: "JEWELLERY3",
      price: 10,
      isfeatured: false,
    },
    {
      category: "jewellery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.shopify.com/s/files/1/0032/0379/3014/products/IMG_3233-3_800x.jpg?v=1599138697",
      name: "JEWELLERY4",
      price: 10,
      isfeatured: false,
    },
    {
      category: "tarot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://canary.contestimg.wish.com/api/webimage/5d6ce5d4d182bf1616ef1a83-large.jpg?cache_buster=580a69b7731deccd82b0305e4c31ee8e",
      name: "TAROT1",
      price: 10,
      isfeatured: false,
    },
    {
      category: "tarot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://canary.contestimg.wish.com/api/webimage/5d6ce5d4d182bf1616ef1a83-large.jpg?cache_buster=580a69b7731deccd82b0305e4c31ee8e",
      name: "TAROT2",
      price: 10,
      isfeatured: false,
    },
  ],
};
// import { testing } from "./testing.js";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/foretaget";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = Promise;

const ItemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isfeatured: {
    type: Boolean,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

const Item = mongoose.model("Item", ItemSchema);

const User = mongoose.model("User", UserSchema);

if (process.env.RESET_DB) {
  const seedDB = async () => {
    await Item.deleteMany();

    testing.items.forEach(async (item) => {
      const newItem = new Item(item);
      await newItem.save();
    });
  };
  seedDB();
}

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({ success: false, message: "Not authorized" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
};

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    const newUser = await new User({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, salt),
    }).save();

    res.json({
      success: true,
      userID: newUser._id,
      accessToken: newUser.accessToken,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

// or '/session' or '/login'
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true,
        userID: user._id,
        accessToken: user.accessToken,
      });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request", error });
  }
});

// Kommer behöva lägga till kontakt med databasen
app.get("/items", async (req, res) => {
  const { category, featured } = req.query;
  console.log(category);

  if (category) {
    try {
      const items = await Item.find({ category: category });
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: "Something went wrong", details: error });
    }
  } else if (featured) {
    try {
      const items = await Item.find({ isfeatured: featured });
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: "Something went wrong", details: error });
    }
  } else {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: "Something went wrong", details: error });
    }
  }
});

app.get("/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id).exec();
    res.json(item);
  } catch {}
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});

//For Dashboard And Pages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const DB = "mongodb://127.0.0.1:27017/Case"
mongoose.connect(DB).then(() => {
  console.log("db is connected");
}).catch((err) => {
  console.log(err);
})

const sche = mongoose.Schema;
const schm = sche({
  username:{
    type: String,
    requires: true
  },
  password:{
    type: String,
    requires: true
  }
})

const login = mongoose.model('logins', schm);
app.get('/logins', async (req, res) => {
  const dataaaa = await login.find();
  console.log(dataaaa);
  res.send(dataaaa);
})



const schema = mongoose.Schema;
const schemaModal = schema({
  Pagetitle: {
    type: String,
    requires: true
  },
  Category: {
    type: String,
    requires: true
  },
  Author: {
    type: String,
    requires: true
  }


});

const dashboard = mongoose.model('pages', schemaModal);


app.get('/pages', async (req, res) => {
  const data = await dashboard.find();
  res.send(data);
})
app.post('/pages', async (req, res) => {
  const data = new dashboard(req.body);
  const result = await data.save();
  res.send(result);
})

app.patch('/pages/:id', async (req, res) => {
  const { id } = req.params;

  const datat = await dashboard.findByIdAndUpdate(id, req.body, { new: true });
  res.json(datat);
});


app.delete("/pages/:id", async (req, res) => {
  const { id } = req.params;
  dashboard.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json({ message: "Data deleted successfully", data });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});


//For Users
const schemaa = mongoose.Schema;
const schemauser = schemaa({
  FullName: {
    type: String,
    requires: true
  },
  Email: {
    type: String,
    requires: true
  },
  Group: {
    type: String,
    requires: true
  }
});

const user = mongoose.model('users', schemauser);

app.post('/users', async (req, res) => {
  const data = new user(req.body);
  const result = await data.save();
  res.send(result);
})
app.get('/users', async (req, res) => {
  const dataa = await user.find();
  res.send(dataa);
})

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  user.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.json({ message: "Data deleted successfully", data });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});




app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;

  const datat = await user.findByIdAndUpdate(id, req.body, { new: true });
  res.json(datat);
});



//For Categories
const sch = mongoose.Schema;
const schemacat = sch({
  Category: {
    type: String,
    requires: true
  }


});
const cat = mongoose.model('cats', schemacat);
app.get('/cats', async (req, res) => {
  const dataaa = await cat.find();
  res.send(dataaa);
})






app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("5000 server is live");
  }
});
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use("/", require("./Routes/eventRoute"));
app.use("/", require("./Routes/sessionsRoutes"));
app.use("/", require("./Routes/ticketRoute"));
app.use("/", require("./Routes/eventgalleryRoute"));
app.use("/", require("./Routes/eventexceptionRoute"));
app.use("/", require("./Routes/bookingRoute"));
app.use("/", require("./Routes/sortRoute"));
app.use("/", require("./Routes/restaurantRoute"));
app.use("/", require("./Routes/categoryRoute"));
app.use("/", require("./Routes/cityRoute"));

// cron.schedule("*/5 * * * *", () => {
//   console.log("Running the updateEventDates function");
//   recurrentEvent();
// });

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error starting server:", error);
  });

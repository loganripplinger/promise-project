const express = require("express");
const os = require("os");
const Database = require("./model/database");
const populateDatabase = require("./scripts/populateDatabase");

const eventsRouter = require("./routes/events");
const courtDateRoute = require("./routes/court-date");
const reminderRoute = require("./routes/reminder");
const caseManagerAppointmentRoute = require("./routes/case-manager-appointment");
const clientDataUpdatedRoute = require("./routes/client-data-updated");

const app = express();

app.use(express.static("dist"));

db = Database.getDb();
populateDatabase(db);

app.use(express.json());

app.use("/api/events", eventsRouter);
app.use("/api/court-date", courtDateRoute);
app.use("/api/reminder", reminderRoute);
app.use("/api/case-manager-appointment", caseManagerAppointmentRoute);
app.use("/api/client-data-updated", clientDataUpdatedRoute);

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

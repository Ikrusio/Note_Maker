console.log("Starting app.js");

const yargs = require('yargs');
const applyExtends = require('yargs/lib/apply-extends');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

// ---------- type these commands in the terminal for running the note making app------------
// [
//   node app.js list 
//   node app.js add --title "new note" --body "contents to be displayed" 
//   node app.js list --remove --title "note title"
//   node app.js list read --title "note title"
// ]


if (command === "add") {
  console.log("adding note");
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getAll();
} else {
  console.log("COMMAND NOT VALID!");
}

const args = process.argv.slice(2);

const alarmClock = function(args) {
  for (let arg of args) {
    arg = Number(arg);
    if (arg < 0) {
      continue;
    }
    if (isNaN(arg)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write(".");
    }, (arg * 1000));
    setTimeout(() => {
      process.stdout.write("\n");
    }, arg * 1000);
  }
};

alarmClock(args);

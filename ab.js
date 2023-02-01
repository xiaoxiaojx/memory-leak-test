const fetch = require("node-fetch");

function run(times) {
  Array(times)
    .fill(1)
    .forEach((c) =>
      fetch("http://localhost:8000/", {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        },
        body: null,
        method: "GET",
      })
    );
}

setInterval(() => {
  run(100);
}, 1000);

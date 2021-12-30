const app = {};
app.form = document.querySelector('form');
app.convertedValue = document.querySelector('#convertedValue');
app.swatch = document.querySelector('.swatch');

app.componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

app.rgbToHex = (r, g, b) => {
  return "#" + app.componentToHex(r) + app.componentToHex(g) + app.componentToHex(b);
}

app.displayConvertedValue = (value) => {
  app.convertedValue.innerHTML = value;
  app.swatch.style.backgroundColor = value;
}

// app.hexToRGB = () => {

// }

// app.copyToClipboard = () => {

// }

app.init = () => {
  app.form.reset();

  app.form.addEventListener('submit', (e) => {
    e.preventDefault();

    let red = parseInt(document.querySelector('#red').value);
    let green = parseInt(document.querySelector('#green').value);
    let blue = parseInt(document.querySelector('#blue').value);

    console.log('hello');

    app.displayConvertedValue(app.rgbToHex(red, green, blue));
  });
};

(function(){
  app.init();
})();
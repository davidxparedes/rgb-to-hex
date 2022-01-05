const app = {};
app.form = document.querySelector('form');
app.convertedValueP = document.querySelector('#convertedValue');
app.swatch = document.querySelector('.swatch');
app.copyBtn = document.querySelector('#copyBtn');

app.componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

app.rgbToHex = (r, g, b) => {
  return "#" + app.componentToHex(r) + app.componentToHex(g) + app.componentToHex(b);
}

app.displayConvertedValue = (value) => {
  app.convertedValueP.innerHTML = value;
  app.swatch.style.backgroundColor = value;
  app.copyBtn.setAttribute('uk-tooltip', `copy ${value}`);
}

app.copyToClipboard = (convertedValue) => {
  navigator.clipboard.writeText(convertedValue);
}

app.init = () => {
  app.form.reset();

  app.form.addEventListener('submit', (e) => {
    e.preventDefault();

    let red = parseInt(document.querySelector('#red').value);
    let green = parseInt(document.querySelector('#green').value);
    let blue = parseInt(document.querySelector('#blue').value);
    let convertedValue = app.rgbToHex(red, green, blue);

    app.displayConvertedValue(convertedValue);
  });

  app.copyBtn.addEventListener('click', () => {
    app.copyToClipboard(convertedValue.innerHTML);
  });
};

(function(){
  app.init();
})();
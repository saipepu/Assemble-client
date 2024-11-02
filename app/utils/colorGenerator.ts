const getRandomColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const brightValue = Math.floor(Math.random() * 128 + 128).toString(16);
    color += brightValue.length === 1 ? '0' + brightValue : brightValue;
  }
  return color;
}

const getPastelGradient = () => {
  const pastelColor1 = getPastelColor();
  const pastelColor2 = getPastelColor();

  return `linear-gradient(135deg, ${pastelColor1}, ${pastelColor2})`;
}

const getPastelColor = () => {
  const red = Math.floor((Math.random() * 56) + 200); // High red value for warm tones
  const green = Math.floor((Math.random() * 128) + 128); // High green value
  const blue = Math.floor((Math.random() * 56) + 100); // Low blue for yellow-green range

  return `rgb(${red}, ${green}, ${blue}, 0.25)`;
}

export { getRandomColor, getPastelGradient, getPastelColor }
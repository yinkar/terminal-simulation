let content = 'curl -L git.io/babyyoda';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10);
  
  fill(255);
  textFont('Courier Prime');
  text(content, 10, 20, width - 10, height - 20);
  
  let lineCount = content.split('\n').length;
  
  push();
  stroke(int(frameCount / 25) % 2 ? 255 : 0);
  line(
    textWidth(content.split('\n').at(-1)) + textAscent() * 1.4, 
    15 * lineCount + 5, 
    textWidth(content.split('\n').at(-1)) + textAscent() * 1.4, 
    15 * lineCount + 5 + textAscent()
  );
  pop();
}

function keyPressed() {
  let char;
  if (key === 'Backspace') {
    content = content.slice(0, -1);
  }
  else if(key === 'Enter') {
    content = content + '\n';
  }
  else {
    content += key;
  }
  
}
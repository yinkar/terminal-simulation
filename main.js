import './style.css'
import p5 from 'p5';

let content = 'curl -L git.io/babyyoda';

const sketch = p => {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(10);
    
    p.fill(255);
    p.textFont('Courier Prime');
    p.text(content, 10, 20, p.width - 10, p.height - 20);
    
    let lineCount = content.split('\n').length;
    
    p.push();
    p.stroke(p.int(p.frameCount / 25) % 2 ? 255 : 0);
    p.line(
      p.textWidth(content.split('\n').at(-1)) + p.textAscent() * 1.4, 
      15 * lineCount + 5, 
      p.textWidth(content.split('\n').at(-1)) + p.textAscent() * 1.4, 
      15 * lineCount + 5 + p.textAscent()
    );
    p.pop();
  };

  p.keyPressed = function() {
    let char;
    if (p.key === 'Backspace') {
      content = content.slice(0, -1);
    }
    else if(p.key === 'Enter') {
      content = content + '\n';
    }
    else {
      content += p.key;
    }
  }
};

new p5(sketch);
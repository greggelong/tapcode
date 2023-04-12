let g = "101000101";
let space = "0000"; // space between letters
let indx = 0;
let code;
let letters = {
  a: 11,
  b: 12,
  c: 13,
  d: 14,
  e: 15,
  f: 21,
  g: 22,
  h: 23,
  i: 24,
  j: 25,
  k: 13, // k is the same a c
  l: 31,
  m: 32,
  n: 33,
  o: 34,
  p: 35,
  q: 41,
  r: 42,
  s: 43,
  t: 44,
  u: 45,
  v: 51,
  w: 52,
  x: 53,
  y: 54,
  z: 55,
};
let txt = "greg is a robot" // dont overwrite the p5 text with an variable
let textarr= txt.split(" ")
let wrd =0;
let cnv
let showAn = false;
function setup() {
  cnv =createCanvas(600, 600);
  cnv.parent("sketch-holder");

  background(0);
  stroke(0, 255, 0);
  noFill();
  frameRate(2);

  //code = g+space;
  makeCode(textarr[wrd]);
  print(code);

}

function draw() {
  background(0);
  if (showAn === true){
    textSize(36);
    noStroke();
    fill(255,0,0);
    text(textarr[wrd],20,36)
    stroke(0,255,0)

  }
  if (code[indx] === "0") {
    fill(0);
  } else if (code[indx] === "1") {
    fill(255, 0, 0);
  } else if (code[indx] === "S") {
    fill(0, 255, 0);
  }
  //print(code[indx])

  rect(width / 2 - 150, height / 2 - 150, 300, 300);
  indx++;
  if (code[indx] === "E") {
    // never sees "E"
    indx = 0;
  }

  //
}

function keyReleased(){
  if(key === "n"){
  wrd++
  wrd=wrd%textarr.length
  makeCode(textarr[wrd])
  indx=0;  // set blinking index to zero
  }
  if(key == "a"){
    // toggle answer
     if (showAn == true){
      showAn = false;
     }else{
      showAn = true;
     }
    
  }
  return false; // prevent any default behavior
}

function makeCode(instring) {
  code = "S00"; // long on means start of word
  sp = "0000";
  for (let i = 0; i < instring.length; i++) {
    let lt = instring[i];
    print(lt);
    // get number of knocks row n[0] by column n[1]
    let n = letters[lt].toString();
    // code row
    code += "10".repeat(n[0]);
    // add space letter part
    code += "00";
    // add column
    code += "10".repeat(n[1]);
    // add space after letter
    code += "0000";
  }
  code += "E";
  print(code)
}

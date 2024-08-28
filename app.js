let textArea = document.getElementById('input-text');
let copy = document.getElementById('img-copy');
let encryptor = document.getElementsByClassName('btn')[0];
let descrytor = document.getElementsByClassName('btn')[1];

encryptor.addEventListener('click', () => {
  let content = textArea.value;
  let regex = /^[a-z\s]+$/;
  if (regex.test(content)) encrypt(content);
  else alert('lee las normas')
});
descrytor.addEventListener('click', descryt)

copy.addEventListener('click', () => {
    try {
      navigator.clipboard.writeText(textArea.textContent);
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar, la función no está permitida en navegador móvil.');
      return;
    }
  textArea.innerText = '';
})

function encrypt(text) {
  let secretMessage = "";
  let char;
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'a': char = "ai"; break;
      case 'e': char = "enter"; break;
      case 'i': char = "imes"; break;
      case 'o': char = "ober"; break;
      case 'u': char = "ufat"; break;
      default: char = text[i]; break;
    }
    secretMessage += char;
  }
  textArea.value = secretMessage;
}

function descryt() {
  let content = textArea.value;
  let searches = [['ai', 'a'], ['enter', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']];
  for (let i = 0; i < 5; i++) {
    let _old_ = searches[i][0];
    let _new_ = searches[i][1];
    let regex = new RegExp(_old_, "g");
    content = content.replace(regex, _new_);
  }
  textArea.value = content;
}
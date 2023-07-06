const ref = {
  categories: document.querySelectorAll('.checkbox__input'),
  active: document.querySelectorAll('.checkbox.active'),
  resultElement: document.querySelector('.sum__checkbox'),
  textElement: document.querySelector('.text-sum__checkbox'),
}

function sumCheckbox() {
  let selectedCount = 0;


  for (let i = 0; i < ref.categories.length; i++) {
    const checCategorie = ref.categories[i];

    checCategorie.addEventListener('click', () => {
      if (checCategorie.checked) {
        selectedCount++;
      }
      else {
        selectedCount--;
      }
      if (selectedCount !== 0) {
        ref.resultElement.classList.remove('none');
        ref.textElement.classList.add('none')
      } else {
        ref.resultElement.classList.add('none')
        ref.textElement.classList.remove('none')
      }
      console.log(checCategorie.checked)
      ref.resultElement.innerHTML = `Обрано категорій: ${selectedCount}`;
    });
  }
}

sumCheckbox();
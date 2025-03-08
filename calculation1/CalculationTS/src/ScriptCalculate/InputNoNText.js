//Функция, что не дает писать текст. В качестве параметра получает символ
//Далее символ преобразуется в его индекс Unicode через термальный оператор
//Преобразует его либо стандартами js кода или через преобразования jQuery
//Когда значение попадает в общий интервал значений индексов, возвращает ложь. Таким образом буквы не записываются в 
export default function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}
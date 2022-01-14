function doArea(num) {
    switch(num) {
    case 0 : return (""); break;
    case 1 : var length = prompt("Введите ширину квадрата:", "");
    length = length * length;
    return (length); break;
    case 2 : var width = prompt("Введите ширину прямоугольника:", "");
    var height = prompt("Введите высоту прямоугольника:", "");
    return (width * height); break;
  
    }
    }

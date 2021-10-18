var length = 0;
var print = '';
var pendings = []
start();
function start(){
    while(true){
        var temp = prompt('Enter the Symbols') 
        if(temp == ' '||temp == ''){
            confirm('Please do not enter any spaces, if you want to cease the current process, just click cancel')
        }else{
            if(temp != null) pendings.push(temp) 
        }
        if(temp == null && pendings.length > 0) break
    }
    
    length = pendings.length 
    
    
    while(true){
    
        var shape = prompt('Enter the shape()')
        if(shape != '三角形' && shape != '正方形' && shape != '菱形'){ 
            confirm('Please Enter "三角形/正方形/菱形"')
            continue
        }
    
        var size = prompt('Size')
        var checkNum = new RegExp(+[0-9]);
        var spaceCheck = new RegExp(/\s*/);
        if(checkNum.exec(size)!=null || isNaN(size)){
            confirm('Please Enter a number')
            continue
        }
        if(shape == '菱形' && size % 2 == 0){
            confirm('Rhombus requires a size of odd number')
            continue
        }
        if(shape == '三角形'){
            var print = triangle(size)
        }
        if(shape == '正方形'){
            var print = square(size)
        }
        if(shape == '菱形'){
            var print = rhombus(size)
        }
        break
    }
    alert(print)
}
function update(length, position){
    position += 1
    if(position == length){
        position = 0
    }
    return position
}
function triangle(num){
var currentLev = 1;
var stageNum = 1;
var result = '';
var position = 0;
while(currentLev<=num){
for(i = num-currentLev; i>=1;i--){
    result+=' '
}
for(i=0;i<stageNum;i++){
    result+=pendings[position]
    position=update(length,position);
}
result+='\n'
currentLev+=1;
stageNum+=2;
}
return result;
}
function square(size){
    var result = ''
    var position = 0
    for(i = 0; i < size; i ++){
        for(j = 0; j < size; j ++){
            result += pendings[position]
            position = update(length,position)
        }
        result += '\n'
    }
    return result
}
function rhombus(size){
    var result = ''
    var position = 0
    for(i = 0; i < size; i += 2){
        for(j = 0; j < (size-i)/2; j ++){
            result += ' '
        }
        for(j = 0; j < i + 1; j ++){
            result += pendings[position]
            position = update(length,position)
        }
        result += '\n'
    }
    for(i = size -2; i > 0; i -= 2){
        for(j = 0; j < (size-i)/2+1; j ++){
            result += ' '
        }
        for(j = 0; j < i; j ++){
            result += pendings[position]
            position = update(length,position)
        }
        result += '\n'
    }
    return result
}
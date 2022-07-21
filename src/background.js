const background = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
]; 
// const(상수)를 선언한 후 background [배열] 사용하여 img 폴더의 파일을 가져 올 수 있게 파일명을 배열안에 입력한다. 단순한 string//

const randomImages = background[Math.floor(Math.random() * background.length)];
//배열 property를 랜덤으로 가져오기 위해 Math 함수와 그 메소드를 사용하는 const를 선언한다.//
const createIMG = document.createElement("img"); // createElement는 앞에 document가 꼭 붙는다//
//html에 img태그를 생성할 수 있게 const로 선언해준다.//


createIMG.src = `img/${randomImages}`;
//createIMG는 html에서 img이다. src를 붙이면 html에서는 <img src=""> 형태로 나온다.`img/${randomImages}`와 같이 입력하여 img가 랜덤으로 나오게 한다.//
//만약 createIMG.src = ``; 입력하면 img.src(unknown);으로 나온다//
document.body.appendChild(createIMG); //append는 부모의 맨 아래지만 prepend를 사용하면 부모기준 첫번째에 자리를 잡는다.//
//마지막으로 appendChild()메소드를 사용하여 img태그를 부모 속성인 body 안 가장 아래에 img태그를 위치시킨다//
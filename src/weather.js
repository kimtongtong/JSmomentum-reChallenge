const API_KEY = "1612ca150a59a697baa79bf2b766a295";
//openweathermap.org 사이트 가입 후 받을 수 있음//

function success(position){ //position은 인자값은 디버깅 했을때 "허용"을 발생하는 이벤트 정보 값이다.//
  const lat = position.coords.latitude; //geolocation 메소드에서 발생한 이벤트 정보 json 값의 일부//
  const lng = position.coords.longitude;
  console.log(position) //position은 navigator 함수를 실행 할때 현재 위치에 대한 이벤트 정보이다.//
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`; //openweathermap 사이트에서 가져온 api(cuurent weather data)의 url 주소. 주소 안에  lat, lng, 그리고 api 키를 넣으면 된다//
  fetch(url) //fetch 함수를 사용하여 url을 가져오며 "검사"를 해보면 network에 weather이 생기는 것을 알 수 있다.//
    .then(response => response.json()) //url을 가져온 다음 then을 사용하여 response 값을 가져와야 한다. json은 geloca의 오브젝트 파일의 정보 모두를 뜻한다.//
    //response은 network에서 weather 정보를 누르면 respose 목록이 나온다. 거기서 받아 오는 것 같다.//
    .then(info => { //info는 함수의 인자 같다. 이름은 상관이 없는 듯 하다.//
      const placeName = document.querySelector("#weather span:first-child");
      const placeWeather = document.querySelector("#weather span:nth-child(2)");
      const weatherTemp = document.querySelector("#weather span:last-child");
    const name = info.name;
    const weather = info.weather[0].main; //weather뒤에 [0] 을 쓰는 이유는 [배열]안 {오브젝트}로 되어있기떄문에 배열[오브젝트]를 가져와야 한다.
    const temp = info.main.temp;
    console.log(info) //openweather api에서 가져온 주소에 대한 이벤트 정보이다.//
    placeName.innerText = name;
    placeWeather.innerText = weather;
    weatherTemp.innerText = temp;
  }); //허용 했을떄의 실행함수//
}
function error() {
  alert("Can't find you position")
} //거부 했을 떄의 실행 함수//


//geolocation.getCurrentPosition(성공, 실패) 메소드는 꼭 두 가지의 agurment(여기서는 함수)가 필요하다.//
navigator.geolocation.getCurrentPosition(success, error); //addEventListener 과 비슷하다.//
//navigato함수를 사용하여 위치 정보를 불러올 수  있게 한다.//
//geolocation.getCurrentPosition 메소드를 사용해서 우리의 위치 정보를 불러올 수 있도록 해준다.//



const API_KEY = "1612ca150a59a697baa79bf2b766a295";
//openweathermap.org 사이트 가입 후 받을 수 있음//

function success(position){ //position은 인자값은 디버깅 했을때 "허용"을 발생하는 이벤트 정보 값이다.//
  const lat = position.coords.latitude; //geolocation 메소드에서 발생한 이벤트 정보 json 값의 일부//
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`; //openweathermap 사이트에서 가져온 api(cuurent weather data)의 url 주소. 주소 안에  lat, lng, 그리고 api 키를 넣으면 된다//
  fetch(url) //fetch 함수를 사용하여 url을 가져오며 "검사"를 해보면 network에 weather이 생기는 것을 알 수 있다.//
    .then(response => response.json()) //url을 가져온 다음 then을 사용하여 response 값을 가져와야 한다. json은 geloca의 오브젝트 파일의 정보 모두를 뜻한다.//
    .then(data => { //화면에 나오게 하기 위해 const로 선언을 해준 후 html에 넣어주도록 한다.//
      const placeName = document.querySelector("#weather span:first-child");
      const placeWeather = document.querySelector("#weather span:last-child");
    const name = data.name;
    const weather = data.weather[0].main;
    placeName.innerText = name;
    placeWeather.innerText = weather;
  }); //허용 했을떄의 실행함수//
}
function error() {
  alert("Can't find you position")
} //거부 했을 떄의 실행 함수//


//geolocation.getCurrentPosition(성공, 실패) 메소드는 꼭 두 가지의 agurment(여기서는 함수)가 필요하다.//
navigator.geolocation.getCurrentPosition(success, error); //addEventListener 과 비슷하다.//
//navigato함수를 사용하여 위치 정보를 불러올 수  있게 한다.//
//geolocation.getCurrentPosition 메소드를 사용해서 우리의 위치 정보를 불러올 수 있도록 해준다.//



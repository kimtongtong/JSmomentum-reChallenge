const quotes = [
  {quote : "습관의 실패는 '나'의 잘못이 아니라 '접근방식'이 잘못 되었다.",
   author : "습관의 디테일"  
  },
  {quote : "좋은 하루 말고 '최고'의 하루를 보내",
   author : "포트나이트 게임 이모트 중"  
  },
  {quote : "잡생각이 많은 것은 그만큼 한가하기 떄문이다.",
   author : "나 자신"  
  },
  {quote : "입밖으로 안좋은 말이 나오는 것은 내 감정을 컨트롤 하지 못하고 있다는 것",
   author : "나 자신"  
  },
  {quote : "나는 아무 것도 모른다 아무것도 하지 않았기에",
   author : "나 자신" 
  },
  {quote : "명언, 성공한 사람들을 사례 100번 얘기 해도 모른다 왜냐? 내가 안해봤으니까 그걸 어떻게 알어?",
   author : "나 자신" 
  },
  {quote : "바뀌기 위해서는 터닝 포인트 즉. 큰 자극이 필요하다. 그 다음은 의지 싸움이다.",
   author : "나 자신" 
  },
  {quote : "언제나 겸손. 우쭐대지 마라. 나 자신을 시험하는 것은 좋은 것. 남을 시험하지 말자",
   author : "나 자신" 
  },
  {quote : "프로그래밍의 길에 발을 들인 너는 이미 개발자 이다. 보답은 완성에서 받는다.",
   author : "나 자신" 
  },
  {quote : "그지 같은 잡생각들아 자극주지말고 내 머리에서 나가는 게 좋아. 개!@#!@%!@#들아",
   author : "나 자신" 
  },
] // 랜덤 명언을 출ㅕ하기 위해 [배열] 안에 {오브젝트}를 감싸줘서 quote와 author을 써주도록 한다. //


const quote = document.querySelector("#quote-form span:first-child");
//quote 는 span 태그의 첫번째 자식으로 변수 선언한다.//
const author = document.querySelector("#quote-form span:last-child");
//author 은 span 태그의 마지막 자식으로 변수 선언한다.//

const rnadomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 랜덤으로 [배열] 을 출력하기 위해 위와 같이 Math() 함수를  사용하여 랜덤 숫자를 가져올 수 있다. 배열의 개수에 맞게 출력//
// * math.random메소드는 0 ~ 1 사이의 난수를 출력하므로 소수점 자라의 랜덤 난수가 나온다//

quote.innerText = rnadomQuote.quote; //변수 선언된 quote를 html에 넣는다//
author.innerText = rnadomQuote.author;//변수 선언된 author를 html에 넣는다//

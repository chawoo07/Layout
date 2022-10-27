const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //const clickedClass = "clicked"
    
    //string을 변수에 저장하는건 아주 유용
    //만약 틀렸을시에도 js콘솔에서도 바로 알수가 있음
    
        
        //classlist는 말 그대로 class들의 목록으로 작업할 수 있게끔 허용해줌
        //classname은 그냥 모든걸 교체해버림 이전 class들은 상관하지 않고

        //classlist.constains : 명시한 class가 html element의 
        //클래스에 포함되어 있는지 말해줌

    //if(h1.classList.contains(clickedClass)){
        //h1.classList.remove(clickedClass);
        
        //만약 h1의classlist에 clickedclass가 
        //포함되어있다면 clickedclass를 지움
    
    //} else {
        //h1.classList.add(clickedClass);
        
        //포함되어 있지 않다면 clickedclass릃 추가
    
    //아니면은
    
    
    h1.classList.toggle("clicked");
    //toggle은 h1의 classList에 "clicked" class가 이미 있는지 확인해서
    //만약 있다면 toggle이 clicked를 제거함
    //만약 h1의 classlist에 clicked가 존재하지 않는다면
    //toggle은 clicked를 classList에 추가해준다.
    //버튼같은 역활 누르면 불켜지고 또누르면 꺼지는 
    //위에 코드를 단 한줄로 해줌
} 


h1.addEventListener("click", handleTitleClick);

